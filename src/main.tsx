import { Suspense } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/locales/i18n'

import { Loading } from '@/components'
import Store from '@/store'
//import { MyThemeProvider } from '@/styles'

import Routes from './routes'
import { AppContextProvider } from './context/AppContext'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <Provider store={Store}>
      <AppContextProvider>
        {/* <MyThemeProvider> */}
        <BrowserRouter>
          <Suspense fallback={<Loading size='md' />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
        {/* </MyThemeProvider> */}
      </AppContextProvider>
    </Provider>
  </ChakraProvider>
)
