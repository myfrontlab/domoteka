import { IMapper } from '@/mappers'
import {
  IPostResponse,
  IPostResponseNetwork,
  IFullPostResponse,
  IFullPostResponseNetwork
} from '@/types/response/post'

export const mapperPostResponse: IMapper<IPostResponseNetwork, IPostResponse> = {
  id: 'id',
  publication_date: 'date',
  title: 'title',
  preview_text: 'previewText'
}

export const mapperFullPostResponse: IMapper<IFullPostResponseNetwork, IFullPostResponse> = {
  id: 'id',
  title: 'title',
  preview_text: 'previewText',
  text: 'text',
  published: 'published',
  publication_date: 'date'
}
