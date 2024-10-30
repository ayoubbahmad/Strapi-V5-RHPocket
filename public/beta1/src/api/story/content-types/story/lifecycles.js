"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prepareData = async (data) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const dynamicZoneData = await strapi
        .query((_b = (_a = data.storyType) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__component)
        .findOne({
        where: { id: (_c = data.storyType) === null || _c === void 0 ? void 0 : _c[0].id },
        populate: {
            header: {
                select: ['title'],
            },
            featuredSection: {
                select: ['visible'],
            },
            storyContent: {},
        },
    });
    data.mediaType = (_e = (_d = data.storyType) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.__component;
    data.title = (_f = dynamicZoneData === null || dynamicZoneData === void 0 ? void 0 : dynamicZoneData.header) === null || _f === void 0 ? void 0 : _f.title;
    data.featured = Boolean((_g = dynamicZoneData === null || dynamicZoneData === void 0 ? void 0 : dynamicZoneData.featuredSection) === null || _g === void 0 ? void 0 : _g.visible);
    data.hasContent = Boolean((_h = dynamicZoneData === null || dynamicZoneData === void 0 ? void 0 : dynamicZoneData.storyContent) === null || _h === void 0 ? void 0 : _h.length);
    return;
};
exports.default = {
    async beforeCreate(event) {
        // This runs before the entry is created
        const { data } = event.params;
        await prepareData(data);
    },
    // If you also want to handle updates
    async beforeUpdate(event) {
        const { data } = event.params;
        await prepareData(data);
    },
};
