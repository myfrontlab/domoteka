import { IMapper } from '@/mappers'
import {
  IManagingOrganizationResponseNetwork,
  IManagingOrganizationResponse
} from '@/types/response/managing-organization'
import { mapperDisclosureCategories } from '@/mappers/disclosure'
import { ICheckingAccountResponseNetwork, ICheckingAccountResponse } from '~/types/response/checking-account'

export const mapperCheckingAccountResponse: IMapper<ICheckingAccountResponseNetwork, ICheckingAccountResponse> = {
  bank_name: 'bankName',
  bik: 'bik',
  checking_account: 'checkingAccount',
  correspondent_account: 'correspondentAccount',
  id: 'id',
  inn: 'inn',
  kpp: 'kpp',
  managing_organization_id: 'managingOrganizationId',
  oktmo: 'oktmo',
  receiver_name: 'receiverName'
}

export const mapperManagingOrganizationResponse: IMapper<IManagingOrganizationResponseNetwork, IManagingOrganizationResponse> = {
  id: 'id',
  information_source: 'informationSource',
  connected_to_system: 'connectedToSystem',
  short_name: 'shortName',
  full_name: 'fullName',
  inn: 'inn',
  kpp: 'kpp',
  legal_address: 'legalAddress',
  postal_address: 'postalAddress',
  manager: 'manager',
  email: 'email',
  external_site: 'externalSite',
  system_site: 'systemSite',
  system_site_enabled: 'systemSiteEnabled',
  dispatcher_address: 'dispatcherAddress',
  dispatcher_phone: 'dispatcherPhone',
  dispatcher_work_time: 'dispatcherWorkTime',
  phone: 'phone',
  disclosure_categories: ['disclosureCategories', mapperDisclosureCategories],
  checking_account: ['checkingAccount', mapperCheckingAccountResponse]
}
