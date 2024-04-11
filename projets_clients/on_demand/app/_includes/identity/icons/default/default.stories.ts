import { Meta, StoryObj } from "@storybook/html";
import { action } from '@storybook/addon-actions';
// @ts-ignore
import arrowsHtml from "./html/arrows.html";
// @ts-ignore
import brandsHtml from "./html/brands.html";
// @ts-ignore
import commerceHtml from "./html/commerce.html";
// @ts-ignore
import communicationHtml from "./html/communication.html";
// @ts-ignore
import designHtml from "./html/design.html";
// @ts-ignore
import developementHtml from "./html/development.html";
// @ts-ignore
import educationHtml from "./html/education.html";
// @ts-ignore
import flagsHtml from "./html/flags.html";
// @ts-ignore
import gamesHtml from "./html/games.html";
// @ts-ignore
import healthWellnessHtml from "./html/healthWellness.html";
// @ts-ignore
import mapsTravelHtml from "./html/mapsTravel.html";
// @ts-ignore
import mathFinanceHtml from "./html/mathFinance.html";
// @ts-ignore
import mediaHtml from "./html/media.html";
// @ts-ignore
import officeEditingHtml from "./html/officeEditing.html";
// @ts-ignore
import peopleHtml from "./html/people.html";
// @ts-ignore
import securityHtml from "./html/securityWarnings.html";
// @ts-ignore
import systemDevicesHtml from "./html/systemDevices.html";
// @ts-ignore
import timeHtml from "./html/time.html";
// @ts-ignore
import weatherNatureHtml from "./html/weatherNature.html";

const meta: Meta = {
    title: "Identity/Icons/Default",
};

export default meta;

type Story = StoryObj<HTMLDivElement>;

export const arrows: Story = () => {
    // Directly return the HTML templates
    const container = document.createElement('div');
     container.innerHTML = `${arrowsHtml}`;

    // Add click event listener to copy the HTML code to the clipboard for the clicked icon
    const icons = container.querySelectorAll('.arrows-icon');
    icons.forEach((icon) => {
        icon.addEventListener('click', async () => {
            const iconHTML = icon.innerHTML;

            try {
                await navigator.clipboard.writeText(iconHTML);
                action('Copy HTML')(iconHTML); // Log the HTML code to the action panel
            } catch (error) {
                console.error('Failed to copy HTML to clipboard:', error);
            }
        });
    });

    return container;

};
arrows.storyName = 'Arrows';
arrows.parameters = { docs: { storyId: 'arrows' } };


// Function to copy text to clipboard
function copyToClipboard(text) {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
}

export const brands: Story = () => {
    // Directly return the HTML templates
    return `${brandsHtml}`;
};
brands.storyName = 'Brands';
brands.parameters = { docs: { storyId: 'brands' } };

export const commerce: Story = () => {
    // Directly return the HTML templates
    return `${commerceHtml}`;
};
commerce.storyName = 'Commerce';
commerce.parameters = { docs: { storyId: 'commerce' } };

export const communication: Story = () => {
    // Directly return the HTML templates
    return `${communicationHtml}`;
};
communication.storyName = 'Communication';
communication.parameters = { docs: { storyId: 'communication' } };

export const design: Story = () => {
    // Directly return the HTML templates
    return `${designHtml}`;
};
design.storyName = 'Design';
design.parameters = { docs: { storyId: 'design' } };

export const developement: Story = () => {
    // Directly return the HTML templates
    return `${developementHtml}`;
};
developement.storyName = 'Developement';
developement.parameters = { docs: { storyId: 'developement' } };

export const education: Story = () => {
    // Directly return the HTML templates
    return `${educationHtml}`;
};
education.storyName = 'Education';
education.parameters = { docs: { storyId: 'education' } };


export const flags: Story = () => {
    // Directly return the HTML templates
    return `${flagsHtml}`;
};
flags.storyName = 'Flags';
flags.parameters = { docs: { storyId: 'flags' } };

export const games: Story = () => {
    // Directly return the HTML templates
    return `${gamesHtml}`;
};
games.storyName = 'Games';
games.parameters = { docs: { storyId: 'game' } };


export const healthWellness: Story = () => {
    // Directly return the HTML templates
    return `${healthWellnessHtml}`;
};
healthWellness.storyName = 'Health & Wellness';
healthWellness.parameters = { docs: { storyId: 'healthWellness' } };


export const mapsTravel: Story = () => {
    // Directly return the HTML templates
    return `${mapsTravelHtml}`;
};
mapsTravel.storyName = 'Maps & Travel';
mapsTravel.parameters = { docs: { storyId: 'mapsTravel' } };

export const mathFinance: Story = () => {
    // Directly return the HTML templates
    return `${mathFinanceHtml}`;
};
mathFinance.storyName = 'Math & Finance';
mathFinance.parameters = { docs: { storyId: 'mathFinance' } };

export const media: Story = () => {
    // Directly return the HTML templates
    return `${mediaHtml}`;
};
media.storyName = 'Media';
media.parameters = { docs: { storyId: 'media' } };

export const officeEditing: Story = () => {
    // Directly return the HTML templates
    return `${officeEditingHtml}`;
};
officeEditing.storyName = 'Office Editing';
officeEditing.parameters = { docs: { storyId: 'officeEditing' } };

export const people: Story = () => {
    // Directly return the HTML templates
    return `${peopleHtml}`;
};
people.storyName = 'People';
people.parameters = { docs: { storyId: 'people' } };


export const securityWarnings: Story = () => {
    // Directly return the HTML templates
    return `${securityHtml}`;
};
securityWarnings.storyName = 'Security & Warnings';
securityWarnings.parameters = { docs: { storyId: 'securityWarnings' } };


export const systemDevice: Story = () => {
    // Directly return the HTML templates
    return `${systemDevicesHtml}`;
};
systemDevice.storyName = 'System & Device';
systemDevice.parameters = { docs: { storyId: 'systemDevice' } };

export const time: Story = () => {
    // Directly return the HTML templates
    return `${timeHtml}`;
};
time.storyName = 'Time';
time.parameters = { docs: { storyId: 'time' } };

export const weatherNature: Story = () => {
    // Directly return the HTML templates
    return `${weatherNatureHtml}`;
};
weatherNature.storyName = 'Weather & Nature';
weatherNature.parameters = { docs: { storyId: 'healthWellness' } };