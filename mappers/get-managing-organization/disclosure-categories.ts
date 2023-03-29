import { IMapper } from '@/mappers'
import {
  IGetDisclosure,
  IGetDisclosureResponse
} from '@/types/response/get-managing-organization/get-managing-organization'
import { elementsMap } from '@/mappers/get-managing-organization/disclosure-elements'

export const disclosureCategoriesMap: IMapper<IGetDisclosureResponse, IGetDisclosure> = {
  id: 'id',
  managing_organization_id: 'managingOrganizationId',
  title: 'title',
  text: 'text',
  created_at: 'createdAt',
  updated_at: 'updatedAt',
  deleted_at: 'deletedAt',
  elements: ['elements', elementsMap]
}
