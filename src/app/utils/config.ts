const baseUrl = 'https://intranetapi.wakala.it/';

export const Urls = {
  auth: {
    token: baseUrl + 'wauth/token',
    login: baseUrl + 'web/users/login',
    refreshToken: baseUrl + 'wauth/refreshtoken',
  },
  menu: {
    menu: baseUrl + 'web/menu'
  },
  info: {
    news: baseUrl + 'web/info/news'
  }
};
