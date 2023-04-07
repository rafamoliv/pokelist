import { Story } from '@storybook/react'

import Home from './Home'

export default {
  component: Home,
  title: 'Pages/Home',
  args: {}
}

const Template: Story = (args) => <Home {...args} />

export const Default = Template.bind({})
