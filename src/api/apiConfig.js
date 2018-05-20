function getApiAddress() {
    if (location.host.search('juwai.io') !== -1) {
      localStorage.setItem(
        'client_secret',
        'TGsFa1qhmZX43ANOQFk8rKiBJcCFthMdNErF8Ej3',
      );
      return 'http://mobile-api.juwai.io';
    } else if (location.host.search('juwai.com') !== -1) {
      localStorage.setItem(
        'client_secret',
        'Nay5c1GB9PYWfpGLWlBEIdsQKIvJ3baoe7CdIRAY',
      );
      return 'https://mobile-api.juwai.com';
    }
    localStorage.setItem(
        'client_secret',
        'TGsFa1qhmZX43ANOQFk8rKiBJcCFthMdNErF8Ej3',
      );
    return 'http://mobile-api.juwai.io';
  }
  
  function getAppId() {
    if (location.host.search('juwai') !== -1) {
      return 'wx9d59e57030b00cbb';
    }
    return 'wx1f31a6a52dbe8588';
  }
  
  function getHost() {
    const url = `${location.protocol}//${location.host}`;
    return url;
  }
  
  const apiConfig = {
    methods: {
      get: 'get',
      post: 'post',
      delete: 'delete',
    },
    baseUrl: getApiAddress(),
    locationUrl: getHost(),
    appid: getAppId(),
    baseConfig: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${getAppId()}&redirect_uri=${encodeURIComponent(getHost())}%2Fgetwechat&response_type=code&scope=snsapi_userinfo&state=`,
    login: '/oauth/token',
    agentCompany: '/china-agent/company/',
    getCurrentUser: '/china-agent/current-user',
    sms: '/china-agent/sms',
    wechatMess: '/wechat-profile/',
    getProperty: '/china-agent/project/',
    getFilter: '/china-agent/filter/',
    getFilterPrice: '/country/',
    getWechat: '/wechat-profile/',
    getWeChatSinature: '/wechat-url-signature',
  };
  
  export default apiConfig;
  