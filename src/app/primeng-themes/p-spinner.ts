export const PROGRESS_SPINNER = {
  css: ({ dt }: { dt: (path: string) => string }): string => `
    .p-progressspinner-circle {
      stroke: ${dt('primary.500')} !important;
    }
  `,
};
