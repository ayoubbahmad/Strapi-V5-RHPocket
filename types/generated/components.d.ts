import type { Struct, Schema } from '@strapi/strapi';

export interface StoryTypeWebLink extends Struct.ComponentSchema {
  collectionName: 'components_story_type_web_links';
  info: {
    displayName: 'webLink';
  };
  attributes: {
    header: Schema.Attribute.Component<'header.web-link', false>;
  };
}

export interface StoryTypeVideo extends Struct.ComponentSchema {
  collectionName: 'components_story_type_videos';
  info: {
    displayName: 'video';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'header.video', false>;
    featuredSection: Schema.Attribute.Component<
      'featured-section.default',
      false
    >;
    storyContent: Schema.Attribute.Component<'story-content.default', true>;
  };
}

export interface StoryTypeShortText extends Struct.ComponentSchema {
  collectionName: 'components_story_type_short_texts';
  info: {
    displayName: 'shortText';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'header.short-text', false>;
  };
}

export interface StoryTypeImageS extends Struct.ComponentSchema {
  collectionName: 'components_story_type_image_s_s';
  info: {
    displayName: 'image(s)';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.Component<'header.image-s', false>;
    featuredSection: Schema.Attribute.Component<
      'featured-section.default',
      false
    >;
    storyContent: Schema.Attribute.Component<'story-content.default', true>;
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

export interface HeaderWebLink extends Struct.ComponentSchema {
  collectionName: 'components_header_web_links';
  info: {
    displayName: 'webLink';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    shortDescription: Schema.Attribute.String;
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

export interface HeaderShortText extends Struct.ComponentSchema {
  collectionName: 'components_header_short_texts';
  info: {
    displayName: 'shortText';
  };
  attributes: {
    title: Schema.Attribute.String;
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
    visible: Schema.Attribute.Boolean & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'story-type.web-link': StoryTypeWebLink;
      'story-type.video': StoryTypeVideo;
      'story-type.short-text': StoryTypeShortText;
      'story-type.image-s': StoryTypeImageS;
      'story-type.file': StoryTypeFile;
      'story-content.default': StoryContentDefault;
      'header.web-link': HeaderWebLink;
      'header.video': HeaderVideo;
      'header.short-text': HeaderShortText;
      'header.image-s': HeaderImageS;
      'header.file': HeaderFile;
      'featured-section.default': FeaturedSectionDefault;
    }
  }
}
