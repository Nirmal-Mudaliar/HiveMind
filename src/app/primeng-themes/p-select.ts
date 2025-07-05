export const SELECT_THEME = {
  css: (): string => `
    .p-select {
      display: flex;
      align-items: center;
      border-radius: 6px;
      padding: 0;
      height: 30px;

      &.p-disabled {
        background: #F4F6FA;

        .p-inputtext {
          color: #8F95B2;
        }
      }

      .p-select-label {
        display: flex;
        align-items: center;
        height: 100%;
        border: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding: 4px 12px;
      }

      .p-select-trigger {
        height: 10px;
        width: 10px;
        margin-right: 6px;
        background: url(/assets/images/dropdown-trigger.svg) center no-repeat;
        background-size: contain;

        .p-select-trigger-icon,
        .p-icon-wrapper {
          display: none;
        }
      }

      .p-select-clear-icon {
        right: 30px;
        transform: translateY(-50%);
        height: 10px;
        width: 10px;
        margin: 0;
      }
    }
  `,
};
