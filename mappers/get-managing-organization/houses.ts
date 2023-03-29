import { IMapper } from '@/mappers'
import { IGetHouses, IGetHousesResponse } from '@/types/response/get-managing-organization/get-managing-organization'

export const housesMap: IMapper<IGetHousesResponse, IGetHouses> = {
  id: 'id',
  parent_address_object_id: 'parentAddressObjectId',
  chat_id: 'chatId',
  managing_organization_id: 'managingOrganizationId',
  short_address: 'shortAddress',
  string_address: 'stringAddress',
  fias_guid: 'fiasGuid',
  reforma_id: 'reformaId',
  reforma_json_id: 'reformaJsonId',
  created_at: 'createdAt',
  updated_at: 'updatedAt',
  deleted_at: 'deletedAt',
  num_entrances: 'numEntrances',
  num_premises: 'numPremises',
  comment: 'comment',
  housekeeper_name: 'housekeeperName',
  housekeeper_contact: 'housekeeperContact',
  information_source: 'informationSource',
  house_external_id: 'houseExternalId',
  extra: 'extra',
  house_number: 'houseNumber',
  channel_name: 'channelName'
}
