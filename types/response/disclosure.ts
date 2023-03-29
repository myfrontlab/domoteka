
export interface IDisclosureElementResponseNetwork {
  id: number
  disclosure_category_id: number
  title: string
  text: string
  file: string
  published: number
}

export interface IDisclosureElementResponse {
  id: number
  disclosureCategoryId: number
  title: string
  text: string
  linkFile: string
  published: string
}

export interface IDisclosureCategoryResponseNetowork {
  id: number
  managing_organization_id: number
  title: string
  text: string
  elements: IDisclosureElementResponseNetwork[]
}

export interface IDislosureCategoryResponse {
  id: number
  managingOrganizationId: number
  title: string
  text: string
  elements: IDisclosureElementResponse[]
}
