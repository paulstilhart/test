// Dark
import BadgesDarkHtml from "./../html/label/dark/badges-label--dark.html";
import BadgesLabelDarkIconLeft from "./../html/label/dark/badges-label--dark--icon--left.html";
import BadgesLabelDarkIconRight from "./../html/label/dark/badges-label--dark--icon--right.html";
import BadgesLabelDarkText from "./../html/label/dark/badges-label--dark--text.html";

// Light
import BadgesLightHtml from "./../html/label/light/badges-label--light.html";
import BadgesLabelLightIconLeft from "./../html/label/light/badges-label--light--icon--left.html";
import BadgesLabelLightIconRight from "./../html/label/light/badges-label--light--icon--right.html";
import BadgesLabelLightText from "./../html/label/light/badges-label--light--text.html";

// Outline
import BadgesOutlineHtml from "./../html/label/outline/badges-label--outline.html";
import BadgesLabelOutlineIconLeft from "./../html/label/outline/badges-label--outline--icon--left.html";
import BadgesLabelOutlineIconRight from "./../html/label/outline/badges-label--outline--icon--right.html";
import BadgesLabelOutlineText from "./../html/label/outline/badges-label--outline--text.html";


const colors = {
    neutral : {
        bg_dark: "bg-neutral-surface-high",
        bg_light: "bg-neutral-surface-md",
        shadow_outline: "shadow-neutral-stroke-md",
    },
    primary : {
        bg_dark: "bg-primary-surface-md",
        bg_light: "bg-primary-surface-xlow",
        shadow_outline: "shadow-primary-stroke-md",
    },
    secondary : {
        bg_dark: "bg-secondary-surface-md",
        bg_light: "bg-secondary-surface-xlow",
        shadow_outline: "shadow-secondary-stroke-md",
    },
    tertiary : {
        bg_dark: "bg-tertiary-blue-xhigh",
        bg_light: "bg-tertiary-blue-xlow",
        shadow_outline: "shadow-tertiary-blue-md",
    },
}

const themes = {
    dark : {
        base : BadgesDarkHtml,
        iconLeft: BadgesLabelDarkIconLeft,
        iconRight: BadgesLabelDarkIconRight,
        text: BadgesLabelDarkText
    },
    light : {
        base : BadgesLightHtml,
        iconLeft: BadgesLabelLightIconLeft,
        iconRight: BadgesLabelLightIconRight,
        text: BadgesLabelLightText
    },
    outline : {
        base : BadgesOutlineHtml,
        iconLeft: BadgesLabelOutlineIconLeft,
        iconRight: BadgesLabelOutlineIconRight,
        text: BadgesLabelOutlineText
    }
}

// Token replacement in html file depending of selected args.
export const  TemplateBadgeLabel = ({
                      label,
                      variant = 'round',
                      size,
                      theme = "dark",
                      color,
                      showIconLeft = true,
                      showIconRight = true,
                  }) => {
    // Replace a placeholder in your HTML string with the label
    let component = themes[theme]['base'];
    if (showIconLeft && !showIconRight ) {
        component = themes[theme]['iconRight'];
    }

    if (!showIconLeft && showIconRight) {
        component = themes[theme]['iconLeft'];
    }

    if (!showIconLeft && !showIconRight) {
        component = themes[theme]['text'];
    }

    component = component.replace(/\$\{label\}/g, label);
    component = component.replace(/\$\{size\}/g, size);
    component = component.replace(/\$\{variant\}/g, variant);
    component = component.replace(/\$\{bg_dark\}/g, colors[color]['bg_dark']);
    component = component.replace(/\$\{bg_light\}/g, colors[color]['bg_light']);
    component = component.replace(/\$\{shadow_outline\}/g, colors[color]['shadow_outline']);
    return component;
};
