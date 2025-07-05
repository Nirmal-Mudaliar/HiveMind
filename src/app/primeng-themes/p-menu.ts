export const MENU_THEME = {
  colorScheme: {
    light: {
      background: '{surface.0}',
      list: {
        padding: '0.25rem 0',
        gap: '0px',
      },
      item: {
        padding: '.75rem 1rem',
        border: {
          radius: '0px',
        },
        focus: {
          background: '#f5f4f9',
        },
        icon: {
          color: '#6c757d',
          focus: {
            color: '#6c757d',
          },
        },
      },
    },
  },
  css: (): string => `
    .p-menu {
      .p-menu-list {
        .p-menuitem {
          &.menu-item-danger {
            .p-menuitem-icon,
            .p-menuitem-text {
              color: red;
            }
          }
        }

        .p-menuitem-separator {
          width: 100%;
          height: 1px;
          background-color: lightgray;
        }
      }
    }
  `,
};
