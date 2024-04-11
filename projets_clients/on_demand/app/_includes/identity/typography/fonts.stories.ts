import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import fontsHtml from "./html/fonts.html";
// @ts-ignore
import fontsWeightHtml from "./html/fontsWeight.html";
// @ts-ignore
import fontsDisplayHtml from "./html/fontsDisplay.html";




const meta: Meta = {
    title: "Identity/Typography/Fonts",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const fonts: Story = () => {
    // Directly return the HTML templates
    return `${fontsHtml}`;
};
fonts.storyName = 'Fonts';
fonts.parameters = { docs: { storyId: 'fonts' } };

export const fontsWeight: Story = () => {
    // Directly return the HTML templates
    return `${fontsWeightHtml}`;
};
fontsWeight.storyName = 'Fonts Weight';
fontsWeight.parameters = { docs: { storyId: 'fontsWeight' } };


export const fontDisplay: Story = () => {
    // Directly return the HTML templates
    return `${fontsDisplayHtml}`;
};
fontDisplay.storyName = 'Fonts Display';
fontDisplay.parameters = { docs: { storyId: 'fontDisplay' } };