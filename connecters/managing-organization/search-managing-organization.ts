import global from '@/utils/global'
import { arrayMapperResponse } from '@/mappers'
import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import { mapperManagingOrganizationResponse } from '~/mappers/managing-organization'

const searchManagingOrganization = async (line: string) => {
  const url = urlBuilder(Endpoints.SEARCH_MANAGING_ORGANIZATION, line)
  const response = await (global.axios || window.$nuxt.$axios).get(url)
  return arrayMapperResponse(mapperManagingOrganizationResponse)(response)
}

export default searchManagingOrganization
