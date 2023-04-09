import { ReactNode } from 'react'
import { Global, ThemeProvider, css } from '@emotion/react'

import { theme } from './theme'

export const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            margin: ${theme.spacing[0]};
            outline: ${theme.spacing[0]};
            padding: ${theme.spacing[0]};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html,
          body,
          #root {
            height: 100%;
          }
          body {
            font-family: ${theme.font.family};
            scroll-behavior: smooth;
            line-height: 1.2;
            background-color: ${theme.colors.black};
          }
          input,
          button,
          textarea,
          select {
            font: inherit;
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}
