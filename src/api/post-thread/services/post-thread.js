'use strict';

/**
 * post-thread service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-thread.post-thread');
