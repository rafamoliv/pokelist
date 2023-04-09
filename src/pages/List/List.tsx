import { useTranslation } from 'react-i18next'
import { Key, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetchPokemonsQuery } from '@/services/api'
import { SystemPage } from '@/templates'
import { StyledIcon as Icon, StyledContainer as Container, TableHeading } from './List.styles'
import { ArrowBackIcon, ArrowRightIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { url } from '@/routes/urls'
import { Loading } from '@/components'


const List = () => {
  const { t } = useTranslation('pgList')
  const [pokeLimit, setPokeLimit] = useState('10')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: pokeList = [] } = useFetchPokemonsQuery(pokeLimit)

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
                  {pokeList?.results?.map((poke: any, index: Key) => (
                    <Tr key={index}>
                      <Td>{poke.name}</Td>
                      <Td textAlign={'center'}>
                        <Icon as={StarIcon} color={'yellow'} />
                      </Td>
                      <Td textAlign={'center'}>
                        <Button
                          border={'none'}
                          colorScheme='whiteAlpha'
                          isLoading={isOpen}
                          onClick={onOpen}
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
          <ModalContent padding={isOpen ? 8 : ''}>
            <Loading loading={true} size='sm'>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lorem count={2}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blackAlpha' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button colorScheme='yellow' rightIcon={<StarIcon color={'gray.700'} />} variant='ghost' />
              </ModalFooter>
            </Loading>
          </ModalContent>
        </Modal>
      </Container>
    </section>
  </SystemPage.Root>
}
export default List
