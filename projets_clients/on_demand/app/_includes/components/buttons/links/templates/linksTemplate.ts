import Links from "./../html/links.html";
import LinksIconLeft from "./../html/links--icon-left.html";
import LinksIconRight from "./../html/links--icon-right.html";
import LinksText from "./../html/links--text.html";


const colors = {
    "primary" : {
        text: 'primary-text-md',
        shadowFocus: 'tertiary-dark-blue-xhigh',
        backdrop: 'transparent',
    },
    "secondary" : {
        text: 'secondary-text-md',
        shadowFocus: 'tertiary-dark-blue-xhigh',
        backdrop: 'transparent',
    },
    "neutral" : {
        text: 'neutral-text-high',
        shadowFocus: 'tertiary-dark-blue-xhigh',
        backdrop: 'transparent',
    },
    "tertiary-blue" : {
        text: 'tertiary-blue-xhigh',
        shadowFocus: 'tertiary-dark-blue-xhigh',
        backdrop: 'transparent',
        },
    "neutral-dark" : {
        text: 'neutral-text-xlow',
        shadowFocus: 'neutral-text-xlow',
        backdrop: 'secondary-surface-xhigh',
    }
}

// Token replacement in html file depending of selected args.
const selectHtmlString = (showIconLeft: boolean, showIconRight: boolean) => {
    if (showIconLeft && showIconRight) return Links;
    if (showIconLeft && !showIconRight) return LinksIconLeft;
    if (!showIconLeft && showIconRight) return LinksIconRight;
    return LinksText;
};

export const TemplateLinks = ({ label, color, size, ShowIconLeft, ShowIconRight }) => {
    let htmlString = selectHtmlString(ShowIconLeft, ShowIconRight);

    htmlString = htmlString.replace(/\$\{text\}/g, colors[color]['text'])
        .replace(/\$\{shadowFocus\}/g, colors[color]['shadowFocus'])
        .replace(/\$\{backdrop\}/g, colors[color]['backdrop'])
        .replace(/\$\{label\}/g, label)
        .replace(/\$\{size\}/g, size);

    return htmlString;
};
