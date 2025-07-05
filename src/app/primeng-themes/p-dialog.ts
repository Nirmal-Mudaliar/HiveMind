export const DIALOG_THEME = {
  colorScheme: {
    light: {
      background: '{surface.0}',
      border: {
        radius: '9px',
        color: '#E6E4ED',
      },
      title: {
        font: {
          size: '16px',
          weight: '600',
        },
      },
      header: {
        padding: '0.45rem 1.125rem',
      },
      content: {
        padding: '0 0.56rem',
      },
    },
  },
  root: {
    footer: {
      padding: '8px 16px',
    },
  },
  css: (): string => `
    .p-dialog {
      border-radius: 12px;
      overflow: hidden;

      .p-dialog-header {
        height: 50px;

        .p-dialog-title {
          color: #6F22A7;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
      }

      .p-dialog-content {
        padding: 0;

        .danger-text {
          color: #FC4768;
        }
      }

      .p-dialog-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: none;
        padding: 10px 14px;

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;

          .p-button-label {
            flex: 0 0 auto;
          }

          &.p-confirm-dialog-reject {
            .p-icon-wrapper {
              display: none;
            }
          }

          &.p-confirm-dialog-accept {
            font-weight: 700;
            background: linear-gradient(110.95deg, #C075FF 0%, #AB52F5 40.59%, #4C06A0 102.75%);
          }
        }
      }

      .danger-btn {
        .p-button {
          background: #FC4768;
          border: 0;

          &:hover {
            background: #ee042f;
            border: 0;
          }
          
          &:active {
            background: #b20323;
            border: 0;
          }
        }
      }
    }
  `,
};
