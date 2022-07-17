import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { ViewModule } from '~server/modules/view/view.module'
import { DummyModule } from '~server/modules/dummy/dummy.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    DummyModule,
    ViewModule,
    UserModule,
    AuthModule],
  controllers: [],
  providers: []
})
export class AppModule { }
