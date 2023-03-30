import axios from 'axios'
/**
 * @param root0
 * @param root0.outages
 * @param root0.available_service
 * @param root0.fias
 * @param root0.stringAddress
 * @param root0.shortAddress
 * @param root0.street
 * @param root0.streetFiasId
 * @param root0.housenum
 * @param root0.cityFiasId
 */
export default async function ({ fias, stringAddress, shortAddress, street, streetFiasId, housenum, cityFiasId }) {
  const headers = { Authorization: 'Bearer ' + '640|TaLXonJQPNQHvv3jjjfvBTVJLsHYbRFgcAXMGhMc' }
  const connect = await axios.post('https://domoteka.online/api/web/house/', {
    fias_guid: fias,
    string_address: stringAddress,
    short_address: shortAddress,
    street,
    street_fias_id: streetFiasId,
    housenum,
    city_fias_id: cityFiasId
  }, { headers })
  const houseId = connect.data.id
  const data = await axios.get(`https://domoteka.online/api/web/house/${houseId}`, {
    headers
  })
  // @ts-ignore
  const available_services = data.data.available_services
  const outages = data.data.outages
  return { outages, available_services }
}
