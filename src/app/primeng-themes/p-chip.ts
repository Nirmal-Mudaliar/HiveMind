export const CHIP_THEME = {
  colorScheme: {
    light: {
      background: '#f5f4f9',
      remove: {
        icon: {
          size: '16px',
          focus: {
            ring: {
              shadow: 'none',
              width: '0',
              color: 'transparent',
              offset: '0',
              style: 'none',
            },
          },
        },
      },
      border: {
        radius: '6px',
      },
      gap: '0',
      padding: {
        x: '5px',
        y: '5px',
      },
    },
  },
  css: (): string => `
    .p-chip {
      padding: 3px 6px;
    }
    .p-chip .p-chip-remove-icon {
      margin-left: 8px
    }
    .p-chip .p-chip-remove-icon .chips-cross{
      height: 8px;
      width: 8px;
      margin-left: 5.76px;
    }

    .p-chip:has(.p-chip-remove-icon) {
      padding-inline-end: 6px;
    }
  `,
};
