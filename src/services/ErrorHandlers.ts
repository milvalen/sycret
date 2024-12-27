import {ZodError} from 'zod';

const handleIncorrectParse = (
    e: ZodError,
    consolePrefix: string
): Promise<never> => {
  console.error(consolePrefix + ': cannot parse incoming data:', e);
  return Promise.reject(e.format());
};

export { handleIncorrectParse };
