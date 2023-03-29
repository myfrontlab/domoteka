import { mapperAddressResponse } from '@/mappers/address'
import { mapperResponse } from '@/mappers'
import {
  IAddressResponseNetwork
} from '@/types/response/address'
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
    url = urlBuilder(Endpoints.ADDRESS_OBJECT, `${id}`)
  } else if (fias) {
    url = urlBuilder(Endpoints.ADDRESS_OBJECT_BY_FIAS, `${fias}`)
  } else { throw new Error('error') }

  // @ts-ignore
  const addressNetwork = await (global.axios || window.$nuxt.$axios).get<IAddressResponseNetwork>(url)
  return mapperResponse(mapperAddressResponse)(addressNetwork)
}
