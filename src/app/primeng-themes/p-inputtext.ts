export const INPUT_TEXT_THEME = {
  css: (): string => `
    .p-inputtext {
      height: 30px;
      padding: 4px 12px;
      border: 1px solid #D8DAE5;
      border-radius: 6px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      color: #1A2139;
      box-shadow: none;
    }

    .p-inputtext:enabled:focus {
      border-color: #CE9DFF;
    }

    .p-inputtext:disabled {
      background-color: #F4F6FA;
      color: #8F95B2;
    }
  `,
};
