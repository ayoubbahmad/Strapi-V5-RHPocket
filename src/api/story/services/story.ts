/**
 * story service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService(
  'api::story.story',
  ({ strapi }) => ({
    // async create(params) {
    //   // params
    //   console.log('Hello::::::::create', params.data.title);
    //   const result = await super.create({ data: {} });
    //   // some more logic
    //   return result;
    // },
    // async delete(documentId, params) {
    //   console.log('Hello::::::::delete:::::::::::service');
    //   // some logic here
    //   const result = await super.delete(documentId, params);
    //   // some more logic
    //   return result;
    // },

    // publish(parameters: Params): Promise<{ documentId: ID, entries: Number }>

    async publish(params) {
      // params
      console.log('Hello::::::::create', params.data.title);
      const result = await super.publish(params);
      // some more logic
      return result;
    },
  })
);
