import {z} from 'zod';

export type Good = z.infer<typeof GoodSchema>;

export const GoodSchema = z.object({
  ID: z.string(),
  TABLENAME: z.string(),
  PRIMARYKEY: z.string(),
  NAME: z.string(),
  DESCRIPTION: z.string().nullable(),
  PRICE: z.string(),
  SUMMA: z.string(),
  DISCOUNT: z.string().nullable(),
});
