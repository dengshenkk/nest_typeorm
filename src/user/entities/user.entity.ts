import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '@/common/entity/baseEntity';
import { PhotoEntity } from '@/photo/entities/photo.entity';

@Entity('t_user')
export class UserEntity extends BaseEntity {
  @Column()
  username: string;

  @OneToMany(() => PhotoEntity, (photo) => photo.user)
  photos: PhotoEntity[];
}
