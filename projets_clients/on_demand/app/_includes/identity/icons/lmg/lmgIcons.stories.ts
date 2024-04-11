import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import avatarHtml from "./html/avatar.html";
// @ts-ignore
import basicHtml from "./html/basic.html";
// @ts-ignore
import numberHtml from "./html/numbers.html";
// @ts-ignore
import socialHtml from "./html/social.html";

const meta: Meta = {
    title: "Identity/Icons/LMG",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const avatar: Story = () => {
    // Directly return the HTML templates
    return `${avatarHtml}`;
};
avatar.storyName = 'Avatar';
avatar.parameters = { docs: { storyId: 'avatar' } };

export const basic: Story = () => {
    // Directly return the HTML templates
    return `${basicHtml}`;
};
basic.storyName = 'Basic';
basic.parameters = { docs: { storyId: 'basic' } };

export const numbers: Story = () => {
    // Directly return the HTML templates
    return `${numberHtml}`;
};
numbers.storyName = 'Numbers';
numbers.parameters = { docs: { storyId: 'numbers' } };

export const social: Story = () => {
    // Directly return the HTML templates
    return `${socialHtml}`;
};
social.storyName = 'Social';
social.parameters = { docs: { storyId: 'social' } };