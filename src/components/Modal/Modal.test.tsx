import i18next from 'i18next'
import { render, screen } from '@/utils/tests'
import { Modal } from '.'
import { ReactNode } from 'react'

const props = {
  children: i18next.t('translation:foo'),
  loading: true,
  isOpen: true,
  onClose: vi.mock('')
}

describe('<Modal />', () => {
  describe('Component Snapshot', () => {
    it('Render full element', () => {
      const { container } = render(
        <Modal.Root {...props}>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Root>
      )
      expect(container.firstChild).toMatchSnapshot()
    })

    it('Render with just Body element', () => {
      const { container } = render(
        <Modal.Root {...props}>
          <Modal.Body>Body</Modal.Body>
        </Modal.Root>
      )
      expect(container.firstChild).toMatchSnapshot()
    })

    it('Render with just Footer element', () => {
      const { container } = render(
        <Modal.Root {...props}>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Root>
      )
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('Component Props', () => {
    it('Should render loading prop', () => {
      render(
        <Modal.Root isOpen={true} loading={true}>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Root>
      )
      expect(screen.getByLabelText(`animation`)).toBeInTheDocument()
    })

    it('Should render Body children', () => {
      const { container } = render(
        <Modal.Root isOpen={true} loading={true}>
          <Modal.Body>Body</Modal.Body>
        </Modal.Root>
      )
      expect(container.firstChild).toBeTruthy()
    })

    it('Should render Footer children', () => {
      const { container } = render(
        <Modal.Root isOpen={true} loading={true}>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Root>
      )
      expect(container.firstChild).toBeTruthy()
    })
  })
})
