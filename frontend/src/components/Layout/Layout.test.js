import { render } from '@testing-library/react'
import Layout from '.'

describe('Layout', () => {
  it('should render children', () => {
    const { getByText } = render(<Layout>Children</Layout>)
    expect(getByText('Children')).toBeInTheDocument()
  })

  it('should render navbar', () => {
    const { getByRole } = render(<Layout />)
    const navbar = getByRole('navigation')
    expect(navbar).toBeInTheDocument()
  })
})
