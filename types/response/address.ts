import {
  IHouseResponseNetwork,
  IHouseResponse
} from '@/types/response/house'

export interface IParentAddressResponse {
  id: number
  name: string
  type: string
  parentId?: number
  fias: string
}

export interface IParentAddressResponseNetwork {
  address_object_id: number
  name: string
  type: string
  parent_id?: number
  fias_guid: string
}

export interface IAddressHouse {
  fullName: string,
  fiasHouse: string,
  isHouse: boolean,
  stringAddreess: string,
  shortAddress: string,
  street: string,
  streetFiasId: string,
  houseNum: string,
  cityFiasId: string
}

export interface IAddressResponse {
  id: number
  fias: string
  name: string
  type: string
  fullName?: string
  parentId?: number
  parentHierarchy?: IParentAddressResponse[]
  children?: IAddressResponse[]
  houses?: IHouseResponse[]
}

export interface IAddressResponseNetwork {
  id: number
  fias_guid: string
  name: string
  type: string
  parent_id?: number
  parent_hierarchy?: IParentAddressResponseNetwork[]
  children?: IAddressResponseNetwork[]
  houses?: IHouseResponseNetwork[]
}
