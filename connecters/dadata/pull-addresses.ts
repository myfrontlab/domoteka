import { Endpoints, urlBuilder } from '@/connecters/end-points'
import { IAddressDadataRequest } from '@/types/dadata'
import global from '@/utils/global'

const pullAddresses = async ({ data, token }: { data: IAddressDadataRequest, token: string }) => {
  const headers = { Authorization: 'Token ' + token }
  const url = urlBuilder(Endpoints.DADATA_FIND_ADDRESSES)

  return (await (global.axios || window.$nuxt.$axios).post(url, data, { headers })).data
}

export default pullAddresses
