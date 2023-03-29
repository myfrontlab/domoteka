import { IMapper } from '@/mappers'
import {
  IPaymentRequisiteRequest,
  IPaymentRequisiteRequestNetwork
} from '@/types/response/payment'

export const mapPaymentRequisiteRequest: IMapper<IPaymentRequisiteRequest, IPaymentRequisiteRequestNetwork> = {
  type: 'type',
  amount: 'amount',
  fio: 'fio',
  userId: 'user_id',
  email: 'email',
  bik: 'bik',
  inn: 'inn',
  rs: 'rs',
  ls: 'ls',
  bankName: 'bank_name',
  kpp: 'kpp',
  oktmo: 'oktmo',
  receiverName: 'receiver_name',
  ks: 'ks'
}
