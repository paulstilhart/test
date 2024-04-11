import Pager from "./../html/pagination.html";

const variants = {
    primary: {
        textColor : "primary-text-md",
        textActiveColor : "primary-text-md",
        textHoverColor: "current",
        shadowColor : "primary-stroke-md",
        hover: "primary-surface-xlow",
        active: "primary-surface-low",
        selected: "primary-surface-xhigh"
    },
    secondary: {
        textColor : "secondary-text-md",
        textActiveColor : "secondary-text-md",
        textHoverColor: "current",
        shadowColor : "secondary-stroke-md",
        hover: "secondary-surface-xlow",
        active:"secondary-surface-low",
        selected: "secondary-surface-xhigh"
    },
    tertiary: {
        textColor : "tertiary-blue-xhigh",
        textActiveColor : "neutral-text-xlow",
        textHoverColor: "neutral-text-xhigh",
        shadowColor : "tertiary-blue-xhigh",
        hover: "tertiary-blue-xlow",
        active: "tertiary-blue-xhigh",
        selected: "tertiary-blue-xhigh"
    }
}


// Token replacement in html file depending of selected args.
export const TemplatePager = ({color, buttonTextLeft, buttonTextRight }) => {
    // Replace a placeholder in your HTML string with the label
    let component = Pager;
    component = component.replace(/\$\{hover\}/g, variants[color]['hover']);
    component = component.replace(/\$\{active\}/g, variants[color]['active']);
    component = component.replace(/\$\{selected\}/g, variants[color]['selected']);
    component = component.replace(/\$\{textColor\}/g, variants[color]['textColor']);
    component = component.replace(/\$\{textActiveColor\}/g, variants[color]['textActiveColor']);
    component = component.replace(/\$\{textHoverColor\}/g, variants[color]['textHoverColor']);
    component = component.replace(/\$\{shadowColor\}/g, variants[color]['shadowColor']);
    component = component.replace(/\$\{buttonTextLeft\}/g, buttonTextLeft);
    component = component.replace(/\$\{buttonTextRight\}/g, buttonTextRight);
    return component;
};
