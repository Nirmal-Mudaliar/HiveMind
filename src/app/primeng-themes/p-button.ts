export const BUTTON_THEME = {
  colorScheme: {
    light: {
      root: {
        primary: {
          background: '{primary.color}',
          color: '{surface.0}',
        },
        secondary: {
          background: '{surface.0}',
          color: '{text.color}',
          border: {
            color: '#C1C4D6',
          },
          hover: {
            background: '#f5f4f9',
            border: {
              color: '#C1C4D6',
            },
          },
        },
      },
      outlined: {
        primary: {
          background: '{surface.0}',
          color: '{primary.color}',
          border: {
            color: '#C1C4D6',
          },
          hover: {
            background: '#f0e6ff',
          },
        },
        secondary: {
          border: {
            color: '{surface.400}',
          },
          color: '{surface.800}',
        },
      },
      badge: {
        size: '12px',
      },
      text: {
        primary: {
          hover: {
            background: 'rgba(106, 51, 185, 0.04)',
          },
        },
        secondary: {
          color: '#6c757d',
          hover: {
            color: '#3d344e',
            background: '#f5f4f9',
          },
        },
      },
    },
  },
  root: {
    padding: {
      x: '12px',
      y: '5.12px',
    },
    focus: {
      ring: {
        width: '0px',
        style: 'none',
        color: 'transparent',
        offset: '0',
        shadow: 'none',
      },
    },
    icon: {
      only: {
        width: '1.65rem',
      },
    },
    rounded: {
      border: {
        radius: '32px',
      },
    },
    gap: '0',
    transition: {
      duration: '0.5s',
    },
    label: {
      font: {
        weight: '400',
      },
    },
    sm: {
      padding: {
        x: '0px',
        y: '0px',
      },
      font: {
        size: '12px',
      },
    },
  },
  extend: {
    outlined: {
      hover: {
        border: {
          color: '#D4C1F2',
        },
      },
    },
    badge: {
      leftMargin: '8px',
      color: '#6a33b9',
      bgColor: '{surface.0}',
    },
  },
  css: ({ dt }: { dt: (path: string) => string }): string => `
    .p-button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      width: 100%;
      height: 100%;
    }

    .p-button:disabled {
      background: #e6e4ed;
      opacity: 1;
      border-color: #e6e4ed;
      color: #fff;
    }

    .p-button .p-button-icon-left {
      margin-right: .5rem;
    }

    .p-button-outlined:not(:disabled):hover {
      border-color: ${dt('button.outlined.hover.border.color')};
    }

    .p-button .p-badge {
      margin-left: ${dt('button.badge.leftMargin')};
      color: ${dt('button.badge.color')};
      background-color: ${dt('button.badge.bgColor')};
    }
  `,
};
