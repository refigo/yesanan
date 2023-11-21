import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

export interface UserCreateProps {
  name: string;
  password: string;
}

export interface UserSignInProps
  extends Pick<UserCreateProps, 'name' | 'password'> {}

export interface UserUpdateProps {
  lat: number;
  lon: number;
  isRecommendateLunch: boolean;
}

@Entity('users')
@Unique(['name'])
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: false, length: 60 })
  name: string;

  @Column({ name: 'password', type: 'varchar', nullable: false, length: 60 })
  password: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt?: Date | null;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date | null;

  static byId(id: number): User {
    const user = new User();
    user.id = id;
    return user;
  }

  static create({
    name,
    password,
  }: UserCreateProps): User {
    const user = new User();

    user.name = name;
    user.password = password;

    return user;
  }

  static of({ name, password }: UserSignInProps): User {
    const user = new User();

    user.name = name;
    user.password = password;

    return user;
  }

  setHashedPassword(hashedPassword: string): void {
    this.password = hashedPassword;
  }
}
