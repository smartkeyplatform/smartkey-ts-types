export type DeviceTypeStatic = "car barrier" | "human barrier" | "elevator";
export type DeviceTypeNormal = "human" | "mobile" | "other";

export type DeviceType = DeviceTypeNormal | DeviceTypeStatic;

export interface Device {
  name: string;
  description: string;
  type: DeviceType;
  additionalDescription?: string;
  assetUrl?: string;
  url?: string;
  contactInfo?: string;
  visible: boolean;
  location?: {
    lat: number;
    lng: number;
    alt?: number;
  };
  address?: {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    postcode?: string;
    state?: string;
    country?: string;
    number?: string;
    floor?: string;
  };
  active: boolean;
  connected: boolean;
  dapp: string;
  owner: string;
  deviceModel?: string;
  custom: {
    [key: string]: string | number | boolean;
  };
  version: "2";
}

export const entryKeys = [
  "name",
  "type",
  "description",
  "additional_description",
  "asset_url",
  "url",
  "contact",
  "visible",
  "lat",
  "lng",
  "alt",
  "address_line_1",
  "address_line_2",
  "city",
  "postcode",
  "state",
  "country",
  "number",
  "floor",
  "active",
  "connected",
  "dapp",
  "owner",
  "device_model",
  "custom_",
  "version",
];
