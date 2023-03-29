export enum Endpoints {
  POST_INDEX = '/web/posts?limit={{0}}',
  POST_ALL = '/web/posts',
  POST_SHOW = '/web/posts/{{0}}',

  PAYMENT_CREATE = '/citizen/payments',

  ADDRESS_REGIONS = '/web/address-object',
  ADDRESS_OBJECT = '/web/address-object/{{0}}',
  ADDRESS_HOUSE = '/web/house/{{0}}',
  ADDRESS_OVERHALL = '/web/house/overhaul/{{0}}',
  ADDRESS_STRUCTURE = '/web/house/structure/{{0}}',
  ADDRESS_CONSTUCTION_ELEMENT = '/web/house/construction-elements/{{0}}',

  ADDRESS_OBJECT_BY_FIAS = '/web/address-object?fias_guid={{0}}',
  ADDRESS_HOUSE_BY_FIAS = '/web/house?fias_guid={{0}}',
  GET_HOUSE_BY_FIAS = '/web/house?fias_guid={{0}}&string_address={{1}}&short_address={{2}}&street={{3}}&street_fias_id={{4}}&housenum={{5}}&city_fias_id={{6}}',
  ADDRESS_OVERHALL_BY_FIAS = '/web/house/overhaul?fias_guid={{0}}',
  ADDRESS_STRUCTURE_BY_FIAS = '/web/house/structure?fias_guid={{0}}',
  ADDRESS_CONSTUCTION_ELEMENT_BY_FIAS = '/web/house/construction-elements?fias_guid={{0}}',

  GET_MANAGING_ORGANIZATION = '/web/managing-organization/{{0}}',
  SEARCH_MANAGING_ORGANIZATION = '/web/managing-organization?str_search={{0}}',

  DADATA_FIND_ADDRESSES = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  DADATA_FIND_BRANDS_CARS = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/car_brand',
  DADATA_FIND_ADDRESS = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/address',

  USER_REGISTRATION = '/user/register'
}

export function urlBuilder (urlExpression: string, ...params: string[]) {
  return urlExpression.replace(/\{\{(\d+)\}\}/g, (_, p1) => {
    return params[+p1]
  })
}
