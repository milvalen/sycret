import {z, ZodType} from 'zod';

const phoneRegExp = /^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;

export type Sale = z.infer<typeof SaleSchema>;

export const SaleValidation: ZodType<SaleForm> = z.object({
  ClientName: z.string(),
  Phone: z.string().regex(phoneRegExp, 'Invalid phone number'),
  Email: z.string().email('Invalid email address'),
  IsGift: z.number().optional(),
  MsgText: z.string().optional(),
  PName: z.string().optional(),
  PPhone: z.string().regex(phoneRegExp, 'Invalid phone number').optional(),
});

export type SaleData = SaleForm & {
  Id: number;
  TableName: string;
  PrimaryKey: string;
  Price: string;
  Summa: string;
  PaymentTypeId: 2;
  UseDelivery: 0;
};

export const SaleSchema = z.object({ CERTNUMBER: z.string() });

export type SaleForm = {
  ClientName: string;
  Phone: string;
  Email: string;
  IsGift?: number;
  MsgText?: string;
  PName?: string;
  PPhone?: string;
}
