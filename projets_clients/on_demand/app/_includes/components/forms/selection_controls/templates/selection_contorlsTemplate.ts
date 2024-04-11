// Checkbox
import CheckboxHtml  from './../html/checkbox/checkbox.html';
import CheckboxDescription  from './../html/checkbox/checkbox--description.html';
import CheckboxBackground from './../html/checkbox/checkbox--background.html';
import CheckboxBackgroundDescription from './../html/checkbox/checkbox--background--description.html';
import CheckboxOnly from './../html/checkbox/checkbox--only.html';
// Radio
import RadioHtml  from './../html/radio/radio.html';
import RadioButton  from './../html/radio/radio--button.html';
import RadioDescription  from './../html/radio/radio--description.html';
import RadioBackground from './../html/radio/radio--background.html';
import RadioBackgroundDescription from './../html/radio/radio--background--description.html';
import RadioOnly from './../html/radio/radio--only.html';

// Toggle
import ToggleHtml  from './../html/toggle/toggle.html';
import ToggleDescription  from './../html/toggle/toggle--description.html';
import ToggleBackground from './../html/toggle/toggle--background.html';
import ToggleBackgroundDescription from './../html/toggle/toggle--background--description.html';
import ToggleOnly from './../html/toggle/toggle--only.html';

const variants = {
    checkbox: {
        hideDescription :  CheckboxHtml,
        showDescription :  CheckboxDescription,
        backgroundHideDescription: CheckboxBackground,
        backgroundShowDescription : CheckboxBackgroundDescription,
        input: CheckboxOnly
    },
    radio: {
        hideDescription :  RadioHtml,
        showDescription :  RadioDescription,
        backgroundHideDescription: RadioBackground,
        backgroundShowDescription : RadioBackgroundDescription,
        input: RadioOnly
    },
    toggle: {
        hideDescription :  ToggleHtml,
        showDescription :  ToggleDescription,
        backgroundHideDescription: ToggleBackground,
        backgroundShowDescription : ToggleBackgroundDescription,
        input: ToggleOnly
    }
}

// Token replacement in html file depending of selected args.
export const TemplateSelectionControl = ({
                      variant = "checkbox",
                      hideBackground = false,
                      hideDescription = false,
                      state = 'default',
                      label = "Write label text here",
                      description = "Some helper text",
                      isRadioButton = false,
                      inputOnly = false
                  }) => {
    // Determine the options key based on hideBackground and hideDescription
    const optionsKey = hideDescription
        ? (hideBackground ? 'hideDescription' : 'backgroundHideDescription')
        : (hideBackground ? 'showDescription' : 'backgroundShowDescription');

    // Assign the appropriate component
    let component = (variant === "radio" && isRadioButton)
        ? RadioButton
        : variants[variant][optionsKey];

    if (inputOnly) {
        component = variants[variant]['input'];
    }
    // Replace placeholders for label and state
    component = component.replace(/\$\{state\}/g, state).replace(/\$\{label\}/g, label);;

    // Replace description if hideDescription is false and not a RadioButton
    if (!hideDescription) {
        component = component.replace(/\$\{description\}/g, description);
    }

    return component;
};
