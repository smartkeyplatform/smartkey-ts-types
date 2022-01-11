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
