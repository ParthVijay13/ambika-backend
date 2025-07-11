import type { Schema, Struct } from '@strapi/strapi';

export interface TitleSection extends Struct.ComponentSchema {
  collectionName: 'components_title_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.Text;
  };
}

export interface TitleSection2Intro extends Struct.ComponentSchema {
  collectionName: 'components_title_section2_intros';
  info: {
    displayName: 'section2Intro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    short_text: Schema.Attribute.String;
    TItle: Schema.Attribute.String;
  };
}

export interface TitleSection2Media extends Struct.ComponentSchema {
  collectionName: 'components_title_section2_medias';
  info: {
    displayName: 'section2Media';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface TitleSection2Points extends Struct.ComponentSchema {
  collectionName: 'components_title_section2_points';
  info: {
    displayName: 'section2Points';
  };
  attributes: {
    points: Schema.Attribute.Blocks;
  };
}

export interface TitleSection3Intro extends Struct.ComponentSchema {
  collectionName: 'components_title_section3_intros';
  info: {
    displayName: 'section3Intro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface TitleSection3Points extends Struct.ComponentSchema {
  collectionName: 'components_title_section3_points';
  info: {
    displayName: 'section3Points';
  };
  attributes: {
    minutes: Schema.Attribute.Integer;
    points: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'title.section': TitleSection;
      'title.section2-intro': TitleSection2Intro;
      'title.section2-media': TitleSection2Media;
      'title.section2-points': TitleSection2Points;
      'title.section3-intro': TitleSection3Intro;
      'title.section3-points': TitleSection3Points;
    }
  }
}
