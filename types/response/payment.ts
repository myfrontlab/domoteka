
export interface IPaymentRequisiteRequest {
  type: 'free_reqs'
  amount: string
  fio: string
  userId: number
  email: string

  bik?: string
  inn?: string
  ls?: string
  rs?: string

  bankName?: string
  kpp?: string
  oktmo?: string
  receiverName?: string
  ks?: string
}

export interface IPaymentRequisiteRequestNetwork {
  type: 'free_reqs'
  amount: string
  fio: string
  user_id: number
  email: string

  bik?: string
  inn?: string
  rs?: string
  ls?: string

  bank_name?: string
  kpp?: string
  oktmo?: string
  receiver_name?: string
  ks?: string
}
