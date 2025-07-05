
export const CHECKBOX_THEME = {
  css: (): string => `
    .p-checkbox {
      .p-checkbox-box {
        border-radius: 4px;
        border-color: #E6E8F0;
        background: #F6F6FB;
        box-shadow: none;

        &.p-disabled {
          background: #F4F6FA;
        }

        .p-iconwrapper {
          width: 10px;
          height: 7px;
          background: url(/assets/images/checkbox-icon.svg) no-repeat center;

          svg {
            display: none;
          }
        }
      }

      &.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: #E6E8F0;
        background: #F6F6FB;
      }
    }
  `,
};
