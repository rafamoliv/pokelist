import { useTranslation } from 'react-i18next'

import { useFetchPokemonsQuery } from '@/services/api'

const Home = () => {
  const { t } = useTranslation('pgDashboard')
  const { data: pokeList = [] } = useFetchPokemonsQuery('')

  console.log(pokeList)

  return <div>Home</div>
}
export default Home
