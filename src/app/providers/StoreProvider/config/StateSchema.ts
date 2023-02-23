import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/UserSchema';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
