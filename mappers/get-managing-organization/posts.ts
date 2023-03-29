import { IMapper } from '@/mappers'
import { IGetPosts, IGetPostsResponse } from '@/types/response/get-managing-organization/get-managing-organization'

export const postsMap: IMapper<IGetPostsResponse, IGetPosts> = {
  id: 'id',
  managing_organization_id: 'managingOrganizationId',
  is_general: 'isGeneral',
  preview_text: 'previewText',
  name: 'name',
  text: 'text',
  publication_date: 'publicationDate',
  created_at: 'createdAt',
  updated_at: 'updatedAt',
  deleted_at: 'deletedAt'
}
