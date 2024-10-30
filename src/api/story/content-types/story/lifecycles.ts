const prepareData = async (data: any) => {
  const dynamicZoneData = await strapi
    .query(data.storyType?.[0]?.__component)
    .findOne({
      where: { id: data.storyType?.[0].id },
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

  data.mediaType = data.storyType?.[0]?.__component;

  data.title = dynamicZoneData?.header?.title;
  data.featured = Boolean(dynamicZoneData?.featuredSection?.visible);
  data.hasContent = Boolean(dynamicZoneData?.storyContent?.length);

  return;
};

export default {
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
