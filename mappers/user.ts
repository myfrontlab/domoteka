import { IMapper } from '@/mappers'
import {
  IRegisterUserResponse,
  IRegisterUserResponseNetwork
} from "@/types/response/user"

export const mapRegisterUserResponse: IMapper<IRegisterUserResponseNetwork, IRegisterUserResponse> = {
  id: 'id',
  token: 'token'
}
