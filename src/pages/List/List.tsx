import { useTranslation } from 'react-i18next'
import { Key, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetchPokemonsQuery, useLazyFetchPokemonStatsQuery } from '@/services/api'
import { SystemPage } from '@/templates'
import { StyledIcon as Icon, StyledContainer as Container, TableHeading } from './List.styles'
import { ArrowBackIcon, ArrowRightIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, HStack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure, Image, Progress } from '@chakra-ui/react'
import { url } from '@/routes/urls'
import { Loading } from '@/components'
import { useLocalStorage } from '@/utils/hooks'

interface pokeListProps {
  name: string
  url: string
}

interface pokeStatsProps {
  base_stat: number
  stat: {
    name: string
  }
}

const List = () => {
  const { t } = useTranslation('pgList')
  const [favorite, setFavorite] = useLocalStorage('favorite', [''])
  const [pokeLimit, setPokeLimit] = useState('10')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: pokeList = [] } = useFetchPokemonsQuery(pokeLimit)
  const [pokeStatsTrigger, { data: pokeStats = [], isFetching: isFetchingPokeStats }] = useLazyFetchPokemonStatsQuery()

  const handlePokeModalStats = (url: string) => {
    onOpen()
    pokeStatsTrigger(url)
  }

  const takeFavoritePoke = (poke: string) => {
    let index = favorite.indexOf(poke);
    if (index !== -1) {
      favorite.splice(index, 1);
      setFavorite(favorite)
    } else {
      setFavorite([...favorite, poke])
    }
  }

  const takeStarredPoke = (poke: string) => favorite.includes(poke)

  return <SystemPage.Root>
    <section>
      <Container maxW='container.xl'>
        <Box paddingTop={4}>
          <Link to={url.HOME}>
            <Button leftIcon={<ArrowBackIcon />} colorScheme='whiteAlpha' size={'sm'} variant='outline'>
              {t('btn', { context: 'back' })}
            </Button>
          </Link>
        </Box>
        <Box paddingBottom={8} paddingTop={8}>
          <Stack spacing={4}>
            <TableHeading>
              <Heading as='h3' color={'white'} size='xl' noOfLines={1}>
                {t('table.title')}
              </Heading>
              <Box>
                <Select onChange={(e) => setPokeLimit(e.target.value)} size='md' value={pokeLimit} variant={'Filled'}>
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='30'>30</option>
                </Select>
              </Box>
            </TableHeading>
            <TableContainer color={'white'}>
              <Table size={'sm'} variant='simple' colorScheme='whiteAlpha'>
                <TableCaption>{t('table.caption')}</TableCaption>
                <Thead>
                  <Tr>
                    <Th>{t('table.head.0')}</Th>
                    <Th textAlign={'center'} width={'15%'}>{t('table.head.1')}</Th>
                    <Th textAlign={'center'} width={'15%'}>{t('table.head.2')}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pokeList?.results?.map((poke: pokeListProps, index: Key) => (
                    <Tr key={index}>
                      <Td>{poke?.name}</Td>
                      <Td textAlign={'center'}>
                        <Icon
                          as={StarIcon}
                          color={takeStarredPoke(poke?.name) ? 'yellow' : 'gray.300'}
                          onClick={() => takeFavoritePoke(poke?.name)}
                        />
                      </Td>
                      <Td textAlign={'center'}>
                        <Button
                          border={'none'}
                          colorScheme='whiteAlpha'
                          isLoading={isOpen}
                          onClick={() => handlePokeModalStats(poke?.url)}
                          rightIcon={<ArrowRightIcon />}
                          variant={'outline'}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>{t('table.head.0')}</Th>
                    <Th textAlign={'center'}>{t('table.head.1')}</Th>
                    <Th textAlign={'center'}>{t('table.head.2')}</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Stack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent padding={isFetchingPokeStats ? 8 : ''}>
            <Loading loading={isFetchingPokeStats} size='sm'>
              <ModalHeader />
              <ModalCloseButton />
              <ModalBody>
                <Card maxW='sm' variant={'unstyled'}>
                  <CardBody>
                    <Image
                      src={pokeStats?.sprites?.front_default}
                      alt={pokeStats?.name}
                      borderRadius='lg'
                      margin={'auto'}
                    />
                    <Heading size='md'>{pokeStats?.name}</Heading>
                    <TableContainer>
                      <Table variant='simple'>
                        <Tbody>
                          {pokeStats?.stats?.map((stats: pokeStatsProps, index: Key) => (
                            <Tr key={index}>
                              <Td width={'30%'}>{stats?.stat?.name}</Td>
                              <Td width={'10%'}>{stats?.base_stat}</Td>
                              <Td width={'60%'}><Progress colorScheme={'blackAlpha'} hasStripe value={stats?.base_stat} /></Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <HStack spacing={4}>
                  <Icon
                    as={StarIcon}
                    color={takeStarredPoke(pokeStats?.name) ? 'yellow.400' : 'gray.700'}
                    onClick={() => takeFavoritePoke(pokeStats?.name)}
                  />
                  <Button colorScheme='blackAlpha' mr={3} onClick={onClose}>
                    {t('modal.btn', { context: 'close' })}
                  </Button>
                </HStack>
              </ModalFooter>
            </Loading>
          </ModalContent>
        </Modal>
      </Container>
    </section>
  </SystemPage.Root>
}
export default List
