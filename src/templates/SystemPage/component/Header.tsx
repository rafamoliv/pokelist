import { IconPokeGGBorderWhite } from '@/assets'
import { Container, Flex, HStack, Avatar, Box, Image } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'

/**
 * System pages template header
 */

export const Header = () => {
  return <nav>
    <Box bg={'black'} px={4}>
      <Container maxW='container.xl'>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                objectFit='cover'
                src={IconPokeGGBorderWhite}
                alt='poke.gg logo'
              />
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
            <Avatar
              size={'md'}
              src={faker.image.avatar()}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  </nav>
}
