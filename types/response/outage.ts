export interface IOutageResponse {
  id: number
  managingOrganizationId: number
  type: string
  startDate: string
  endDate: string
  text: string
  title: string
}

export interface IOutageResponseNetwork {
  id: number
  managing_organization_id: number
  type: string
  start_date: string
  end_date: string
  name: string
  text: string
}
