import connecterDadata from '@/connecters/dadata'
import { IAddressHouse } from '@/types/response/address'

class Dadata {
  private token: string
  public address?: IAddressHouse
  public suggestions: IAddressHouse[] = []

  constructor (token: string) {
    this.token = token
  }

  public async pullAddresses (query: string): Promise<IAddressHouse[]> {
    const suggestionsFromDadata = (await connecterDadata.pullAddresses({
      data: {
        query,
        from_bound: { value: 'region' },
        to_bound: { value: 'house' }
      },
      token: this.token
    })).suggestions

    this.suggestions = suggestionsFromDadata.map((suggestion: any) => ({
      fiasHouse: suggestion.data.house_fias_id,
      fullName: Dadata.glueFullAddress(suggestion.data),
      isHouse: Dadata.isHouse(suggestion.data),
      streetFiasId: suggestion.data.street_fias_id,
      cityFiasId: suggestion.data.city_fias_id,
      houseNum: suggestion.data.house,
      shortAddress: Dadata.glueShortAddress(suggestion.data),
      street: suggestion.data.street
    } as IAddressHouse))
    return this.suggestions
  }

  public async pullAddressByFias (fias: string) {
    const addressFromDadata = (await connecterDadata.pullAddressByFias({
      data: { query: fias },
      token: this.token
    })).suggestions[0].data
    // @ts-ignore
    this.address = {
      fiasHouse: addressFromDadata.house_fias_id,
      fullName: Dadata.glueFullAddress(addressFromDadata),
      isHouse: Dadata.isHouse(addressFromDadata),
      shortAddress: Dadata.glueShortAddress(addressFromDadata)
    }
    return this.address
  }

  public async pullFiasToUpperLevel (fias: string): Promise<string | undefined> {
    const response = (await connecterDadata.pullAddressByFias({
      data: { query: fias },
      token: this.token
    })).suggestions[0].data

    if (response.house_fias_id) {
      return response.street_fias_id
    } else if (response.street_fias_id) {
      return response.city_fias_id
    } else if (response.city_fias_id) {
      return response.region_fias_id
    } else {
      return undefined
    }
  }

  private static glueFullAddress (address: any) {
    return (address.region_type + '.' + address.region + ',') +
        ((address.area != null) ? (' ' + address.area + address.area_type + ',') : '') +
        ((address.city != null) ? (' ' + address.city_type + '.' + address.city + ',') : '') +
        ((address.settlement != null) ? (' ' + address.settlement_type + '.' + address.settlement + ',') : '') +
        ((address.street != null) ? (' ' + address.street_type + '.' + address.street + ',') : '') +
        ((address.house) ? (' ' + address.house) : '')
  }

  private static glueShortAddress (address: any) {
    return (address.street_with_type || '') + ' ' +
        (address.house_type || '') + ' ' +
        (address.house || '')
  }

  private static isHouse (address: any) {
    return address.house_type !== null && address.house_fias_id !== null
  }
}

export default new Dadata(process.env.DADATA_TOKEN || '')
