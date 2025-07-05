export const TABS_THEME = {
  root: {

  },
  colorScheme: {
    light: {
      tabpanel: {
        padding: '0px',
      },
      tablist: {
        border: {
          width: '0 0 2px 0',
          color: '#dee2e6',
        },
      },
      tab: {
        active: {
          background: '#FFFFFF',
        },
        border: {
          width: '0 0 2px 0',
          color: 'transparent transparent #dee2e6 transparent',
        },
        hover: {
          background: '#FFFFFF',
          border: {
            color: '#9ba2aa',
          },
          color: '#6c757d',
        },
        focus: {
          ring: {
            shadow: 'none',
            offset: '0',
            width: '0px',
            style: 'none',
            color: 'initial',
          },
        },
        background: '#FFFFFF',
        color: '#6c757d',
        padding: '1rem',
        margin: '0 0 -2px 0',
      },
    },
  },
  css: (): string => `
    .p-tabs {
      overflow: hidden;
    }

    .p-tabpanels {
      overflow: auto;
    }

    .p-tab {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  `,
};
