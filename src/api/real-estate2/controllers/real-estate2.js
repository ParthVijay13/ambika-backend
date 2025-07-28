'use strict';

/**
 * real-estate2 controller
 */
//@ts-nocheck
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::real-estate2.real-estate2', ({ strapi }) => ({
  async find(ctx) {
    strapi.log.info('Custom find controller called');
    
    // Set populate for media fields and dynamic zones with nested images
    ctx.query.populate = {
      hero_image: true,
      section: {
        on: {
          'title.section': {
            populate: {
              image: true
            }
          }
        }
      },
      section2_intro: true,
      section2_media: {
        on: {
          'title.section2-media': {
            populate: {
              image: true
            }
          }
        }
      },
      section2_points: true,
      section3_intro: true,
      section3_points: true
    };
    
    // Call the parent method
    const result = await super.find(ctx);
    return result;
  },

  async findOne(ctx) {
    strapi.log.info(`Custom findOne controller called for id: ${ctx.params.id}`);
    
    // Set populate for media fields and dynamic zones with nested images
    ctx.query.populate = {
      hero_image: true,
      section: {
        on: {
          'title.section': {
            populate: {
              image: true
            }
          }
        }
      },
      section2_intro: true,
      section2_media: {
        on: {
          'title.section2-media': {
            populate: {
              image: true
            }
          }
        }
      },
      section2_points: true,
      section3_intro: true,
      section3_points: true
    };
    
    // Call the parent method
    const result = await super.findOne(ctx);
    return result;
  }
}));
