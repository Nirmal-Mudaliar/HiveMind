export const ICONFIELD_THEME = {
  icon: {
    color: '#000',
  },
  css: (): string => `
    .p-iconfield {
      display: flex;
      align-items: center
    }

    .p-iconfield .p-inputicon {
      transform: translateY(-50%);
      margin: 0;
    }

    .p-iconfield .p-inputtext {
      flex: 0 0 100%;
    }
  `,
};
