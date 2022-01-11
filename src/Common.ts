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
