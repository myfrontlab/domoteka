export interface IAddressDadataRequest {
  query: string,
  locations?: { city?: string, street?: string }[]
  from_bound?: { value: string },
  to_bound?: { value: string },
  restrict_value?: boolean
}
