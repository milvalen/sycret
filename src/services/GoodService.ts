import {Good, GoodSchema} from '../types/GoodType';
import axios from 'axios';
import {handleIncorrectParse} from './ErrorHandlers';
import {stringifyParams} from './utils';

interface GoodsService {
  OSGetGoodList: () => Promise<Good[]>;
}

const OSGetGoodList = async (): Promise<Good[]> => {
  const response = await axios(
    `${process.env.API_ENDPOINT!}${stringifyParams({
      ApiKey: process.env.API_KEY!, MethodName: 'OSGetGoodList'
    })}`,
  );

  const result = GoodSchema.array().safeParse(response.data.data);
  if (!result.success) return handleIncorrectParse(result.error, 'OSGetGoodList');

  return result.data;
}

export const goodService: GoodsService = {
  OSGetGoodList: OSGetGoodList,
}
