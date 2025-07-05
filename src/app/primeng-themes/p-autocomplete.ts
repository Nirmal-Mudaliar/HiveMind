export const AUTOCOMPLETE_THEME = {
  colorScheme: {
    light: {
      focus: {
        ring: {
          width: '0px',
          style: 'none',
          color: 'transparent',
          offset: '0',
          shadow: 'none',
        },
        border: {
          color: '#E6E4ED',
        },
      },
      chip: {
        border: {
          radius: '6px',
        },
      },
    },
  },
  css: (): string => `
    .p-autocomplete .p-autocomplete-input-multiple input {
      border: none;
      font-size: 12px;
    }

    .p-autocomplete .p-autocomplete-input-multiple {
      min-height: 32px;
    }

    .p-autocomplete .p-autocomplete-input-multiple .p-autocomplete-chip-item {
      display: inline-flex;
    }

    .p-autocomplete .p-autocomplete-input-multiple .p-autocomplete-chip-item:not(:has(.p-chip)) {
      padding: 3px 6px;
      background: #f5f4f9;
      border-radius: 6px;
    }

    .p-autocomplete .p-autocomplete-input-multiple .p-autocomplete-chip-item:not(:has(.p-chip)) .p-chips-token-label {
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      white-space: nowrap;
    }

    .p-autocomplete .p-autocomplete-input-multiple .p-autocomplete-chip-item:not(:has(.p-chip)) span:not(.p-chips-token-label) {
      margin-left: 8px;
    }

    .p-autocomplete .p-autocomplete-input-multiple .p-autocomplete-chip-item .chips-cross {
      height: 0.5rem;
      width: 0.5rem;
      margin-left: 0.3rem;
    }

    .p-autocomplete-chip.p-chip {
      padding-block-start: 3px;
      padding-block-end: 3px;
    }

  `,
};
