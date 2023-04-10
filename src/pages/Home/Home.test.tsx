import { render, screen, userEvent } from '@/utils/tests'
import Home from './Home'

describe('<Home />', () => {
  describe('Component Snapshot', () => {
    it('Render element', () => {
      const { container } = render(<Home />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('Component Roles', () => {
    it('Should have title', () => {
      render(<Home />)
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('Should have button', () => {
      render(<Home />)
      expect(screen.getAllByRole(/button/i)[0]).toBeInTheDocument()
    })

    it('Should have text', () => {
      render(<Home />)
      expect(screen.getAllByRole(/p/i)[0]).toBeInTheDocument()
    })
  })
})
