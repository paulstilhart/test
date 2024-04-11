import BadgesChips from "./../html/ships/badges-chips.html";
import BadgesChipsText from "./../html/ships/badges-chips--text.html";
import BadgesChipsTextButton from "./../html/ships/badges-chips--text--button.html";
import BadgesChipsTextIcon from "./../html/ships/badges-chips--text--icon.html";
import LinkBadgesChips from "./../html/ships/badges-chips--link.html";
import LinkBadgesChipsText from "./../html/ships/badges-chips--text--link.html";
import LinkBadgesChipsTextButton from "./../html/ships/badges-chips--text--button--link.html";
import LinkBadgesChipsTextIcon from "./../html/ships/badges-chips--text--icon--link.html";
import { useEffect } from '@storybook/client-api';
import { initFlowbite } from 'flowbite';

const colors = {
    primary : {
        active: "primary-surface-xlow",
        hover: "primary-surface-md",
        checked: "primary-surface-xlow",
        fill: "primary-icon-md"
    },
    secondary : {
        active: "secondary-surface-xlow",
        hover: "secondary-surface-md",
        checked: "secondary-surface-xlow",
        fill: "secondary-icon-md"
    },
    tertiary : {
        active: "tertiary-blue-xlow",
        hover: "tertiary-blue-xhigh",
        checked: "tertiary-blue-xlow",
        fill: "tertiary-blue-xhigh"
    },
}

// Token replacement in html file depending of selected args.
export const TemplateBadgeShips = ({ label, size, color,withLink, hideIcon= false, hideCloseButton = false }) => {
    // Replace a placeholder in your HTML string with the label
    let component = hideCloseButton
        ? (withLink ? hideIcon ? LinkBadgesChipsText : LinkBadgesChipsTextIcon : hideIcon ? BadgesChipsText : BadgesChipsTextIcon )
        : (withLink ? hideIcon ? LinkBadgesChipsTextButton : LinkBadgesChips : hideIcon ? BadgesChipsTextButton : BadgesChips);
    // let addLink = withLink ? 'a' :'span';
    useEffect(() => {
        // Initialize flowbite for close
        initFlowbite();
    }, [label, size, color, withLink, hideIcon, hideCloseButton]);

    component = component.replace(/\$\{label\}/g, label);
    component = component.replace(/\$\{size\}/g, size);
    component = component.replace(/\$\{active\}/g, colors[color]['active']);
    component = component.replace(/\$\{hover\}/g, colors[color]['hover']);
    component = component.replace(/\$\{checked\}/g, colors[color]['checked']);
    component = component.replace(/\$\{fill\}/g, colors[color]['fill']);
    component = component.replace(/\$\{color\}/g, color);
    return component;
};
