import { mapperRequest } from '@/mappers'
import {
  urlBuilder,
  Endpoints
} from '@/connecters/end-points'
import {
  IPaymentRequisiteRequest,
  IPaymentRequisiteRequestNetwork
} from '@/types/response/payment'
import {
  mapPaymentRequisiteRequest
} from '@/mappers/payment'

export default async function ({ payment, token }:
  { payment: IPaymentRequisiteRequest, token: string }): Promise<string> {
  const headers = {
    Authorization: 'Bearer ' + token
  }
  const paymentNetwork: IPaymentRequisiteRequestNetwork = mapperRequest(mapPaymentRequisiteRequest)(payment)
  const url = urlBuilder(Endpoints.PAYMENT_CREATE)
  const answer = await window.$nuxt.$axios.post<string>(url, paymentNetwork, { headers })
  return answer.data
}
