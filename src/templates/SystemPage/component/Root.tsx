import { ChildrenProps } from '../types'
import { MainContent } from '../SystemPage.style'

/**
 * System pages template root
 *
 * @param {ReactNode} children
 */

export const Root = ({ children }: ChildrenProps) => {
  return <MainContent>
    {children}
  </MainContent>
}
