import {
  IManagingOrganizationResponse,
  IManagingOrganizationResponseNetwork
} from '@/types/response/managing-organization'
import {
  IParentAddressResponse,
  IParentAddressResponseNetwork
} from '@/types/response/address'
import { IOutageResponse, IOutageResponseNetwork } from '@/types/response/outage'
import { IPostResponse, IPostResponseNetwork } from '@/types/response/post'

export interface IHouseResponseNetwork {
  id: number
  parent_address_object_id: number
  chat_id: number
  managing_organization_id?: number
  short_address: string
  string_address: string
  house_number: string
  fias_guid: string
  reforma_id: number
  num_entrances: string
  num_premises: string
  comment: string
  housekeeper_name: string
  housekeeper_contact: string
  information_source: string
  channel_name: string
  parent_hierarchy?: IParentAddressResponseNetwork[]
  managing_organization?: IManagingOrganizationResponseNetwork
  actual_outages: IOutageResponseNetwork[]
  all_related_posts: IPostResponseNetwork[]
}

export interface IHouseResponse {
  id: number
  parentAddressId: number
  chatId: number
  managingOrganizationId: number
  shortAddress: string
  fullAddress: string
  houseNumber: string
  fias: string
  reformaId: number
  numEntrances: string
  numPremises: string
  comment: string
  housekeeperName: string
  housekeeperContact: string
  informationSource: string
  channelName: string
  parentHierarchy?: IParentAddressResponse[]
  managingOrganization?: IManagingOrganizationResponse
  outages: IOutageResponse[]
  posts: IPostResponse[]
}
