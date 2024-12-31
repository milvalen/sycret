import axios from 'axios';
import {stringifyParams} from './utils';
import {handleIncorrectParse} from './ErrorHandlers';
import {Sale, SaleData, SaleSchema} from '../types/SaleType';

interface SaleService {
  OSSale: (data: SaleData) => Promise<Sale>;
}

const OSSale = async (data: SaleData): Promise<Sale> => {
  const response = await axios(
    `${process.env.API_ENDPOINT!}${stringifyParams({ ApiKey: process.env.API_KEY, MethodName: 'OSSale' })}${stringifyParams(data)}`,
  );

  const result = SaleSchema.safeParse(response.data.data);
  if (!result.success) return handleIncorrectParse(result.error, 'OSSale');

  return result.data;
}

export const saleService: SaleService = {
  OSSale: OSSale,
}
