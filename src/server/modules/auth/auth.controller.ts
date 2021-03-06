import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { get } from 'http';
import { UserDTO } from '../user/user.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,

    ) { }



    @Get("/onlyauth")
    @UseGuards(AuthGuard("jwt"))
    async hiddenInformation() {
        return "hidden information";
    }
    @Get("/anyone")
    async publicInformation() {
        return "this can be seen by anyone";
    }

    @Post('register')
    async register(@Body() UserDTO: UserDTO) {
        const user = await this.userService.create(UserDTO);
        const payload = {

            email: user.email,
        };

        const token = await this.authService.signPayload(payload);
        return { user, token };
    }
    @Post('login')
    async login(@Body() loginDTO: LoginDTO) {
        const user = await this.userService.findByLogin(loginDTO);
        const payload = {
            email: user.email,
        };
        const token = await this.authService.signPayload(payload);
        return { user, token };
    }

    @Get('details')
    async userDetails(@Body() loginDTO: LoginDTO) {
        const user = await this.userService.findByLogin(loginDTO);

        return { user };
    }


}