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

export default async function ({ id, fias }: {
  id: number | string | undefined,
  fias: string | undefined
}) {
  let url
  if (id) {
    url = urlBuilder(Endpoints.ADDRESS_HOUSE, `${id}`)
  } else if (fias) {
    url = urlBuilder(Endpoints.ADDRESS_HOUSE_BY_FIAS, `${fias}`)
  } else { throw new Error('error') }

  // @ts-ignore
  const houseNetowrk = await (global.axios || window.$nuxt.$axios).get<IHouseResponseNetwork>(url)
  return mapperResponse(mapperHouseResponse)(houseNetowrk)
}
