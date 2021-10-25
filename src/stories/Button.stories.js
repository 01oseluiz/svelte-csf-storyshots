import Button from "./Button.svelte";

import { action } from '@storybook/addon-actions';

export default {
    title: 'Example/Button-js',
    component: Button,
    argTypes: {
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        label: { control: 'text' },
        size: {
        control: {
            type: 'select',
            options: ['small', 'medium', 'large']
        },
        },
        backgroundColor: { control: 'color' }
    }
}

const Template = (_args) => {
    const ret = ({ onClick, ...props }) => ({
        props,
        on: {
            click: action('onClick'),
        }
    })
    ret.args = _args
    return ret
}

export const Primary = Template({
    primary: true,
    label: 'Button',
})

export const Secondary = Template({
    label: "Button",
})

export const Large = Template({
    size: "large",
    label: "Button",
})

export const Small = Template({
    size: "small",
    label: "Button",
})