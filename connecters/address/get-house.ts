import { mapperHouseResponse } from '@/mappers/house'
import { mapperResponse } from '@/mappers'
import {
  IHouseResponseNetwork
} from '@/types/response/house'
import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import global from '@/utils/global'

/**
 * @param root0
 * @param root0.fias
 * @param root0.stringAddress
 * @param root0.shortAddress
 * @param root0.street
 * @param root0.streetFiasId
 * @param root0.housenum
 * @param root0.cityFiasId
 */
export default async function ({ fias, stringAddress, shortAddress, street, streetFiasId, housenum, cityFiasId }: {
  fias: string | undefined,
  stringAddress: string | undefined,
  shortAddress: string | undefined,
  street: string | undefined,
  streetFiasId: string | undefined,
  housenum: string | undefined,
  cityFiasId: string | undefined
}) {
  let url
  if (fias) {
    url = urlBuilder(Endpoints.GET_HOUSE_BY_FIAS, `${fias}`, `${stringAddress}`, `${shortAddress}`, `${street}`, `${streetFiasId}`, `${housenum}`, `${cityFiasId}`)
  } else { throw new Error('error') }

  // @ts-ignore
  const houseNetowrk = await (global.axios || window.$nuxt.$axios).get<IHouseResponseNetwork>(url)
  return mapperResponse(mapperHouseResponse)(houseNetowrk)
}
