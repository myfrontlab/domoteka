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
    url = urlBuilder(Endpoints.ADDRESS_CONSTUCTION_ELEMENT, `${id}`)
  } else if (fias) {
    url = urlBuilder(Endpoints.ADDRESS_CONSTUCTION_ELEMENT_BY_FIAS, `${fias}`)
  } else { throw new Error('error') }

  // @ts-ignore
  const constructionElements = (await (global.axios || window.$nuxt.$axios).get(url)).data
  return constructionElements
}
