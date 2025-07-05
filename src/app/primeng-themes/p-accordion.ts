
export const ACCORDION_THEME = {
  root: {

  },
  css: (): string => `
    .p-accordion {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .p-accordion .p-accordionpanel {
      border: 1px solid #D8DAE5;
      border-radius: 12px;
      overflow: hidden;
    }

    .p-accordion .p-accordionpanel .p-accordionheader {
      border: none;
      color: #000;
    }

    .p-accordion .p-accordionpanel.p-accordionpanel-active .p-accordionheader {
      border-bottom: 1px solid #D8DAE5;
    }

    .p-accordion .p-accordionpanel .p-accordioncontent .p-accordioncontent-content {
      display: flex;
      flex-direction: column;
      padding: 0;
      overflow: hidden;
    }
  `,
};
