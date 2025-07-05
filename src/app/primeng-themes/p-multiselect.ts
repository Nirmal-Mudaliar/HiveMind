export const MULTISELECT_THEME = {
  colorScheme: {
    light: {
      list: {
        gap: '0px',
        padding: '0px',
        header: {
          padding: '0.5rem 0.8rem',
        },
      },
      dropdown: {
        width: '1.5rem',
      },
      option: {
        padding: '0.5rem 0.8rem',
        border: {
          radius: '0px',
        },
        focus: {
          background: '#F5F4F9',
        },
        selected: {
          background: 'transparent',
          focus: {
            background: '#F5F4F9',
          },
        },
      },
      clear: {
        icon: {
          color: '{text.color}',
        },
      },
    },
  },
  css: (): string => `
    .p-multiselect-label-container {
      display: flex;
    }
    .p-multiselect-label {
      gap: 0px;
    }
    .p-multiselect-header {
      background: #F5F4F9;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .p-multiselect-items-wrapper {
      max-height: 18.8rem !important;
    }
  `,
};
