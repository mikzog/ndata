import _get from 'lodash/get';
import qs from 'query-string';

export function getQueryParam(search: string, query: string) {
  const parsed = qs.parse(search);
  return _get(parsed, query, '');
}
