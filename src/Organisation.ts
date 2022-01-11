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
