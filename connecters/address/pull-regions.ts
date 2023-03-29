import { mapperAddressResponse } from '@/mappers/address'
import { arrayMapperResponse } from '@/mappers'
import {
  IAddressResponseNetwork
} from '@/types/response/address'
import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import global from '@/utils/global'

export default async function () {
  const url = urlBuilder(Endpoints.ADDRESS_REGIONS)
  // @ts-ignore
  const addressNetwork = await (global.axios || window.$nuxt.$axios).get<IAddressResponseNetwork[]>(url)
  return arrayMapperResponse(mapperAddressResponse)(addressNetwork)
}
