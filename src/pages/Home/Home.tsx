import { useTranslation } from 'react-i18next'

import { Section, StyledContainer as Container, AnimationBox, AsideBox } from './Home.styles'
import { AnimationSquirtle, IconPokeGGBorderWhite, ImgFirered, ImgPikachu, ImgPokeBlackBackground, ImgPokemon } from '@/assets'
import Lottie from 'react-lottie'
import { SystemPage } from '@/templates'
import { Heading, Text, Image, Stack, Box, Button, AvatarGroup, Avatar, VStack, HStack } from '@chakra-ui/react'
import { ArrowForwardIcon, MinusIcon } from '@chakra-ui/icons'
import { faker } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { url } from '@/routes/urls'

const Home = () => {
  const { t, i18n } = useTranslation('pgHome')

  return (
    <SystemPage.Root>
      <Section>
        <Container maxW='container.xl'>
          <AsideBox>
            <Stack spacing={8}>
              <Text color={'white'} fontSize='lg'>{t('text')} <MinusIcon width={'4'} /></Text>
              <Heading as='h2' color={'white'} size='2xl' noOfLines={5}>
                {t('heading')}
              </Heading>
              <Text color={'white'} fontSize='lg'>{t('text', { context: '2' })}</Text>
              <Stack spacing={2}>
                <Link to={url.LIST}>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme='yellow' size={'lg'}>
                    {t('btn')}
                  </Button>
                </Link>
                <HStack spacing={2}>
                  <Button colorScheme='whiteAlpha' onClick={() => i18n.changeLanguage('en')} size={'lg'} variant={'outline'}>
                    {t('languages.en')}
                  </Button>
                  <Button colorScheme='whiteAlpha' onClick={() => i18n.changeLanguage('ptbr')} size={'lg'} variant={'outline'}>
                    {t('languages.pt')}
                  </Button>
                </HStack>
              </Stack>
              <AvatarGroup size='md'>
                <Avatar name={faker.name.fullName()} src={faker.image.avatar()} />
                <Avatar name={faker.name.fullName()} src={faker.image.avatar()} />
                <Avatar name={faker.name.fullName()} src={faker.image.avatar()} />
                <Avatar name={faker.name.fullName()} src={faker.image.avatar()} />
                <Avatar name={faker.name.fullName()} src={faker.image.avatar()} />
              </AvatarGroup>
              <Text color={'white'} fontSize='md'>{t('text', { context: '3' })}</Text>
            </Stack>
          </AsideBox>
          <AnimationBox>
            <Image
              className='pokemonLogoImg'
              objectFit='cover'
              src={ImgPokemon}
              alt={t('altImg.pokemon')}
              width={'90%'}
            />
            <Image
              className='fireredImg'
              objectFit='cover'
              src={ImgFirered}
              alt={t('altImg.firered')}
              width={'60%'}
            />
            <Image
              className='pikachuImg'
              objectFit='cover'
              src={ImgPikachu}
              alt={t('altImg.pikachu')}
              width={'60%'}
            />
            <Lottie
              height={'100%'}
              options={{
                loop: true,
                autoplay: true,
                animationData: AnimationSquirtle
              }}
              width={'100%'}
            />
          </AnimationBox>
        </Container>
      </Section>
    </SystemPage.Root>
  )
}
export default Home
