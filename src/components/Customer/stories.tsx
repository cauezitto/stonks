import { Story, Meta } from '@storybook/react'
import Customer from '.'

export default {
  title: 'Customer',
  component: Customer
} as Meta

export const Default: Story = () => <Customer />
