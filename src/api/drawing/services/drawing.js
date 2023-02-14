'use strict';

/**
 * drawing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drawing.drawing');
