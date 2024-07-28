"use strict";

/**
 * campaign controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::campaign.campaign",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query("api::campaign.campaign").findOne({
        where: { uuid: id },
        populate: ["banner"],
      });

      if (!entity) {
        return ctx.notFound("Campaign post not found");
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
    async find(ctx) {
      const { filters } = ctx.query;

      // Construct the query with filters and populate
      const entities = await strapi.db
        .query("api::campaign.campaign")
        .findMany({
          where: filters,
          populate: ["banner"],
        });

      const sanitizedEntities = await this.sanitizeOutput(entities, ctx);

      return this.transformResponse(sanitizedEntities);
    },
  })
);
