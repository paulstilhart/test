import EditoAgency from "./../html/card-edito-agency.html";


// Token replacement in html file depending of selected args.
export const TemplateCardEditoAgency = ({ title, address, link }) => {
    let component = EditoAgency;
    component = component.replace(/\$\{title\}/g, title)
        .replace(/\$\{address\}/g, address)
        .replace(/\$\{link\}/g, link);
    return component
};

