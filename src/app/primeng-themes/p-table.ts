export const TABLE_THEME = {
  colorScheme: {
    light: {
      border: {
        color: '#E6E4ED',
      },
      header: {
        background: '{surface.0}',
        border: {
          color: '#E6E4ED',
          width: '0 0 0 0',
        },
        color: '{text.color}',
        padding: '0.6rem',
        cell: {
          background: '#f5f4f9',
          hover: {
            background: '#f5f4f9',
            color: '{text.color}',
          },
          selected: {
            background: '#f5f4f9',
            color: '{highlight.color}',
            border: {
              color: '#E6E4ED',
            },
          },
          border: {
            color: '#E6E4ED',
          },
          color: '{text.color}',
          padding: '0.6rem',
          gap: '0.5rem',
          focus: {
            ring: {
              width: '0px',
              style: 'solid',
              color: '{primary.color}',
              offset: '2px',
              shadow: 'none',
            },
          },
          sm: {
            padding: '0.3rem',
          },
          lg: {
            padding: '0.75rem',
          },
        },
      },
      row: {
        background: '{surface.0}',
        hover: {
          background: '#f5f4f9',
          color: '{text.color}',
        },
        selected: {
          background: '#f7f2ff',
          color: '{text.color}',
        },
        color: '{text.color}',
      },
      body: {
        cell: {
          padding: '0.6rem',
          border: {
            color: 'rgba(0, 0, 0, 0.08)',
            width: '0 0 1px 0',
          },
          selected: {
            border: {
              color: '#E6E4ED',
            },
          },
        },
      },
      footer: {
        background: '{surface.50}',
        border: {
          color: '{surface.200}',
          width: '0 0 1px 0',
        },
        color: '{text.color}',
        padding: '0.6rem',
        cell: {
          padding: '0.6rem',
          background: '{surface.50}',
          border: {
            color: '{surface.200}',
          },
          color: '{text.color}',
        },
      },
      sort: {
        icon: {
          color: '#6c757d',
          hover: {
            color: '#6c757d',
          },
          size: '12px',
        },
      },
      resize: {
        indicator: {
          width: '2px',
          color: '{primary.color}',
        },
      },
      column: {
        resizer: {
          width: '2px',
        },
        title: {
          font: {
            weight: '600',
          },
        },
        footer: {
          font: {
            weight: '600',
          },
        },
      },
      paginator: {
        top: {
          border: {
            color: '{surface.200}',
            width: '0 1px 0 1px',
          },
        },
        bottom: {
          border: {
            color: '{surface.200}',
            width: '0 1px 1px 1px',
          },
        },
      },
    },
  },
  root: {
    transition: {
      duration: '{semantic.transitionDuration}',
    },
    header: {
      background: '#F5F4F9',
      padding: '0.6rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
      cell: {
        padding: '0.6rem',
      },
    },
    footer: {
      padding: '0.6rem',
      sm: {
        padding: '0.5rem',
      },
      lg: {
        padding: '1.25rem',
      },
      cell: {
        padding: '0.6rem',
        sm: {
          padding: '0.5rem',
        },
        lg: {
          padding: '1.25rem',
        },
      },
    },
    body: {
      cell: {
        padding: '0.6rem',
        sm: {
          padding: '0.25rem',
        },
        lg: {
          padding: '0.625rem',
        },
      },
    },
  },
  css: (): string => `
    .p-datatable-table-container p-sorticon .p-icon {
      margin-left: 0.35rem;
      height: 12px;
      width: 12px;
    }
    .p-datatable p-paginator {
      margin-top: auto;
    }

    .p-paginator {
      button {
        font-family: inherit;
      }
    }
  `,
};
