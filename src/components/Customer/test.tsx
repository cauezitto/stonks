import { render, screen } from '@testing-library/react'

import Customer from '.'

describe('<Customer />', () => {
  it('should render the heading', () => {
    const { container } = render(<Customer />)

    expect(screen.getByRole('heading', { name: /Customer/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
