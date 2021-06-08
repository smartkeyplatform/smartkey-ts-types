# SmartKey TS Types

## Device interface
```typescript

export type DeviceTypeStatic = 'car barrier' | 'human barrier' | 'elevator'
export type DeviceTypeNormal = 'human' | 'mobile' | 'other'

export type DeviceType = DeviceTypeNormal | DeviceTypeStatic

export interface Device {
  /**
   * Device name. Is required while creating the device.
   */
  name: string

  /**
   * Device description.
   * Is optional.
   */
  description?: string

  /**
   * Should always be 'device'.
   * Defaults to 'device'.
   */
  type: 'device'

  /**
   * Supplier address. Needed for device to function.
   * Defaults to supplier address.
   */
  supplier: string

  /**
   * Owner address. Needed for device to function.
   * Defaults to supplier address.
   */
  owner: string

  /**
   * Device active status.
   * Defaults to true.
   */
  active: boolean

  /**
   * Device connected status.
   * Defaults to true.
   */
  connected: boolean

  /**
   * Device visible status.
   * Defaults to true.
   */
  visible: boolean

  /**
   * Device interface version.
   * Defaults to 1.
   */
  version: '1'

  /**
   * Device latitude.
   * Is optional.
   */
  lat?: number

  /**
   * Device longitude.
   * Is optional.
   */
  lng?: number

  /**
   * Device altitude.
   * Is optional.
   */
  alt?: number

  /**
   * Device additional info.
   * Is optional.
   */
  details?: {
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
    deviceType?: DeviceType
    deviceModel?: string
    additionalDescription?: string
    assetUrl?: string
    url?: string
    contactInfo?: string
  }

  /**
   * Device custom fields. Are optional.
   */
  custom?: {
    [key: string]: any
  }
}

export type DeviceEntryKey =
  // BASIC INFO
  | 'name' // string
  | 'type' // string
  | 'supplier' // string(address)
  | 'owner' // string(address)
  | 'version' // string

  // LOCATION
  | 'lat' // string(float), optional
  | 'lng' // string(float), optional
  | 'alt' // string(float), optional

  // BOOLEANS
  | 'active' // boolean
  | 'connected' // boolean
  | 'visible' // boolean

  // OPTIONAL
  | 'description' // string, optional
  | 'details' // string(json), optional
  | 'custom' // string(json), optional
```
