/**
 * story controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::story.story',
  ({ strapi }) => ({
    // async create(ctx) {
    //   console.log('Hello::::::::controller:::::::create');
    //   // some logic here
    //   const response = await super.create(ctx);
    //   // some more logic
    //   return response;
    // },
    // async delete(ctx) {
    //   console.log('Hello::::::::controller:::::::delete');
    //   // some logic here
    //   const response = await super.delete(ctx);
    //   // some more logic
    //   return response;
    // },
    // async publish(ctx) {
    //   console.log('Hello::::::::controller:::::::publish');
    //   // some logic here
    //   const response = await super.publish(ctx);
    //   // some more logic
    //   return response;
    // },
  })
);
