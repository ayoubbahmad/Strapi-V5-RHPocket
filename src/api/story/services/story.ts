/**
 * story service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::story.story', {
  async create(params) {
    // params
    console.log('story::service::::::::create');
    const result = await super.create(params);
    // some more logic
    return result;
  },
  async update(entityId, params) {
    console.log('story::service::::::::update');
    // some logic here
    const result = await super.update(entityId, params);
    // some more logic

    return result;
  },
  async delete(entityId, params) {
    console.log('story::service::::::::delete');
    // some logic here
    const result = await super.delete(entityId, params);
    // some more logic

    return result;
  },
});
