import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '@/common/entity/baseEntity';
import { UserEntity } from '@/user/entities/user.entity';

@Entity('t_photo')
export class PhotoEntity extends BaseEntity {
  @Column()
  url: string;

  @Column()
  location: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
}
