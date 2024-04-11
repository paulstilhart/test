import Category from "./../html/card-category.html";
import Image from "./../html/card-category--image.html";

const colors = {
    primary : {
        bg_color: "[&:hover>div]:bg-primary-surface-md",
        icon_color: "text-primary-icon-md",

    },
    tertiary : {
        bg_color: "[&:hover>div]:bg-tertiary-blue-xhigh",
        icon_color: "text-tertiary-blue-xhigh",
    },
}

// Token replacement in html file depending of selected args.
export const TemplateCardCategory = ({color, titre, hideImage = false}) => {
    // Replace the placeholder with the provided color
    let component = Category;
    let imagecomponent = Image;
    if (hideImage) {
        imagecomponent = '';
    }
    component = component.replace(/\$\{image\}/g, imagecomponent);
    component = component.replace(/\$\{titre\}/g, titre);
    component = component.replace(/\$\{bg_color\}/g, colors[color]['bg_color']);
    component = component.replace(/\$\{icon_color\}/g, colors[color]['icon_color']);
    return component
};
