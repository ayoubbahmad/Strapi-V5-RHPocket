import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    tutorials: false,
    translations: {
      en: {
        'app.components.HomePage.community': ' ',
        'app.components.BlockLink.cloud': ' ',
        'app.components.BlockLink.cloud.content': ' ',
      },
    },
    menu: {
      isDisplayed: false,
      links: [],
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
