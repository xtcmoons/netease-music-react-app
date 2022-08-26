import request from '../../utils/request';

export function fetchBanner() {
  return request({
    url: '/banner',
    method: 'GET',
  });
}

export function fetchPersonalized() {
  return request({
    url: '/personalized',
    method: 'GET',
  });
}
