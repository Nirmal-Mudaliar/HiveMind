export const LISTBOX_THEME = {
  colorScheme: {
    light: {
      background: '{surface.0}',
      list: {
        padding: '0px',
        gap: '0px',
      },
      option: {
        padding: '6px 6px 6px 16px',
        border: {
          radius: '0px',
        },
        focus: {
          background: '#f5f4f9',
        },
        selected: {
          color: '{text.color}',
          background: '#f7f2ff',
          focus: {
            background: '#f7f2ff',
          },
        },
      },
    },
  },
  css: (): string => `
    .column-list-item {
      display: flex;
      align-items: center;
      gap: 5px;
      width: 100%;
    }
  `,
};
