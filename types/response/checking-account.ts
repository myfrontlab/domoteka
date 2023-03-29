export interface ICheckingAccountResponseNetwork {
  bank_name: string
  bik: string
  checking_account: string
  correspondent_account: string
  id: number
  inn: string
  kpp: string
  managing_organization_id: number
  oktmo: string
  receiver_name: string
}

export interface ICheckingAccountResponse {
  bankName?: string
  bik?: string
  checkingAccount?: string
  correspondentAccount?: string
  id?: number
  inn?: string
  kpp?: string
  managingOrganizationId: number
  oktmo?: string
  receiverName?: string
}
