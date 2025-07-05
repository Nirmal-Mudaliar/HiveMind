
export const RADIO_BUTTON_THEME = {
  root: {
    width: '16px',
    height: '16px',
  },
  colorScheme: {
    light: {
      checked: {
        background: '#FFFFFF',
        hover: {
          background: '#FFFFFF',
          border: {
            color: '#D4C1F2',
          },
        },
      },
      icon: {
        checked: {
          color: '#6A33B9',
          hover: {
            color: '#6A33B9',
          },
        },
        size: '10px',
      },
      focus: {
        border: {
          color: '#6A33B9',
        },
        ring: {
          shadow: '0 0 6px rgba(106, 51, 185, 0.3)',
          offset: '0',
          width: '0px',
          style: 'none',
          color: 'initial',
        },
      },
      border: {
        color: '#BEBACE',
      },
    },
  },
  extend: {
    color: '#3D344E',
  },
  css: (): string => `
    .p-radiobutton,
    .p-radiobutton .p-radiobutton-box,
    .p-radiobutton.p-radiobutton-checked .p-radiobutton-box {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      border-radius: 4px;
    }

    .p-radiobutton {
      .p-radiobutton-box {
        background: transparent;
        border: 2px solid #f2f2f2;
        transition: none;
      }

      &.p-radiobutton-checked .p-radiobutton-box {
        background: url(/assets/images/radio-btn.svg) no-repeat center;
        border: 2px solid #f2f2f2;

        &.p-highlight {
          border: 2px solid #f2f2f2;
        }

        .p-radiobutton-icon {
          background: transparent;
          transition-duration: unset;
        }
      }
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
      background: url(/assets/images/radio-btn.svg) no-repeat center;
    }
  `,
};
