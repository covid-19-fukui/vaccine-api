import { Controller, Get, Param, Query, UseFilters } from '@nestjs/common';
import UserService from '../service/user.service';
import { HttpExceptionFilter } from './http.exception.filter';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import UserOauthResponse from './dto/user.oauth.response';
import UserOauthRequest from './dto/user.oauth.request';
import UserOauthParamter from './dto/user.oauth.paramter';

/**
 * コントローラ
 */
@Controller('v1/oauth')
@ApiTags('v1/oauth')
@UseFilters(HttpExceptionFilter)
export default class UserController {
  /**
   * コンストラクタ
   * @param appService サービス層
   */
  constructor(private readonly userService: UserService) {}

  /**
   * ユーザの取得
   *
   * @param userId ユーザID
   * @returns ユーザのレスポンス
   */
  @Get('favorite/:userId')
  @ApiCreatedResponse({
    description: 'ユーザの取得が成功した場合、レスポンスとして返す。',
    type: UserOauthResponse,
  })
  async getUser(
    @Param() paramter: UserOauthParamter,
    @Query() request: UserOauthRequest,
  ): Promise<UserOauthResponse> {
    return this.userService.getUser(paramter.userId, request.tweetId);
  }
}
