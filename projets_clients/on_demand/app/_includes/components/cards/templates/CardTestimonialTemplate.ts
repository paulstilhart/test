import TestimonialVertical from "./../html/card-testimonial--vertical.html";
import TestimonialHorizontal from "./../html/card-testimonial--horizontal.html";

const variants = {
    horizontal: TestimonialHorizontal,
    vertical: TestimonialVertical,
}

export const TemplateCardTestimonial = ({variant, titre, label1, label2, description}) => {
    let component;
    component = variants[variant];
    // Replace a placeholder in your HTML string with the label
    component = component.replace(/\$\{titre\}/g, titre)
        .replace(/\$\{label1\}/g, label1)
        .replace(/\$\{label2\}/g, label2)
        .replace(/\$\{description\}/g, description)
    return component;
};
