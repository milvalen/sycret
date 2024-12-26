export const stringifyParams = (
  params: Record<string, string | number | boolean | null | undefined>,
  withQuerySign = true,
  join?: string
) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, val]) => {
    val !== null &&
    val !== '' &&
    val !== undefined &&
    query.append(key, val.toString());
  });

  let stringified = query.toString();

  if (join !== undefined && join.length > 0)
    stringified = [stringified, join].filter(Boolean).join('&');

  if (withQuerySign) return stringified ? `?${stringified}` : '';
  return stringified;
};