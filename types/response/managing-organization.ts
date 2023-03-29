import {
  ICheckingAccountResponse,
  ICheckingAccountResponseNetwork
} from './checking-account'
import {
  IDisclosureCategoryResponseNetowork,
  IDislosureCategoryResponse
} from '@/types/response/disclosure'

export interface IManagingOrganizationResponseNetwork {
  id: number
  connected_to_system: number
  information_source: string
  short_name: string
  full_name: string
  inn: string
  kpp?: string
  orgn?: string
  oktmo?: string
  legal_address: string
  postal_address: string
  manager: string
  email: string
  external_site: string
  system_site?: string
  system_site_enabled: number
  dispatcher_address: string
  dispatcher_phone: string
  dispatcher_work_time: string
  phone: string
  disclosure_categories: IDisclosureCategoryResponseNetowork[]
  checking_account: ICheckingAccountResponseNetwork
}

export interface IManagingOrganizationResponse {
  id: number
  connectedToSystem: number
  informationSource: string
  shortName: string
  fullName: string
  inn: string
  kpp?: string
  orgn?: string
  oktmo?: string
  legalAddress: string
  postalAddress: string
  manager: string
  email: string
  externalSite: string
  systemSite: string
  systemSiteEnabled: number
  dispatcherAddress: string
  dispatcherPhone: string
  dispatcherWorkTime: string
  phone: string
  disclosureCategories: IDislosureCategoryResponse[]
  checkingAccount: ICheckingAccountResponse
}
