import { render, screen } from '@testing-library/react'

import PaddingWrapper from '.'

describe('<PaddingWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(<PaddingWrapper />)

    expect(screen.getByRole('heading', { name: /PaddingWrapper/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
