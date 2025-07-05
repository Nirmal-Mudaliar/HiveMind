export const POPOVER_THEME = {
  root: {

  },
  colorScheme: {
    light: {

    },
  },
  extend: {
    draggable: {
      background: 'transparent',
      shadow: 'none',
      border: 'none',
      padding: '0px',
    },
  },
  css: ({ dt }: { dt: (path: string) => string }): string => `
    .p-popover .p-popover-content {
      padding: 0;
    }

    .p-popover.draggable-overlay {
      background: ${dt('popover.draggable.background')};
      box-shadow:  ${dt('popover.draggable.shadow')};
      border: ${dt('popover.draggable.border')};
    }

    .p-popover.draggable-overlay .p-popover-content {
      padding: ${dt('popover.draggable.padding')};
    }
  `,
};
