import { Injectable } from '@nestjs/common';

type AuthInput = { username: string; password; string };
type SignInData = { userId: number; username: string };

@Injectable()
export class AuthService {
  async validateUser(input: AuthInput): Promise<SignInData | null> {
    return null;
  }
}
