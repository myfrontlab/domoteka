import { mapperResponse } from '@/mappers'
import { urlBuilder, Endpoints } from '@/connecters/end-points'
import { mapRegisterUserResponse } from '@/mappers/user'
import { IRegisterUserResponseNetwork } from "@/types/response/user"

export default async function () {
  const url = urlBuilder(Endpoints.USER_REGISTRATION)
  const answer = await window.$nuxt.$axios.post<IRegisterUserResponseNetwork>(url)
  return mapperResponse(mapRegisterUserResponse)(answer)
}
