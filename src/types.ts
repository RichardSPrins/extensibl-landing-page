export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
  options: string[];
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
  button?: boolean;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}
