import { render, screen, userEvent } from '@/utils/tests'
import List from './List'

describe('<List />', () => {
  describe('Component Snapshot', () => {
    it('Render element', () => {
      const { container } = render(<List />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('Component Roles', () => {
    it('Should have title', () => {
      render(<List />)
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    it('Should have button', () => {
      render(<List />)
      expect(screen.getAllByRole(/button/i)[0]).toBeInTheDocument()
    })
  })
})
