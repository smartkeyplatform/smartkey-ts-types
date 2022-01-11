# SmartKey TS Types

## Device interface
```typescript
import { Entity, PhysicalAddress } from './Common'

export type DeviceTypeStatic = 'car barrier' | 'human barrier' | 'elevator'
export type DeviceTypeNormal = 'human' | 'mobile' | 'other'

export type DeviceType = DeviceTypeNormal | DeviceTypeStatic

export interface Device extends Entity {
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
    physicalAddress?: PhysicalAddress
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

// OTHER KEYS
// key_<asset_id> => string

```


## Supplier interface
```typescript
import { Entity, PhysicalAddress } from './Common'

export interface Supplier extends Entity {
  /**
   * Supplier name. Required.
   */
  name: string

  /**
   * Supplier description. Required.
   */
  description: string

  /**
   * Should always be 'supplier'.
   * Defaults to 'supplier'.
   */
  type: 'supplier'

  /**
   * Supplier interface version.
   * Defaults to 1.
   */
  version: '1'

  /**
   * Supplier additional info. Optional.
   */
  details?: {
    physicalAddress?: PhysicalAddress
    additionalDescription?: string
    assetUrl?: string
    url?: string
    contactInfo?: string
  }

  /**
   * Supplier custom fields. Optional.
   */
  custom?: {
    [key: string]: any
  }
}

export type SupplierEntryKey =
  // BASIC INFO
  | 'name' // string
  | 'description' // string
  | 'type' // string
  | 'version' // string

  // OPTIONAL
  | 'details' // string(json), optional
  | 'custom' // string(json), optional

// OTHER KEYS
// device_<address> => string
// device_counter_<address> => integer
// org_<address> => string

```


## Organisation interface
```typescript
import { Entity, PhysicalAddress } from './Common'

export interface Organisation extends Entity {
  /**
   * Organisation name. Required.
   */
  name: string

  /**
   * Organisation description. Required.
   */
  description: string

  /**
   * Should always be 'organisation'.
   * Defaults to 'organisation'.
   */
  type: 'organisation'

  /**
   * Organisation interface version.
   * Defaults to 1.
   */
  version: '1'

  /**
   * Organisation additional info. Optional.
   */
  details?: {
    physicalAddress?: PhysicalAddress
    additionalDescription?: string
    assetUrl?: string
    url?: string
    contactInfo?: string
  }

  /**
   * Organisation custom fields. Optional.
   */
  custom?: {
    [key: string]: any
  }
}

export type OrganisationEntryKey =
  // BASIC INFO
  | 'name' // string
  | 'description' // string
  | 'type' // string
  | 'version' // string

  // OPTIONAL
  | 'details' // string(json), optional
  | 'custom' // string(json), optional

// OTHER KEYS
// user_<address> => string
// user_note_<address> => string
// token_<address> => string

```


## DappFather interface
```typescript
import { Entity } from './Common'

export interface DappFather extends Entity {
  /**
   * Should always be 'dappFather'.
   * Defaults to 'dappFather'.
   */
  type: 'dappFather'

  /**
   * DappFather interface version.
   * Defaults to 1.
   */
  version: '1'

  /**
   * DappFather refill amount. Optional.
   */
  refillAmount?: number

  /**
   * DappFather custom fields. Optional.
   */
  custom?: {
    [key: string]: any
  }
}

export type DappFatherEntryKey =
  // BASIC INFO
  | 'type' // string
  | 'version' // string

  // OPTIONAL
  | 'custom' // string(json), optional
  | 'refill_amount' // integer, optional

// OTHER KEYS
// org_<address> => string
// org_<address>_name => string
// org_<address>_description => string
// supplier_<address> => string
// supplier_<address>_name => string
// supplier_<address>_description => string

```


## Common interface
```typescript
export interface PhysicalAddress {
  addressLine1?: string
  addressLine2?: string
  city?: string
  postcode?: string
  state?: string
  country?: string
  number?: string
  floor?: string
}

export interface Entity {
  name?: string
  description?: string
  type?: string
  version?: string
  custom?: {
    [key: string]: any
  }
}

```
