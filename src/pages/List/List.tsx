import { useTranslation } from 'react-i18next'

import { useFetchPokemonsQuery } from '@/services/api'

const List = () => {
  const { t } = useTranslation('pgList')
  const { data: pokeList = [] } = useFetchPokemonsQuery('')

  console.log(pokeList)

  return <div>List</div>
}
export default List
