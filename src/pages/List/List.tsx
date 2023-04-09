import { useTranslation } from 'react-i18next'
import { Key, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetchPokemonsQuery } from '@/services/api'
import { SystemPage } from '@/templates'
import { StyledIcon as Icon, StyledContainer as Container, TableHeading } from './List.styles'
import { ArrowBackIcon, ArrowRightIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { url } from '@/routes/urls'


const List = () => {
  const { t } = useTranslation('pgList')
  const [pokeLimit, setPokeLimit] = useState('10')
  const { data: pokeList = [] } = useFetchPokemonsQuery(pokeLimit)

  console.log(pokeList)

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
                <Select onChange={(e) => setPokeLimit(e.target.value)} size='md' variant={'Filled'}>
                  <option value='10' selected>10</option>
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
                  {pokeList?.results?.map((poke: any, index: Key) => (
                    <Tr key={index}>
                      <Td>{poke.name}</Td>
                      <Td textAlign={'center'}><Icon as={StarIcon} /></Td>
                      <Td textAlign={'center'}>
                        <Button border={'none'} colorScheme='whiteAlpha' isLoading={false} rightIcon={<ArrowRightIcon />} variant={'outline'} />
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
      </Container>
    </section>
  </SystemPage.Root>
}
export default List
