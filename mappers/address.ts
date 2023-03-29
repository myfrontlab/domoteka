import { IMapper } from '@/mappers'
import {
  IParentAddressResponse,
  IParentAddressResponseNetwork,
  IAddressResponse,
  IAddressResponseNetwork
} from '@/types/response/address'
import { mapperHouseResponse } from '@/mappers/house'

export const mapperParentAddressResponse: IMapper<IParentAddressResponseNetwork, IParentAddressResponse> = {
  address_object_id: 'id',
  name: 'name',
  type: 'type',
  parent_id: 'parentId',
  fias_guid: 'fias'
}

export const mapperAddressResponse: IMapper<IAddressResponseNetwork, IAddressResponse> = {
  id: 'id',
  fias_guid: 'fias',
  name: 'name',
  type: 'type',
  parent_id: 'parentId',
  parent_hierarchy: ['parentHierarchy', mapperParentAddressResponse],
  children: ['children', '~'],
  houses: ['houses', mapperHouseResponse]
}
