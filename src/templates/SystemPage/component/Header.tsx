import { HeaderProps } from '../types'

/**
 * Internal pages template header
 *
 * @param {ReactNode} children
 * @param {string} title
 */

export const Header = ({ children, title }: HeaderProps) => {
  return <div>{children}</div>
}
