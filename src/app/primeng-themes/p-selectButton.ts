export const SELECT_BUTTON_THEME = {
  root: {
  },
  colorScheme: {
    light: {
    },
  },
  css: (): string => `
    .p-togglebutton:not(:first-of-type) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .p-togglebutton:not(:last-of-type) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-color: transparent;
    }

    .p-togglebutton:not(:first-of-type), .p-togglebutton:not(:last-of-type) {
      border-width: 1px 1px 1px 1px;
    }
  `,
};
