export const BADGE_THEME = {
  root: {
    dot: {
      display: 'none',
    },
  },
  css: ({ dt }: { dt: (path: string) => string }): string => `
    .p-badge-dot {
      display: ${dt('badge.dot.display')}
    }
  `,
};
