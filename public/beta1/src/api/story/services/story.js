"use strict";
/**
 * story service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService('api::story.story', {
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
