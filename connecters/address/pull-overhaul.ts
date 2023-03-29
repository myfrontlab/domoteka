import { arrayMapperResponse } from '@/mappers'
import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import { mapperOverhaul } from '@/mappers/overhaul'
import { IOverhaulResponseNetwork } from '@/types/response/overhaul'
import global from '@/utils/global'

export default async function ({ id, fias }: {
    id: number | string | undefined,
    fias: string | undefined
  }) {
  let url
  if (id) {
    url = urlBuilder(Endpoints.ADDRESS_OVERHALL, `${id}`)
  } else if (fias) {
    url = urlBuilder(Endpoints.ADDRESS_OVERHALL_BY_FIAS, `${fias}`)
  } else { throw new Error('error') }

  // @ts-ignore
  const overhaul = await (global.axios || window.$nuxt.$axios).get<IOverhaulResponseNetwork[]>(url)
  return arrayMapperResponse(mapperOverhaul)(overhaul)
}
