import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { TypeOrmConfigService } from './configs/typeorm';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    // TypeOrmModule.forRootAsync({
    //   useClass: TypeOrmConfigService,
    // }),
    UserModule,
  ],
})
export class AppModule {}
