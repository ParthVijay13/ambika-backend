'use strict';

/**
 * property controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::property.property', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        overview: { populate: '*' },
        ameneties: { populate: '*' },
        location: { populate: '*' },
        herosection: { populate: '*' },
        brochure:{ populate: '*' }
      },
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        overview: { populate: '*' },
        ameneties: { populate: '*' },
        location: { populate: '*' },
        herosection: { populate: '*' },
        brochure:{ populate: '*' }
      },
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));
