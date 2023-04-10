import i18next from 'i18next'
import { render, screen } from '@/utils/tests'
import { Loading } from '.'

const props = {
  children: i18next.t('translation:foo'),
  loading: true
}

describe('<Loading />', () => {
  describe('Component Snapshot', () => {
    it('Render element', () => {
      const { container } = render(<Loading {...props} />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('Component Props', () => {
    it('Should render children props', () => {
      const { container } = render(<Loading loading={false} children={'foo'} />)
      expect(screen.getByText(/foo/i)).toBeTruthy()
      expect(container.firstChild).toBeTruthy()
    })

    it('Should render default loading', () => {
      const { container } = render(<Loading size={undefined} {...props} />)
      expect(container.firstChild).toBeTruthy()
    })

    it('Should render small loading', () => {
      const { container } = render(<Loading size='sm' {...props} />)
      expect(container.firstChild).toBeTruthy()
    })

    it('Should render medium loading', () => {
      const { container } = render(<Loading size='md' {...props} />)
      expect(container.firstChild).toBeTruthy()
    })

    it('Should render big loading', () => {
      const { container } = render(<Loading size='bg' {...props} />)
      expect(container.firstChild).toBeTruthy()
    })
  })
})
