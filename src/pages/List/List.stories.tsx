import { Story } from '@storybook/react'

import List from './List'

export default {
  component: List,
  title: 'Pages/List',
  args: {}
}

const Template: Story = (args) => <List {...args} />

export const Default = Template.bind({})
