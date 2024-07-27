"use strict";

/**
 * forum controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::forum.forum", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::forum.forum").findOne({
      where: { slug },
    });

    if (!entity) {
      return ctx.notFound("Forum post not found");
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
