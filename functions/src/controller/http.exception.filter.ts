import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';

/**
 * エラーハンドリング
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * 例外を全て受け付けるハンドラー
   *
   * @param exception 例外
   * @param host host
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    response
      .header('Content-Type', 'application/problem+json')
      .status(status)
      .json({
        title: this.getTitle(status),
        detail: exception.message,
      });
  }

  /**
   * エラーレスポンスのタイトルを取得する
   *
   * @param status ステータス
   * @returns　タイトル
   */
  private getTitle(status: number): string {
    switch (status) {
      case 404:
        return 'Not Found';
      default:
        return 'UndefinedError';
    }
  }
}
