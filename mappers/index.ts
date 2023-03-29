import { AxiosResponse } from 'axios'

export type IMapper<S, T> = {
  [key in keyof S]?: keyof T | [keyof T, IMapper<S[key], any> | IMapper<any, any> | '~']
}

function mapProperties<Source, Target> (source: Source, map: IMapper<Source, Target>) {
  // @ts-ignore
  const result: Target = {}

  for (const key in source) {
    if (!map[key]) {
      // @ts-ignore
      result[key] = source[key]
      continue
    }

    if (Array.isArray(map[key])) {
      // тильда нужна, чтобы идентифицировать рекурсивный тип данных
      // @ts-ignore
      const newMap = (map[key][1] === '~') ? map : map[key][1]
      if (Array.isArray(source[key])) {
        // @ts-ignore
        result[map[key][0]] = source[key].map(item => mapProperties(item, newMap))
      } else {
        // @ts-ignore
        result[map[key][0]] = mapProperties(source[key], newMap)
      }
    } else {
      // @ts-ignore
      result[map[key]] = source[key]
    }
  }
  return result
}

export function mapper<Source, Target> (map: IMapper<Source, Target>, source: Source): Target {
  return mapProperties(source, map)
}

export function arrayMapper<Source, Target> (map: IMapper<Source, Target>, source: Source[]): Target[] {
  return (source || []).map(item => mapProperties(item, map))
}

export function mapperResponse<Source, Target> (map: IMapper<Source, Target>) {
  return function (source: AxiosResponse<Source>): Target {
    return mapper(map, source.data)
  }
}

export function arrayMapperResponse<Source, Target> (map: IMapper<Source, Target>) {
  return function (source: AxiosResponse<Source[]>): Target[] {
    return arrayMapper(map, source.data)
  }
}

export function mapperRequest<Source, Target> (map: IMapper<Source, Target>) {
  return function (data: Source): Target {
    return mapper(map, data)
  }
}
