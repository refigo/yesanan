import { Exclude, Expose } from 'class-transformer';
import { User } from '../entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserResDto {
  @Exclude() private readonly _id: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _password: string;
  @Exclude() private readonly _createdAt: Date;
  @Exclude() private readonly _updatedAt?: Date | null;
  @Exclude() private readonly _deletedAt?: Date | null;

  constructor(user: User) {
    Object.keys(user).forEach((key) => (this[`_${key}`] = user[key]));
  }

  @ApiProperty({ description: '유저의 식별자 id 입니다', example: '1' })
  @Expose()
  get id(): number {
    return this._id;
  }

  @ApiProperty({
    description: '유저의 email 입니다',
    example: 'feed-me-admin1@naver.com',
  })
  @Expose()
  get name(): string {
    return this._name;
  }

  @ApiProperty({
    description: '유저가 회원 가입한 날짜 정보입니다.',
    example: '2023-11-04T16:33:50.472Z',
  })
  @Expose()
  get createdAt(): Date {
    return this._createdAt;
  }

  @ApiProperty({
    description: '유저 정보가 수정된 가장 최근 날짜의 정보입니다.',
    example: '2023-11-04T16:33:50.472Z',
  })
  @Expose()
  get updatedAt(): Date {
    return this?._updatedAt;
  }
}
