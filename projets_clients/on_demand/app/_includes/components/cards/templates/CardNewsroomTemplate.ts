import CardNewsroomHtml from "./../html/card-newsroom.html";
import CardNewsroomPressHtml from "./../html/card-newsroom-press.html";

export const TemplateCardNewsroom = ({ variant, label, category, description, linkText, date, time}) => {
    // Replace a placeholder in your HTML string with the label
    let component = CardNewsroomHtml;
    if (variant === 'press') {
        component =  CardNewsroomPressHtml;
        component = component.replace(/\$\{date\}/g, date);
        component = component.replace(/\$\{time\}/g, time);
    }
    component = component.replace(/\$\{label\}/g, label);
    component = component.replace(/\$\{category\}/g, category);
    component = component.replace(/\$\{description\}/g, description);
    component = component.replace(/\$\{linkText\}/g, linkText);
    return component;
};
