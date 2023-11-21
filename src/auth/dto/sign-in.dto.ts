import { User } from '../../user/entity/user.entity';
import { PickType } from '@nestjs/swagger';
import { SignUpDto } from './sign-up.dto';

export class SignInDto extends PickType(SignUpDto, ['name', 'password']) {
  toEntity(): User {
    const props = {
      name: this.name,
      password: this.password,
    };

    return User.of(props);
  }
}
