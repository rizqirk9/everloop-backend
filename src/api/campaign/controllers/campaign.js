"use strict";

/**
 * campaign controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::campaign.campaign",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { uuid } = ctx.params;

      const entity = await strapi.db.query("api::campaign.campaign").findOne({
        where: { uuid },
      });

      if (!entity) {
        return ctx.notFound("Campaign post not found");
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
