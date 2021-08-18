import { render, screen } from '@testing-library/react'

import Retangle from '.'

describe('<Retangle />', () => {
  it('should render the heading', () => {
    const { container } = render(<Retangle />)

    expect(screen.getByRole('heading', { name: /Retangle/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
