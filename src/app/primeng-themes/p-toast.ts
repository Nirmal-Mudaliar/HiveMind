export const TOAST_THEME = {
  root: {

  },
  colorScheme: {
    light: {
      success: {
        background: '#43A047',
        color: '#ffffff',
        detail: {
          color: '#ffffff',
        },
        border: {
          color: 'transparent',
        },
      },
      info: {
        background: '#039BE5',
        color: '#ffffff',
        detail: {
          color: '#ffffff',
        },
        border: {
          color: '#027cb7',
        },
      },
      error: {
        background: '#E53935',
        color: '#ffffff',
        detail: {
          color: '#ffffff',
        },
        border: {
          color: 'transparent',
        },
      },
      warn: {
        background: '#FFB300',
        color: '#3D344E',
        detail: {
          color: '#3D344E',
        },
        border: {
          color: 'transparent',
        },
      },
      close: {
        icon: {
          size: '14px',
        },
      },
      content: {
        padding: '1rem',
        gap: '0px',
      },
      text: {
        gap: '0px',
      },
      icon: {
        size: '1.5rem',
      },
      summary: {
        font: {
          size: '12px',
          weight: '700',
        },
      },
      border: {
        width: '0 0 0 4px',
      },
    },
  },
  css: (): string => `
    .p-toast-message {
      box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.3);
    }
      
    .p-toast-close-button {
      margin: 0;
      right: 0;
      color: transparent;
    }
  `,
};
