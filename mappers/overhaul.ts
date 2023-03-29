import { IMapper } from '@/mappers'
import { IOverhaulResponse, IOverhaulResponseNetwork } from '@/types/response/overhaul'

export const mapperOverhaul: IMapper<IOverhaulResponseNetwork, IOverhaulResponse> = {
  service: 'service',
  year: 'year'
}
