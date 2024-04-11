import { Meta, StoryObj } from "@storybook/html";
// @ts-ignore
import spacingBlockHtml from "./html/spacingBlock.html";
// @ts-ignore
import spacingComponentHtml from "./html/spacingComponent.html";
// @ts-ignore
import spacingGapHtml from "./html/spacingGap.html";



const meta: Meta = {
    title: "Identity/Spacing/Default",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const Blocks: Story = () => {
    // Directly return the HTML templates
    return `${spacingBlockHtml}`;
};
Blocks.storyName = 'Blocks';
Blocks.parameters = { docs: { storyId: 'Blocks' } };

export const component: Story = () => {
    // Directly return the HTML templates
    return `${spacingComponentHtml}`;
};
component.storyName = 'component';
component.parameters = { docs: { storyId: 'component' } };

export const gap: Story = () => {
    // Directly return the HTML templates
    return `${spacingGapHtml}`;
};
gap.storyName = 'gap';
gap.parameters = { docs: { storyId: 'gap' } };