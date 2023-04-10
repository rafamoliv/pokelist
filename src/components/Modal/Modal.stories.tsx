import { Story } from '@storybook/react'
import { t } from 'i18next'

import Modal from './Modal'

export default {
    component: Modal,
    title: 'Components/Modal',
    args: {
        isOpen: true,
        onClose: () => console.log('close'),
        loading: false
    }
}

const Template: Story = (args) => (
    <Modal.Root {...args}>
        <Modal.Body>
            Body
        </Modal.Body>
        <Modal.Footer>
            Footer
        </Modal.Footer>
    </Modal.Root>
)

export const Default = Template.bind({})

const TemplateLoading: Story = (args) => (
    <Modal.Root {...args} />
)

export const Loading = TemplateLoading.bind({})
Loading.args = {
    loading: true
}

const TemplateWithBody: Story = (args) => (
    <Modal.Root isOpen loading={false}>
        <Modal.Body {...args} />
    </Modal.Root>
)

export const WithBody = TemplateWithBody.bind({})
WithBody.args = {
    children: 'Body'
}

const TemplateWithFooter: Story = (args) => (
    <Modal.Root isOpen loading={false}>
        <Modal.Footer {...args} />
    </Modal.Root>
)

export const WithFooter = TemplateWithFooter.bind({})
WithFooter.args = {
    children: 'Footer'
}