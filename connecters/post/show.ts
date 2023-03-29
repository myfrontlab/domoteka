import { mapperFullPostResponse } from '@/mappers/post'
import { mapperResponse } from '@/mappers'
import {
  IFullPostResponseNetwork
} from '@/types/response/post'
import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import global from '@/utils/global'

export default async function ({ idPost }: { idPost: number }) {
  const url = urlBuilder(Endpoints.POST_SHOW, `${idPost}`)
  // @ts-ignore
  const postsNetowrk = await (global.axios || window.$nuxt.$axios).get<IFullPostResponseNetwork>(url)
  return mapperResponse(mapperFullPostResponse)(postsNetowrk)
}
