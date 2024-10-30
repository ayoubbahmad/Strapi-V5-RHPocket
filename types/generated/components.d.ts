import type { Struct, Schema } from '@strapi/strapi';

export interface StoryTypeVideo extends Struct.ComponentSchema {
  collectionName: 'components_story_type_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    header: Schema.Attribute.Component<'header.video', false>;
  };
}

export interface StoryTypeImageS extends Struct.ComponentSchema {
  collectionName: 'components_story_type_image_s_s';
  info: {
    displayName: 'image(s)';
  };
  attributes: {
    header: Schema.Attribute.Component<'header.image-s', false>;
  };
}

export interface StoryTypeFile extends Struct.ComponentSchema {
  collectionName: 'components_story_type_files';
  info: {
    displayName: 'file';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'header.file', false>;
    featuredSection: Schema.Attribute.Component<
      'featured-section.default',
      false
    >;
    storyContent: Schema.Attribute.Component<'story-content.default', true>;
  };
}

export interface StoryContentDefault extends Struct.ComponentSchema {
  collectionName: 'components_story_content_defaults';
  info: {
    displayName: 'default';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface HeaderVideo extends Struct.ComponentSchema {
  collectionName: 'components_header_videos';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    shortDescription: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos', true>;
  };
}

export interface HeaderImageS extends Struct.ComponentSchema {
  collectionName: 'components_header_image_s_s';
  info: {
    displayName: 'image(s)';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    shortDescription: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HeaderFile extends Struct.ComponentSchema {
  collectionName: 'components_header_files';
  info: {
    displayName: 'file';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    shortDescription: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'files'>;
  };
}

export interface FeaturedSectionDefault extends Struct.ComponentSchema {
  collectionName: 'components_featured_section_defaults';
  info: {
    displayName: 'default';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    show: Schema.Attribute.Boolean & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'story-type.video': StoryTypeVideo;
      'story-type.image-s': StoryTypeImageS;
      'story-type.file': StoryTypeFile;
      'story-content.default': StoryContentDefault;
      'header.video': HeaderVideo;
      'header.image-s': HeaderImageS;
      'header.file': HeaderFile;
      'featured-section.default': FeaturedSectionDefault;
    }
  }
}
