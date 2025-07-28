import type { Schema, Struct } from '@strapi/strapi';

export interface OverviewSectionAmeneties extends Struct.ComponentSchema {
  collectionName: 'components_overview_section_ameneties';
  info: {
    displayName: 'Ameneties';
  };
  attributes: {
    ameneties_list: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    gallery: Schema.Attribute.Media<'images' | 'files', true>;
    short_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OverviewSectionBrochure extends Struct.ComponentSchema {
  collectionName: 'components_overview_section_brochures';
  info: {
    displayName: 'brochure';
  };
  attributes: {
    property_brochure: Schema.Attribute.Media<'files'>;
  };
}

export interface OverviewSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_overview_section_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    heroImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    PropertyName: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    tagline: Schema.Attribute.Text;
  };
}

export interface OverviewSectionHighliightsList extends Struct.ComponentSchema {
  collectionName: 'components_overview_section_highliights_lists';
  info: {
    displayName: 'highliights_list';
  };
  attributes: {
    distanceMin: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface OverviewSectionLocationSection extends Struct.ComponentSchema {
  collectionName: 'components_overview_section_location_sections';
  info: {
    displayName: 'LocationSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlights_title: Schema.Attribute.Text;
    list: Schema.Attribute.Component<'overview-section.highliights-list', true>;
    map_embed_url: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OverviewSectionOverviewSections
  extends Struct.ComponentSchema {
  collectionName: 'components_overview_section_overview_sections';
  info: {
    displayName: 'overviewSections';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

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
    iframe: Schema.Attribute.Text;
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
      'overview-section.ameneties': OverviewSectionAmeneties;
      'overview-section.brochure': OverviewSectionBrochure;
      'overview-section.hero-section': OverviewSectionHeroSection;
      'overview-section.highliights-list': OverviewSectionHighliightsList;
      'overview-section.location-section': OverviewSectionLocationSection;
      'overview-section.overview-sections': OverviewSectionOverviewSections;
      'title.section': TitleSection;
      'title.section2-intro': TitleSection2Intro;
      'title.section2-media': TitleSection2Media;
      'title.section2-points': TitleSection2Points;
      'title.section3-intro': TitleSection3Intro;
      'title.section3-points': TitleSection3Points;
    }
  }
}
