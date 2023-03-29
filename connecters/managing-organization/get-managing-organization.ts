import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import global from '@/utils/global'
import { mapperResponse } from '@/mappers'
import { mapperManagingOrganizationResponse } from '@/mappers/managing-organization'

const getManagingOrganization = (systemSite :string) => {
  return (global.axios || window.$nuxt.$axios).get(urlBuilder(Endpoints.GET_MANAGING_ORGANIZATION, systemSite))
    .then(mapperResponse(mapperManagingOrganizationResponse))
}

export default getManagingOrganization
