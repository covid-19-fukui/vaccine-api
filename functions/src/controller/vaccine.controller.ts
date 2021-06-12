import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './http.exception.filter';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import VaccineApiResponse from './dto/vaccine.api.response';
import VaccineParamter from './dto/vaccine.paramter';
import { VaccineService } from 'src/service/vaccine.service';

/**
 * コントローラ
 */
@Controller('v1')
@ApiTags('v1')
@UseFilters(HttpExceptionFilter)
export class VaccineController {
  /**
   * コンストラクタ
   *
   * @param {VaccineService} vaccineService サービス
   */
  constructor(private readonly vaccineService: VaccineService) {}
  /**
   * ワクチン接種状況の取得
   *
   * @param {VaccineParamter} paramter パラメータ
   * @returns {Promise<VaccineApiResponse>} ワクチン接種状況のレスポンス
   */
  @Get('vaccine/:prefectureCode')
  @ApiCreatedResponse({
    status: 200,
    description: 'ワクチン接種状況の取得が成功した場合、レスポンスとして返す。',
    type: VaccineApiResponse,
  })
  async getVaccine(
    @Param() paramter: VaccineParamter,
  ): Promise<VaccineApiResponse> {
    return this.vaccineService.getVaccine(paramter.prefectureCode);
  }
}
