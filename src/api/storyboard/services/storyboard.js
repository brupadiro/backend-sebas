'use strict';

/**
 * storyboard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::storyboard.storyboard');
