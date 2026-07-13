export interface SatelliteInfo {
  provider: string;
  frequency: string;
  transponder: string;
}

export interface OttLink {
  platform: string;
  url: string;
  iconUrl: string;
}

export interface WhereToWatchData {
  satellite: SatelliteInfo[];
  ottLinks: OttLink[];
  availableRegions: string[];
}