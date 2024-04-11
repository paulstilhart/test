import { StoryObj, Meta } from '@storybook/html';
import {TemplateButton} from "./templates/buttonTemplate";

let Button
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Buttons/Button',
  argTypes: {
    label: {
      control: { type: "text"}
    },
    showText: {
      control: { type: "boolean"}
    },
    color: {
      control: { type: "select"},
      options: [
        "primary",
        "secondary",
        "tertiary",
      ],
      table: {
        disable: true,
      }
    },
    size: {
      control: { type: "select"},
      options: [
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
      ]
    },
    outline: {
      control: { type: "boolean"}
    },
    ShowIconLeft: {
      control: { type: "boolean"}
    },
    ShowIconRight: {
      control: { type: "boolean"}
    },
    state: {
      control: {type: "select"},
      options: [
        "default",
        "active",
        "disabled",
        "success",
      ]
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Rendering of different variants of the component.
export const Primary = TemplateButton.bind({});
Primary.args = {
  label: 'Button',
  color: 'primary',
  size: 'base',
  outline: false,
  ShowIconLeft : true,
  ShowIconRight : true,
  showText : true,
};

export const Secondary = TemplateButton.bind({});
Secondary.args = {
  label: 'Button',
  color: 'secondary',
  size: 'base',
  outline: false,
  ShowIconLeft : true,
  ShowIconRight : true,
  showText : true
};

export const Tertiary = TemplateButton.bind({});
Tertiary.argTypes = {
  outline: {
    table : {
      disable : true
    }
  }
};
Tertiary.args = {
  label: 'Button',
  color: 'tertiary',
  size: 'base',
  outline: false,
  ShowIconLeft : true,
  ShowIconRight : true,
  showText : true
};

export const Loading = TemplateButton.bind({});
Loading.argTypes = {
  outline: {
    table : {
      disable : true
    },
  },
  label: {
    control: { type: "text"},
    table : {
      disable : true
    },
  },
  showText: {
    control: { type: "boolean"},
    table : {
      disable : true
    },
  },
  color: {
    control: { type: "select"},
    options: [
      "primary",
      "secondary",
      "tertiary",
    ],
    table: {
      disable: true,
    }
  },
  size: {
    control: { type: "select"},
    options: [
      "xs",
      "sm",
      "base",
      "lg",
      "xl",
    ],
    description: "Size 'xl' is not available when format is 'default'.",
  },
  ShowIconLeft: {
    control: { type: "boolean"},
    table : {
      disable : true
    },
  },
  ShowIconRight: {
    control: { type: "boolean"},
    table : {
      disable : true
    },
  },
  state: {
    control: {type: "select"},
    options: [
      "default",
      "active",
      "disabled",
      "success",
      "loading"
    ],
    table : {
      disable : true
    },
  },
  format : {
    control : { type : "select"},
    options: [
      "default",
      "round",
    ]
  }
};
Loading.args = {
  size: 'base',
  format: "default",
  state: "loading"
};