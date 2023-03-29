export interface IGetHousesResponse {
  id: number
  parent_address_object_id?: number
  chat_id: number
  managing_organization_id: number
  short_address: string
  string_address: string
  fias_guid: string
  reforma_id?: number
  reforma_json_id?: number
  created_at: string
  updated_at: string
  deleted_at?: string
  num_entrances: number
  num_premises: number
  comment?: string
  housekeeper_name?: string
  housekeeper_contact?: string
  information_source: string
  house_external_id?: number
  extra?: string
  house_number: string
  channel_name: string
}

export interface IGetHouses {
  id: number
  parentAddressObjectId?: number
  chatId: number
  managingOrganizationId: number
  shortAddress: string
  stringAddress: string
  fiasGuid: string
  reformaId?: number
  reformaJsonId?: number
  createdAt: string
  updatedAt: string
  deletedAt?: string
  numEntrances: number
  numPremises: number
  comment?: string
  housekeeperName?: string
  housekeeperContact?: string
  informationSource: string
  houseExternalId?: number
  extra?: string
  houseNumber: string
  channelName: string
}

export interface IGetPostsResponse {
  id: number
  managing_organization_id: number
  is_general: number
  preview_text: string
  name: string
  text: string
  publication_date: string
  created_at: string
  updated_at: string
  deleted_at?: string
}

export interface IGetPosts {
  id: number
  managingOrganizationId: number
  isGeneral: number
  previewText: string
  name: string
  text: string
  publicationDate: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface IGetOutagesResponse {
  id: number
  managing_organization_id: number
  type: string
  start_date: string
  end_date: string
  name: string
  text: string
  created_at: string
  updated_at: string
  deleted_at?: string
}

export interface IGetOutages {
  id: number
  managingOrganizationId: number
  type: string
  startDate: string
  endDate: string
  name: string
  text: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface IGetElementsResponse {
  id: number
  disclosure_category_id: number
  title: string
  text?: string
  file: string
  published: number
  created_at: string
  updated_at: string
  deleted_at?: string
}

export interface IGetElements {
  id: number
  disclosureCategoryId: number
  title: string
  text?: string
  file: string
  published: number
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface IGetDisclosureResponse {
  id: number
  managing_organization_id: number
  title: string
  text?: string
  created_at: string
  updated_at: string
  deleted_at?: string
  elements: IGetElementsResponse[]
}

export interface IGetDisclosure {
  id: number
  managingOrganizationId: number
  title: string
  text?: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
  elements: IGetElements[]
}

export interface IGetManOrgResponse {
  id: number
  connected_to_system: number
  information_source: string
  short_name: string
  full_name: string
  inn: string
  kpp?: string
  ogrn?: string
  legal_address: string
  postal_address: string
  manager?: string
  email: string
  external_site: string
  system_site: string
  system_site_enabled: number
  dispatcher_address: string
  dispatcher_phone: string
  dispatcher_work_time: string
  created_at: string
  updated_at: string
  deleted_at?: string
  phone: string
  extra: string
  houses: IGetHousesResponse[]
  posts: IGetPostsResponse[]
  outages: IGetOutagesResponse[]
  disclosure_categories: IGetDisclosureResponse[]
}

export interface IGetManOrg {
  id: number
  connectedToSystem: number
  informationSource: string
  shortName: string
  fullName: string
  inn: string
  kpp?: string
  ogrn?: string
  legalAddress: string
  postalAddress: string
  manager?: string
  email: string
  externalSite: string
  systemSite: string
  systemSiteEnabled: number
  dispatcherAddress: string
  dispatcherPhone: string
  dispatcherWorkTime: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
  phone: string
  extra: string
  houses: IGetHouses[]
  posts: IGetPosts[]
  outages: IGetOutages[]
  disclosureCategories: IGetDisclosure[]
}
