import CardMessage from "./../html/card-message--tips.html";
import QuotesHtml from "./../html/card-message--quotes.html";

// Token replacement in html file depending of selected args.
export const TemplateCardMessage = ({ text, variant, author = '', description = '' }) => {
    let component = variant === 'quotes' ? QuotesHtml : CardMessage;
    component = component.replace(/\$\{text\}/g, text);

    if (variant === 'quotes') {
        component = component.replace(/\$\{author\}/g, author);
        component = component.replace(/\$\{description\}/g, description);
    }
    return component;
};
