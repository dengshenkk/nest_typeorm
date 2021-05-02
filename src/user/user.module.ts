import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@/user/entities/user.entity';
import { PhotoModule } from '@/photo/photo.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PhotoModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
