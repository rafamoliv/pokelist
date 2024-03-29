import { render, cleanup, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement, ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import Store from '@/store'
import { MyThemeProvider } from '@/styles'

import i18n from './i18nForTests'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from '@/context/AppContext'

// Setup to testign library: https://testing-library.com/docs/react-testing-library/setup

// Clean tree react
afterEach(() => {
  cleanup()
})

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={Store}>
      <AppContextProvider>
        <MyThemeProvider>
          <BrowserRouter>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
          </BrowserRouter>
        </MyThemeProvider>
      </AppContextProvider>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options
  })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render, userEvent }
