import { IMapper } from '@/mappers'
import { IGetOutages, IGetOutagesResponse } from '@/types/response/get-managing-organization/get-managing-organization'

export const outagesMap: IMapper<IGetOutagesResponse, IGetOutages> = {
  id: 'id',
  managing_organization_id: 'managingOrganizationId',
  type: 'type',
  start_date: 'startDate',
  end_date: 'endDate',
  name: 'name',
  text: 'text',
  created_at: 'createdAt',
  updated_at: 'updatedAt',
  deleted_at: 'deletedAt'
}
