import Article from "./../html/card-article/horizontal/card-article-horizontale--cadre.html";
import ArticleHorizontalSansCadreHtml from "./../html/card-article/horizontal/card-article-horizontale--sans-cadre.html";
import ArticleHorizontalShips from "./../html/card-article/horizontal/card-article-horizontale--ships.html";
import ArticleHorizontalTime from "./../html/card-article/horizontal/card-article-horizontale--time.html";
import ArticleHorizontalLinks from "./../html/card-article/horizontal/card-article-horizontale--links.html";

import ArticleVerticalCardeHtml from "./../html/card-article/vertical/card-article-verticale--cadre.html";
import ArticleVerticalSansCadreHtml from "./../html/card-article/vertical/card-article-verticale--sans-cadre.html";
import ArticleVerticalShips from "./../html/card-article/vertical/card-article-vertical--ships.html";
import ArticleVerticalTime from "./../html/card-article/vertical/card-article-vertical--time.html";
import ArticleVerticalLinks from "./../html/card-article/vertical/card-article-vertical--links.html";

import ArticleWrapper from "./../html/card-article/card-article-wrapper.html";
import ArticleWrapperSansCadre from "./../html/card-article/card-article-sans-cadre-wrapper.html";


import {TemplateBadgeShips} from "../../badges/templates/badgesShipsTemplate";


const variants = {
    horizontal: {
        cadre: Article,
        sansCadre: ArticleHorizontalSansCadreHtml,
        ships: ArticleHorizontalShips,
        time: ArticleHorizontalTime,
        links: ArticleHorizontalLinks,
    },
    vertical: {
        cadre: ArticleVerticalCardeHtml,
        sansCadre: ArticleVerticalSansCadreHtml,
        ships: ArticleVerticalShips,
        time: ArticleVerticalTime,
        links: ArticleVerticalLinks
    }
}

// Token replacement in html file depending of selected args.
export const TemplateCardArticle = ({
                      format = "cadre",
                      variant = "horizontal",
                      ships,
                      title,
                      text,
                      time,
                      link,
                      hideShips = false,
                      hideTime = false,
                      hideLink = false
                  }) => {
    let component;
    component = variants[variant][format];
    // Replace a placeholder in your HTML string with the label
    let shipsComponentHTML = '';
    let TimeComponentHTML = variants[variant]['time'];
    let linksComponent = variants[variant]['links'];
    let shipsHTML = variants[variant]['ships']
    let wrapper = '';
    if (format == "cadre") {
        wrapper = ArticleWrapper
    }
    if (format == "sansCadre") {
        wrapper = ArticleWrapperSansCadre
    }



    shipsComponentHTML = TemplateBadgeShips({
        label: ships,
        size: 'base',
        color: 'tertiary',
        withLink: false,
        hideIcon: false,
        hideCloseButton: true
    });


    shipsHTML = shipsHTML.replace(/\$\{ships\}/g, shipsComponentHTML);
    if (hideShips) {
        shipsHTML = "";
    }
    TimeComponentHTML = TimeComponentHTML.replace(/\$\{time\}/g, time);
    if (hideTime) {
        TimeComponentHTML = "";
    }

    linksComponent = linksComponent.replace(/\$\{link\}/g, link);
    if (hideLink) {
        linksComponent = "";
    }

    wrapper = wrapper.replace(/\$\{timeComponent\}/g, TimeComponentHTML);
    wrapper = wrapper.replace(/\$\{linksComponent\}/g, linksComponent);
     if (hideLink && hideTime) {
         wrapper = '';
     }
    component = component.replace(/\$\{shipsComponent\}/g, shipsHTML);
    component = component.replace(/\$\{title\}/g, title);
    component = component.replace(/\$\{text\}/g, text);
    component = component.replace(/\$\{timeLinksComponent\}/g, wrapper);
    return component;
};
