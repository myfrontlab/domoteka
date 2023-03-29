import { IMapper } from '@/mappers'
import {
  IDisclosureCategoryResponseNetowork,
  IDisclosureElementResponse,
  IDisclosureElementResponseNetwork, IDislosureCategoryResponse
} from '@/types/response/disclosure'

const mapperDisclosureElement: IMapper<IDisclosureElementResponseNetwork, IDisclosureElementResponse> = {
  id: 'id',
  disclosure_category_id: 'disclosureCategoryId',
  title: 'title',
  text: 'text',
  file: 'linkFile',
  published: 'published'
}

export const mapperDisclosureCategories: IMapper<IDisclosureCategoryResponseNetowork, IDislosureCategoryResponse> = {
  id: 'id',
  managing_organization_id: 'managingOrganizationId',
  title: 'title',
  text: 'text',
  elements: ['elements', mapperDisclosureElement]
}
