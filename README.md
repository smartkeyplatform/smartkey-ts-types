# SmartKey TS Types

## Device interface
```typescript

export type DeviceTypeStatic = 'car barrier' | 'human barrier' | 'elevator'
export type DeviceTypeNormal = 'human' | 'mobile' | 'other'

export type DeviceType = DeviceTypeNormal | DeviceTypeStatic

export interface Device {
  /**
   * Device name
   */
  name: string

  /**
   * Device description
   */
  description?: string

  /**
   * Should always be 'device'
   */
  type: 'device'

  /**
   * Device type
   */
  deviceType?: DeviceType

  /**
   * Additional property
   */
  additionalDescription?: string

  /**
   * Additional property
   */
  assetUrl?: string

  /**
   * Additional property
   */
  url?: string

  /**
   * Additional property
   */
  contactInfo?: string

  /**
   * Additional property
   */
  visible?: boolean

  /**
   * Device location
   */
  location?: {
    lat: number
    lng: number
    alt?: number
  }

  /**
   * PhysicalAddress
   */
  physicalAddress?: {
    addressLine1?: string
    addressLine2?: string
    city?: string
    postcode?: string
    state?: string
    country?: string
    number?: string
    floor?: string
  }

  /**
   * Additional property
   */
  active?: boolean

  /**
   * Additional property
   */
  connected?: boolean

  /**
   * Supplier address. Needed for device to function.
   */
  dapp: string

  /**
   * Owner address. Needed for device to function.
   */
  owner: string

  /**
   * Device model used in listener, ex. teltonika fmb920
   */
  deviceModel?: string

  /**
   * custom fields
   */
  custom?: {
    [key: string]: string | number | boolean
  }

  /**
   * Device interface version
   */
  version: '1'

  /**
   * Used in listener to check if device supports universal commands like 'open'.
   * Defaults to true
   */
  supportsUniversalCommands?: boolean
}

export const DeviceEntryKeys = Object.freeze([
  'name',
  'description',
  'type',
  'device_type',
  'additional_description',
  'asset_url',
  'url',
  'contact',
  'visible',
  'lat',
  'lng',
  'alt',
  'address_line_1',
  'address_line_2',
  'city',
  'postcode',
  'state',
  'country',
  'number',
  'floor',
  'active',
  'connected',
  'dapp',
  'owner',
  'device_model',
  'custom_',
  'version',
  'supports_universal_commands'
])
```
