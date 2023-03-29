import { IMapper } from '@/mappers'
import { IGetElements, IGetElementsResponse } from '@/types/response/get-managing-organization/get-managing-organization'

export const elementsMap: IMapper<IGetElementsResponse, IGetElements> = {
  id: 'id',
  disclosure_category_id: 'disclosureCategoryId',
  title: 'title',
  text: 'text',
  file: 'file',
  published: 'published',
  created_at: 'createdAt',
  updated_at: 'updatedAt',
  deleted_at: 'deletedAt'
}
