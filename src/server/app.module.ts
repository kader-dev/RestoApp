import { ItemModule } from './modules/item/item.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { ViewModule } from '~server/modules/view/view.module'
import { DummyModule } from '~server/modules/dummy/dummy.module'
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './modules/categorie/category.module';

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
    AuthModule,
    CategoryModule,
    ItemModule],
  controllers: [],
  providers: []
})
export class AppModule { }
