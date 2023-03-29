import { IMapper } from '@/mappers'
import {
  IOutageResponse,
  IOutageResponseNetwork
} from '@/types/response/outage'

export const mapperOutageResponse: IMapper<IOutageResponseNetwork, IOutageResponse> = {
  id: 'id',
  managing_organization_id: 'managingOrganizationId',
  type: 'type',
  start_date: 'startDate',
  end_date: 'endDate',
  text: 'text',
  name: 'title'
}
