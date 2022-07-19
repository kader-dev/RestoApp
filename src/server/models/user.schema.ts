import * as bcrypt from 'bcrypt';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CategoryDocument = User & Document;

@Schema()
export class User {

    @Prop()
    email: string;
    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);


UserSchema.pre('save', async function (next: (err?: Error) => void) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this['password'], 10);
        this['password'] = hashed;
        return next();
    } catch (err) {
        return next(err);
    }
});
