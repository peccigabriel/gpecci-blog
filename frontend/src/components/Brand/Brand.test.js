import { render } from '@testing-library/react'
import Brand from '.'

describe('Brand', () => {
  it('should renders brand name', () => {
    const { getByText } = render(<Brand />)
    expect(getByText('[gpecci]')).toBeInTheDocument()
  })

  it('should applies correct font size', () => {
    const { getByText } = render(<Brand />)
    const brandElement = getByText('[gpecci]')
    expect(brandElement).toHaveStyle('font-size: 4xl')
  })

  it('should applies correct font family', () => {
    const { getByText } = render(<Brand />)
    const brandElement = getByText('[gpecci]')
    expect(brandElement).toHaveStyle('font-family: brand')
  })

  it('should have a link to home', () => {
    const { getByRole } = render(<Brand />)
    const link = getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})
