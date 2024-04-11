import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import samllLogoHtml from "./html/darkSmallLogo.html";
// @ts-ignore
import verticalLogoHtml from "./html/darkVerticalLogo.html";
// @ts-ignore
import horizontalLogoHtml from "./html/darkHorizontalLogo.html";

const meta: Meta = {
    title: "Identity/Logo/LMG/Sombre",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const smallLogoLmg: Story = () => {
    // Directly return the HTML templates
    return `${samllLogoHtml}`;
};
smallLogoLmg.storyName = 'Court';
smallLogoLmg.parameters = { docs: { storyId: 'smallLogoLmg' } };


export const horizontalLogoLmg: Story = () => {
    // Directly return the HTML templates
    return `${horizontalLogoHtml}`;
};
horizontalLogoLmg.storyName = 'Horizontal';
horizontalLogoLmg.parameters = { docs: { storyId: 'smallLogoLmg' } };


export const verticalLogoLmg: Story = () => {
    // Directly return the HTML templates
    return `${verticalLogoHtml}`;
};
verticalLogoLmg.storyName = 'Vertical';
verticalLogoLmg.parameters = { docs: { storyId: 'smallLogoLmg' } };