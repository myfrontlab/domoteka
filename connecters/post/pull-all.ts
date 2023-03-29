import { mapperPostResponse } from '@/mappers/post'
import { arrayMapperResponse } from '@/mappers'
import {
  IPostResponseNetwork
} from '@/types/response/post'
import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import global from '@/utils/global'

export default async function ({ limit }: { limit: number | undefined }) {
  const url = limit ? urlBuilder(Endpoints.POST_INDEX, `${limit}`) : urlBuilder(Endpoints.POST_ALL)
  // @ts-ignore
  const postsNetowrk = await (global.axios || window.$nuxt.$axios).get<IPostResponseNetwork[]>(url)
  return arrayMapperResponse(mapperPostResponse)(postsNetowrk)
}
