export const PANEL_THEME = {
  colorScheme: {
    light: {
      toggleable: {
        header: {
          padding: '.5rem 1.125rem',
        },
      },
      header: {
        padding: '0.45rem 1.125rem',
        background: '{surface.0}',
      },
      content: {
        padding: '20px',
      },
      footer: {
        padding: '8px 16px',
      },
    },
  },
  css: (): string => `
    .p-panel-header {
      position: relative;
      box-shadow: 0px 3px 6px rgba(23, 40, 74, 0.05);
    }

    .p-panel-header .dialog-title {
      display: flex;
      align-items: center;
      margin: 0;
    }

    .p-panel-header .dialog-title .pi {
      font-size: 16px;
    }

    .p-panel-content {
      border-radius: 0;
      background: #f5f4f9;
    }

    .p-panel-footer {
      display: flex;
      justify-content: flex-end;
    }

    .p-panel-footer:empty {
      display: none;
    }

    .p-panel-footer .footer-button {
      min-width: 7.5rem;
      padding: 0.5rem;
    }

    .panel-close-button {
      padding: 0.4rem;
    }
  `,
};
