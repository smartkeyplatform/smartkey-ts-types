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
