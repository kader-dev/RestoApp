import { LoginDTO } from './../auth/login.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../../shared/types/user';
import { UserDTO } from './user.dto';
import { Payload } from '../../../shared/types/payload';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<User>,
    ) { }

    async create(UserDTO: UserDTO) {
        const { email } = UserDTO;
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }
        const createdUser = new this.userModel(UserDTO);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }

    async findByPayload(payload: Payload) {
        const { email } = payload;
        return await this.userModel.findOne({ email });
    }

    async findByLogin(UserDTO: LoginDTO) {
        const { email, password } = UserDTO;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
        }
        if (await bcrypt.compare(password, user.password)) {
            return this.sanitizeUser(user)
        } else {
            throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
        }
    }
    // return user object without password
    sanitizeUser(user: User) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
    }
}