import { Endpoints, urlBuilder } from '@/connecters/end-points'
import global from '@/utils/global'
import { IAddressDadataRequest } from '@/types/dadata'

const pullAddresses = async ({ data, token }: { data: IAddressDadataRequest, token: string }) => {
  const headers = { Authorization: 'Token ' + token }
  const url = urlBuilder(Endpoints.DADATA_FIND_ADDRESS)

  return (await (global.axios || window.$nuxt.$axios).post(url, data, { headers })).data
}

export default pullAddresses
