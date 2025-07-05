export const TOGGLE_BUTTON_THEME = {
  root: {
  },
  colorScheme: {
    light: {
      checked: {
        background: '#F9F3FF',
        color: '#9935E8',
        border: {
          color: '#C485FB',
        },
      },
      content: {
        checked: {
          background: 'transparent',
          shadow: 'none',
        },
      },
      font: {
        weight: 'normal',
      },
      background: '#FFFFFF',
      color: '#3D344E',
      border: {
        color: '#CED4DA',
        radius: '6px',
      },
      padding: '5.12px 12px',
    },
    extend: {
      content: {
        padding: '0px',
        font: {
          size: '12px',
        },
      },
    },
  },
  css: ({ dt }: { dt: (path: string) => string }): string => `
    .p-togglebutton-content {
      padding: ${dt('togglebutton.content.padding')};
      font-size: ${dt('togglebutton.content.font.size')};
    }

    .p-togglebutton-content .p-togglebutton-label {
      font-size: ${dt('togglebutton.content.font.size')};
    }
  `,
};
