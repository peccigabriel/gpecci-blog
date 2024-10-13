import { render } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
  it('should render brand name', () => {
    const { getByText } = render(<Navbar />)
    expect(getByText('[gpecci]')).toBeInTheDocument()
  })

  it('should render links', () => {
    const { getByText } = render(<Navbar />)
    expect(getByText('Artigos')).toBeInTheDocument()
    expect(getByText('Sobre')).toBeInTheDocument()
  })

  it('should have a link to articles', () => {
    const { getByText } = render(<Navbar />)
    const link = getByText('Artigos')
    expect(link).toHaveAttribute('href', '/articles')
  })

  it('should have a link to about', () => {
    const { getByText } = render(<Navbar />)
    const link = getByText('Sobre')
    expect(link).toHaveAttribute('href', '/about')
  })
})
