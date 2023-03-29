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
    url = urlBuilder(Endpoints.ADDRESS_STRUCTURE, `${id}`)
  } else if (fias) {
    url = urlBuilder(Endpoints.ADDRESS_STRUCTURE_BY_FIAS, `${fias}`)
  } else { throw new Error('error') }

  // @ts-ignore
  const structure = await (global.axios || window.$nuxt.$axios).get(url)
  return structure.data
}
