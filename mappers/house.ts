import { mapperManagingOrganizationResponse } from '@/mappers/managing-organization'
import { mapperOutageResponse } from '@/mappers/outage'
import { mapperPostResponse } from '@/mappers/post'
import { IMapper } from '@/mappers'
import {
  IHouseResponse,
  IHouseResponseNetwork
} from '@/types/response/house'
import {
  IParentAddressResponse,
  IParentAddressResponseNetwork
} from '@/types/response/address'

const mapperParentAddressHouseResponse: IMapper<IParentAddressResponseNetwork, IParentAddressResponse> = {
  address_object_id: 'id',
  name: 'name',
  type: 'type',
  parent_id: 'parentId',
  fias_guid: 'fias'
}

export const mapperHouseResponse: IMapper<IHouseResponseNetwork, IHouseResponse> = {
  id: 'id',
  parent_address_object_id: 'parentAddressId',
  chat_id: 'chatId',
  managing_organization_id: 'managingOrganizationId',
  short_address: 'shortAddress',
  string_address: 'fullAddress',
  house_number: 'houseNumber',
  fias_guid: 'fias',
  reforma_id: 'reformaId',
  num_entrances: 'numEntrances',
  num_premises: 'numPremises',
  comment: 'comment',
  housekeeper_name: 'housekeeperName',
  housekeeper_contact: 'housekeeperContact',
  information_source: 'informationSource',
  channel_name: 'channelName',
  parent_hierarchy: ['parentHierarchy', mapperParentAddressHouseResponse],
  managing_organization: ['managingOrganization', mapperManagingOrganizationResponse],
  actual_outages: ['outages', mapperOutageResponse],
  all_related_posts: ['posts', mapperPostResponse]
}
