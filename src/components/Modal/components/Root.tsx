import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalProps, Modal } from '@chakra-ui/react'
import { Loading } from '../../Loading'

/**
 * Modal component
 */

interface ModalPropsInterface extends ModalProps {
  loading?: boolean
}

export const Root = ({ children, isOpen, onClose, loading }: ModalPropsInterface) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={loading ? 8 : ''}>
        <Loading loading={loading} size='sm'>
          <ModalHeader />
          <ModalCloseButton />
          {children}
        </Loading>
      </ModalContent>
    </Modal>
  )
}