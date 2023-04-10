import { ModalBody, ModalProps } from '@chakra-ui/react'

/**
 * Modal component
 */

export const Body = ({ children }: ModalProps) => {
  return (
    <ModalBody>
      {children}
    </ModalBody>
  )
}