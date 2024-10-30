import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.db.lifecycles.subscribe({
      models: [], // optional;
      beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        console.log('beforeCreate:::::::::::');
        // event.state = 'doStuffAfterWards';
      },
      afterCreate(event) {
        console.log('afterCreate:::::::::::');
        // if (event.state === 'doStuffAfterWards') {
        // }
        const { result, params } = event;
        // do something to the result
      },
    });
    // // generic subscribe for generic handling
    // strapi.db.lifecycles.subscribe((event) => {
    //   if (event.action === 'beforeCreate') {
    //     // do something
    //     console.log('beforeCreate:::::::::::2');
    //   }
    // });
  },
};
