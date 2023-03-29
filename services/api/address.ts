import EventEmitter from '@/utils/event-emitter.util'
import connecterAddress from '@/connecters/address'
import { IHouseResponse } from '@/types/response/house'
import { IAddressResponse } from '@/types/response/address'
import { TypeAddress } from '@/types/enum-address'
import { IOverhaulResponse } from '@/types/response/overhaul'
import { IItemDataHouse } from '@/types/item-data-house'
import TaskManagerUtil from '@/utils/task-manager.util'

class Address extends EventEmitter<'updatePathAddresses'> {
  private showHouse?: IHouseResponse
  private regions: IAddressResponse[] = []
  private address?: IAddressResponse
  private pathAddresses: IAddressResponse[] = []
  private overhauls: IOverhaulResponse[] = []
  private constructionElements: any = []
  private engineeringSystems: IItemDataHouse[] = []
  private generalData: IItemDataHouse[] = []
  private typeSelectedAddress: TypeAddress = TypeAddress.Region
  private taskManagerStructure: TaskManagerUtil<'structure'> = new TaskManagerUtil()

  public getShowHouse (): IHouseResponse | undefined { return this.showHouse }
  public getPathAddresses (): IAddressResponse[] { return this.pathAddresses }
  public getTypeChildrenAddress (): TypeAddress { return this.typeSelectedAddress }
  public getChildrenHouses (): IHouseResponse[] { return this.address?.houses || [] }
  public getChildrenAddresses (): IAddressResponse[] { return this.address?.children || [] }
  public getEngineeringSystems (): IItemDataHouse[] { return this.engineeringSystems }
  public getGeneraglData (): IItemDataHouse[] { return this.generalData }

  private emitPathAddresses () { this.$emit('updatePathAddresses', this.pathAddresses) }

  public async pullHouse ({ id, fias }: {
    id: number | string | undefined,
    fias: string | undefined
  }) {
    try {
      this.showHouse = await connecterAddress.pullHouse({ id, fias })
      return this.showHouse
    } catch { }
  }

  public async getHouse ({ fias, stringAddress, shortAddress, street, streetFiasId, housenum, cityFiasId }: {
    fias: string | undefined,
    stringAddress: string | undefined,
    shortAddress: string | undefined,
    street: string | undefined,
    streetFiasId: string | undefined,
    housenum: string | undefined,
    cityFiasId: string | undefined
  }) {
    try {
      this.showHouse = await connecterAddress.getHouse({ fias, stringAddress, shortAddress, street, streetFiasId, housenum, cityFiasId })
      return this.showHouse
    } catch { }
  }

  public async pullRegions () {
    this.regions = this.sortObjects(await connecterAddress.pullRegions())
    this.pathAddresses = []
    this.typeSelectedAddress = TypeAddress.Region
    return this.regions
  }

  public async pullOverhaul ({ id, fias }: {
      id: number | string | undefined,
      fias: string | undefined
    }) {
    try {
      this.overhauls = await connecterAddress.pullOverhaul({ id, fias })
    } catch {}
    this.overhauls = this.overhauls.map(o => ({ ...o, year: o.year + ' г.' }))
    return this.overhauls
  }

  public async pullStructure ({ id, fias }: {
      id: number | string | undefined,
      fias: string | undefined
    }) {
    if (this.taskManagerStructure.has('structure')) {
      return await this.taskManagerStructure.get('structure')
    } else {
      await this.taskManagerStructure.set('structure', (async () => {
        const response = await connecterAddress.pullStructure({ id, fias })
        /* данные приходят в странном формате, поэтому их надо распарсить */
        this.fillArrayEngineeringSystems(response)
        this.fillArrayGeneralData(response)
      })())
    }
  }

  /* Парсим данные дома */
  private fillArrayGeneralData (structureResponse: any) {
    this.generalData = []
    this.generalData.push({
      name: 'Адрес дома',
      type: this.showHouse?.fullAddress || ''
    })
    const keyType = [
      {
        key: 'built_year',
        value: 'Год постройки',
        dimension: 'г.'
      }, {
        key: 'house_type',
        value: 'Тип дома'
      }, {
        key: 'floor_count_max',
        value: 'Количество этажей',
        dimension: 'ед.'
      }, {
        key: 'entrance_count',
        value: 'Количество подъездов',
        dimension: 'ед.'
      }, {
        key: 'elevators_count',
        value: 'Количество лифтов',
        dimension: 'ед.'
      }, {
        key: 'flats_count',
        value: 'Количество квартир',
        dimension: 'ед.'
      }, {
        key: 'living_quarters_count',
        value: 'Количество жилых помещений',
        dimension: 'ед.'
      }, {
        key: 'not_living_quarters_count',
        value: 'Количество нежилых помещений',
        dimension: 'ед.'
      }, {
        key: 'parking_square',
        value: 'Парковка',
        dimension: 'м.'
      }, {
        key: 'has_playground',
        value: 'Есть детская площадка'
      }, {
        key: 'has_sportsground',
        value: 'Есть спортивная площадка'
      }]
    keyType.forEach((type) => {
      if (structureResponse[type.key]) {
        if (type.key === 'has_playground') {
          this.generalData.push({
            name: type.value,
            type: structureResponse[type.key] ? 'Да' : 'Нет'
          })
        } else if (type.key === 'has_sportsground') {
          this.generalData.push({
            name: type.value,
            type: structureResponse[type.key] ? 'Да' : 'Нет'
          })
        } else {
          this.generalData.push({
            name: type.value,
            type: structureResponse[type.key] + (type.dimension ? ' ' + type.dimension : '')
          })
        }
      }
    })
  }

  /* Парсим данные инжекторные системы */
  private fillArrayEngineeringSystems (structureResponse: any) {
    const keyType = [
      {
        key: 'electrical_type',
        value: 'Тип системы электроснабжения'
      }, {
        key: 'heating_type',
        value: 'Тип системы теплоснабжения'
      }, {
        key: 'hot_water_type',
        value: 'Тип системы горячего водоснабжения'
      }, {
        key: 'cold_water_type',
        value: 'Тип системы холодного водоснабжения'
      }, {
        key: 'sewerage_type',
        value: 'Тип системы водоотведения'
      }, {
        key: 'gas_type',
        value: 'Тип системы газоснабжения'
      }, {
        key: 'ventilation_type',
        value: 'Тип системы вентиляции'
      }, {
        key: 'firefighting_type',
        value: 'Тип системы пожаротушения'
      }, {
        key: 'drainage_type',
        value: 'Тип системы водостоков'
      }, {
        key: 'foundation_type',
        value: 'Тип фундамента'
      }]
    this.engineeringSystems = []
    keyType.forEach((type) => {
      if (structureResponse[type.key]) {
        this.engineeringSystems.push({
          name: type.value,
          type: structureResponse[type.key].toLowerCase()
        })
      }
    });
    (structureResponse.facades || []).forEach((value: string) => {
      this.engineeringSystems.push({
        name: 'Фасад',
        type: value.toLowerCase()
      })
    });
    (structureResponse.facades || []).forEach((value: string) => {
      this.engineeringSystems.push({
        name: 'Крыша',
        type: value.toLowerCase()
      })
    })
  }

  public async pullConstructionElements ({ id, fias }: {
      id: number | string | undefined,
      fias: string | undefined
    }) {
    let constructionElementsNetwork = []

    try {
      constructionElementsNetwork = await connecterAddress.pullConstructionElements({ id, fias })
    } catch {}

    /* парсим конструктивные элементы */
    this.constructionElements = constructionElementsNetwork.map((element: any) => {
      let value = '';
      [
        {
          key: 'systemTypeId'
        }, {
          key: 'liftTypeId'
        }, {
          key: 'capacity',
          dimension: 'м.'
        }, {
          key: 'stopsCount',
          dimension: 'эт.'
        }, {
          key: 'commissioningDate',
          dimension: 'г.',
          func: formatDate
        }, {
          key: 'decommissioningDate',
          dimension: 'г.',
          func: formatDate
        }, {
          key: 'planDecommissioningDate',
          dimension: 'г.',
          func: formatDate
        }, {
          key: 'roofTypeId'
        }, {
          key: 'roofingArea',
          dimension: 'м.'
        }, {
          key: 'basementArea',
          dimension: 'м.'
        }, {
          key: 'facadeTypeId',
          dimension: ''
        }, {
          key: 'facadeArea',
          dimension: 'м.'
        }, {
          key: 'foundationTypeId',
          dimension: ''
        }
      ].forEach((object) => {
        if (element[object.key]) {
          value = object.func ? object.func(element[object.key]) : element[object.key]
          if (object.dimension) {
            value += ' ' + object.dimension
          }
        }
      })
      return {
        key: capitalizeFirstLetter(element.constructionElementType),
        value
      }
    })
    return this.constructionElements
  }

  public async pullAddressByFias ({ id, fias }: {
      id: number | string | undefined,
      fias: string | undefined
    }) {
    this.address = await connecterAddress.pullAddress({ id, fias })

    if ((this.address?.children || []).length > 0) {
      // @ts-ignore
      this.typeSelectedAddress = this.determineTypeOfAddress(this.address.children[0])
    } else if ((this.address?.houses || []).length > 0) {
      this.typeSelectedAddress = TypeAddress.House
    }
    this.address.children = this.sortObjects(this.address.children)
    this.pathAddresses = this.getGluedPathAddresses(this.address)
    this.emitPathAddresses()
    return this.address
  }

  /* Сортирую данные для компонента AddressCatalog.vue */
  private sortObjects (data: IAddressResponse[] | undefined) {
    if (!data) {
      return null
    }
    const result: any = {}
    const regionList = data.sort((a, b) => a.name > b.name ? 1 : -1)
    regionList.forEach((item: IAddressResponse) => {
      const mapItem: any[] | undefined = result[item.name[0]]
      item.fullName = this.getFullNameAddress(item)
      if (mapItem) {
        mapItem.push(item)
      } else {
        result[item.name[0]] = [item]
      }
    })
    return result
  }

  private getFullNameAddress (address: IAddressResponse): string {
    return address.name + ` (${address.type.toLowerCase()}.)`
    // switch (address.type) {
    //   case 'г':
    //   case 'Респ':
    //   case 'д':
    //   case 'п':
    //   case 'г-к':
    //   case 'пгт':
    //   case 'ул':
    //   case 'ж/д_ст':
    //     return address.type + ' ' + address.name
    //   case 'край':
    //   case 'обл':
    //   case 'р-н':
    //   case 'пр-кт':
    //   case 'тер.':
    //   case 'наб':
    //   case 'проезд':
    //   case 'ш':
    //   case 'с':
    //     return address.name + ' ' + address.type
    //   default:
    //     return address.type + ' ' + address.name
    // }
  }

  /* Склеиваем историю адресов для Breadcrumbs.vue */
  private getGluedPathAddresses (address: IAddressResponse): IAddressResponse[] {
    let pathAddresses: IAddressResponse[]
    if (!Array.isArray(address.parentHierarchy)) {
      pathAddresses = []
    } else {
      pathAddresses = (address.parentHierarchy || []).map(address => ({
        ...address,
        fullName: this.getFullNameAddress(address)
      }))
      this.emitPathAddresses()
    }
    const lastAddress = {
      id: address.id,
      name: address.name,
      type: address.type,
      fullName: address.fullName,
      parentId: address.parentId,
      fias: address.fias
    }
    lastAddress.fullName = this.getFullNameAddress(lastAddress)
    pathAddresses.push(lastAddress)
    return pathAddresses
  }

  private determineTypeOfAddress (address: IAddressResponse): TypeAddress {
    switch (address.type) {
      case 'Респ':
      case 'край':
      case 'обл':
        return TypeAddress.Region
      case 'р-н':
      case 'г':
      case 'д':
      case 'пгт':
      case 'с':
      case 'ж/д_ст':
      case 'рп':
        return TypeAddress.City
      case 'пр-кт':
      case 'ул':
      case 'тер.':
      case 'б-р':
      case 'наб':
      case 'проезд':
      case 'ш':
      case 'пер':
      case 'п':
      case 'г-к':
        return TypeAddress.Street
      default:
        return TypeAddress.House
    }
  }
}

/**
 * @param value
 * @param time
 */
function formatDate (value: string, time: boolean = false) {
  if (value) {
    const date = new Date(value.replace(/-/g, '/'))
    const day: string = date.getDate().toString().padStart(2, '0')
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0')

    return day + '.' + month + '.' + date.getFullYear() + (time ? ' ' + value.split(' ')[1].substr(0, 5) : '')
  }
}

/**
 * @param string
 */
function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default new Address()
