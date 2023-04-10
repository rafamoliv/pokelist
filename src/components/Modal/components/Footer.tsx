import { ModalFooter, ModalProps } from '@chakra-ui/react'

/**
 * Modal component
 */

export const Footer = ({ children }: ModalProps) => {
  return (
    <ModalFooter>
      {children}
    </ModalFooter>
  )
}