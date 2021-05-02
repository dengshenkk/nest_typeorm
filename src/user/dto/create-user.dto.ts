import { PhotoEntity } from '@/photo/entities/photo.entity';

export class CreateUserDto {
  username: string;
  photos: PhotoEntity[];
}
