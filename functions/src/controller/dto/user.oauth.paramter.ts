import { IsNotEmpty, IsString } from 'class-validator';

export default class UserOauthParamter {
  @IsNotEmpty()
  @IsString()
  userId: string;

  /**
   * コンストラクタ
   *
   * @param userId userId
   */
  constructor(userId: string) {
    this.userId = userId;
  }
}
