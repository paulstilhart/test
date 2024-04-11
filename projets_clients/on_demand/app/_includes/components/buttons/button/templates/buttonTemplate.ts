import Button from "./../html/button.html";
import ButtonIcons from "./../html/button--icons.html";
import ButtonIconsRight from "./../html/button--icons-right.html";
import ButtonIconsLeft from "./../html/button--icons-left.html";
import ButtonTextIconsRight from "./../html/button--text-icon--right.html";
import ButtonTextIconsLeft from "./../html/button--text-icon--left.html";
import ButtonText from "./../html/button--text.html";
import ButtonLoading from "./../html/loading/button-loading.html";
import ButtonLoadingRound from "./../html/loading/button-loading--round.html";
// Outline
import ButtonOutline from "./../html/outline/button-outline.html";
import ButtonOutlineIcons from "./../html/outline/button-outline--icons.html";
import ButtonOutlineIconsRight from "./../html/outline/button-outline--icons-right.html";
import ButtonOutlineIconsLeft from "./../html/outline/button-outline--icons-left.html";
import ButtonOutlineTextIconsRight from "./../html/outline/button-outline--text-icon--right.html";
import ButtonOutlineTextIconsLeft from "./../html/outline/button-outline--text-icon--left.html";
import ButtonOutlineText from "./../html/outline/button-outline--text.html";

// Tertiary
import ButtonTertiary from "./../html/tertiary/button-tertiary.html";
import ButtonTertiaryIcons from "./../html/tertiary/button-tertiary--icons.html";
import ButtonTertiaryIconsRight from "./../html/tertiary/button-tertiary--icons-right.html";
import ButtonTertiaryIconsLeft from "./../html/tertiary/button-tertiary--icons-left.html";
import ButtonTertiaryTextIconsRight from "./../html/tertiary/button-tertiary--text-icon--right.html";
import ButtonTertiaryTextIconsLeft from "./../html/tertiary/button-tertiary--text-icon--left.html";
import ButtonTertiaryText from "./../html/tertiary/button-tertiary--text.html";


interface Variant {
    color: string;
    active: string;
    hover: string;
    text: string;
}

const variants: Record<string, Variant> = {
    primary: {
        color: 'primary-surface-md',
        active: 'primary-surface-xhigh',
        hover: 'primary-surface-xhigh',
        text: 'neutral-text-xlow',
    },
    secondary: {
        color: 'secondary-surface-md',
        active: 'secondary-surface-xhigh',
        hover: 'secondary-surface-xhigh',
        text: 'neutral-text-xlow',
    },
};

const getButtonVariant = (
    color: string,
    outline: boolean,
    showIconLeft: boolean,
    showIconRight: boolean,
    showText: boolean,
    state: string = '',
    format: string
): string => {
    if (state === 'loading') {
        return format === "round" ? ButtonLoadingRound : ButtonLoading;
    }

    if (color === 'tertiary') {
        if (showText) {
            if (showIconLeft && showIconRight) return ButtonTertiary;
            if (showIconLeft) return ButtonTertiaryTextIconsLeft;
            if (showIconRight) return ButtonTertiaryTextIconsRight;
            return ButtonTertiaryText;
        } else {
            if (showIconLeft && showIconRight) return ButtonTertiaryIcons;
            if (showIconLeft) return ButtonTertiaryIconsLeft;
            if (showIconRight) return ButtonTertiaryIconsRight;
            return "";
        }
    }

    if (outline) {
        if (showText) {
            if (showIconLeft && showIconRight) return ButtonOutline;
            if (showIconLeft) return ButtonOutlineTextIconsLeft;
            if (showIconRight) return ButtonOutlineTextIconsRight;
            return ButtonOutlineText;
        } else {
            if (showIconLeft && showIconRight) return ButtonOutlineIcons;
            if (showIconLeft) return ButtonOutlineIconsLeft;
            if (showIconRight) return ButtonOutlineIconsRight;
            return "";
        }
    }

    if (showText) {
        if (showIconLeft && showIconRight) return Button;
        if (showIconLeft) return ButtonTextIconsLeft;
        if (showIconRight) return ButtonTextIconsRight;
        return ButtonText;
    } else {
        if (showIconLeft && showIconRight) return ButtonIcons;
        if (showIconLeft) return ButtonIconsLeft;
        if (showIconRight) return ButtonIconsRight;
        return "";
    }
};

const applyVariantStyles = (component: string, color: string, outline: boolean): string => {
    if (color !== 'tertiary' && !outline) {
        Object.keys(variants[color]).forEach(key => {
            component = component.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), variants[color][key as keyof Variant]);
        });
    }

    if (outline) {
        component = component.replace(/\$\{color\}/g, color);
    }

    return component;
};

export const TemplateButton = ({
                      label = 'Button',
                      color = 'primary',
                      size = 'base',
                      outline = false,
                      ShowIconLeft = true,
                      ShowIconRight = true,
                      showText = true,
                      state = '',
                      format
                  }): string => {
    if (state === "default") {
        state = '';
    }

    let component = getButtonVariant(color, outline, ShowIconLeft, ShowIconRight, showText, state, format);
    component = applyVariantStyles(component, color, outline);

    component = component.replace(/\$\{state\}/g, state);
    component = component.replace(/\$\{size\}/g, size);
    component = component.replace(/\$\{label\}/g, label);

    return component;
};