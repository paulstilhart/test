import { StoryObj, Meta } from '@storybook/html';
import IndicatorBadge from "./html/indicator-badge.html";
import IndicatorBadgeEclipseHtml from "./html/indicator-badge--eclipse.html";
import IndicatorBadgeIconHtml from "./html/indicator-badge--icon.html";
import IndicatorBadgeTextHtml from "./html/indicator-badge--Text.html";
import IndicatorBadgeWithoutTextHtml from "./html/indicator-badge--withoutText.html";
import IndicatorBadgeWithoutTextEclipseHtml from "./html/indicator-badge--withoutText--eclipse.html";
import IndicatorBadgeWithoutTextIconHtml from "./html/indicator-badge--withoutText--icon.html";
import IndicatorBadgeNoneHtml from "./html/indicator-badge--none.html";



const meta: Meta<typeof IndicatorBadge> = {
    component: IndicatorBadge,
    title: 'Components/Indicator Badge',
    //Definition of the available args for the component
    argTypes: {
        mode: {
            control: { type: "select"},
            options: [
                "default",
                "dark",
            ]
        },
        label: {
            control: { type: "text"},
        },
        showText: { type: "boolean"},
        showEclipse: { type: "boolean"},
        showIcon: { type: "boolean"},
    },
};

export default meta;
type Story = StoryObj<typeof IndicatorBadge>;

const variants = {
    default: {
        bgColor: 'bg-success-surface-xlow',
        textColor : 'text-success-text-md',
        fillColor: 'fill-success-icon-md'
    },
    dark: {
        bgColor: 'bg-success-surface-md',
        textColor : 'text-neutral-text-xlow',
        fillColor: 'fill-neutral-icon-xlow'
    }
}

// Token replacement in html file depending of selected args.
const Template = ({ mode, label, showText, showEclipse, showIcon }) => {
    // Replace a placeholder in your HTML string with the label
    let component = IndicatorBadge;

    if (showText) {
        if (!showEclipse && !showIcon) {
            component = IndicatorBadgeTextHtml;
        }
        if (showEclipse && ! showIcon) {
            component = IndicatorBadgeEclipseHtml;
        }
        if (!showEclipse && showIcon) {
            component = IndicatorBadgeIconHtml;
        }
    } else {
        component = IndicatorBadgeNoneHtml;
        if (showEclipse && showIcon) {
            component = IndicatorBadgeWithoutTextHtml;
        }
        if (showEclipse && ! showIcon) {
            component = IndicatorBadgeWithoutTextIconHtml;
        }
        if (!showEclipse && showIcon) {
            component = IndicatorBadgeWithoutTextEclipseHtml;
        }
    }
    component = component.replace(/\$\{bgColor\}/g, variants[mode]['bgColor']);
    component = component.replace(/\$\{textColor\}/g, variants[mode]['textColor']);
    component = component.replace(/\$\{fillColor\}/g, variants[mode]['fillColor']);
    return component.replace(/\$\{label\}/g, label);

};

// Rendering of different variants of the component.
export const Default = Template.bind({});
Default.args = {
    mode: 'default',
    label: 'Indicator text',
    showText: true,
    showEclipse: true,
    showIcon: true
};
