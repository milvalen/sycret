import {z} from 'zod';

export type Sale = z.infer<typeof SaleSchema>;

export type SaleData = {
  Id: number;
  TableName: string;
  PrimaryKey: string;
  Price: number;
  Summa: number;
  ClientName: string;
  Phone: string;
  Email: string;
  // PaymentTypeId: 2;
  // UseDelivery: 0;
  IsGift?: number;
  MsgText?: string;
  PName?: string;
  PPhone?: string;
}

export const SaleSchema = z.object({ CERTNUMBER: z.string() });
