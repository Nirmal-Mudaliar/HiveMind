/* eslint-disable @typescript-eslint/naming-convention */
import { ACCORDION_THEME } from './primeng-themes/p-accordion';
import { AUTOCOMPLETE_THEME } from './primeng-themes/p-autocomplete';
import { BADGE_THEME } from './primeng-themes/p-badge';
import { BUTTON_THEME } from './primeng-themes/p-button';
import { CAROUSEL_THEME } from './primeng-themes/p-carousel';
import { CHECKBOX_THEME } from './primeng-themes/p-checkbox';
import { CHIP_THEME } from './primeng-themes/p-chip';
import { DIALOG_THEME } from './primeng-themes/p-dialog';
import { ICONFIELD_THEME } from './primeng-themes/p-iconfield';
import { INPUT_NUMBER_THEME } from './primeng-themes/p-inputnumber';
import { INPUT_TEXT_THEME } from './primeng-themes/p-inputtext';
import { LISTBOX_THEME } from './primeng-themes/p-listbox';
import { MENU_THEME } from './primeng-themes/p-menu';
import { MULTISELECT_THEME } from './primeng-themes/p-multiselect';
import { PAGINATOR_THEME } from './primeng-themes/p-paginator';
import { PANEL_THEME } from './primeng-themes/p-panel';
import { POPOVER_THEME } from './primeng-themes/p-popover';
import { RADIO_BUTTON_THEME } from './primeng-themes/p-radioButton';
import { RATING_THEME } from './primeng-themes/p-rating';
import { SELECT_THEME } from './primeng-themes/p-select';
import { SELECT_BUTTON_THEME } from './primeng-themes/p-selectButton';
import { PROGRESS_SPINNER } from './primeng-themes/p-spinner';
import { TABLE_THEME } from './primeng-themes/p-table';
import { TABS_THEME } from './primeng-themes/p-tabs';
import { TOAST_THEME } from './primeng-themes/p-toast';
import { TOGGLE_BUTTON_THEME } from './primeng-themes/p-toggleButton';
import { TOGGLE_SWITCH_THEME } from './primeng-themes/p-toggleSwitch';
import { TOOLTIP_THEME } from './primeng-themes/p-tooltip';

import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const PRIME_NG_THEME = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '5px',
      lg: '8px',
      xl: '12px',
    },
    blue: {
      50: '#f4fafe',
      100: '#cae6fc',
      200: '#a0d2fa',
      300: '#75bef8',
      400: '#4baaf5',
      500: '#2196f3',
      600: '#1c80cf',
      700: '#1769aa',
      800: '#125386',
      900: '#0d3c61',
    },
    green: {
      50: '#f6fbf6',
      100: '#d4ecd5',
      200: '#b2ddb4',
      300: '#90cd93',
      400: '#6ebe71',
      500: '#4caf50',
      600: '#419544',
      700: '#357b38',
      800: '#2a602c',
      900: '#1e4620',
    },
    yellow: {
      50: '#fffcf5',
      100: '#fef0cd',
      200: '#fde4a5',
      300: '#fdd87d',
      400: '#fccc55',
      500: '#fbc02d',
      600: '#d5a326',
      700: '#b08620',
      800: '#8a6a19',
      900: '#644d12',
    },
    cyan: {
      50: '#f2fcfd',
      100: '#c2eff5',
      200: '#91e2ed',
      300: '#61d5e4',
      400: '#30c9dc',
      500: '#00bcd4',
      600: '#00a0b4',
      700: '#008494',
      800: '#006775',
      900: '#004b55',
    },
    pink: {
      50: '#fef4f7',
      100: '#fac9da',
      200: '#f69ebc',
      300: '#f1749e',
      400: '#ed4981',
      500: '#e91e63',
      600: '#c61a54',
      700: '#a31545',
      800: '#801136',
      900: '#5d0c28',
    },
    indigo: {
      50: '#f5f6fb',
      100: '#d1d5ed',
      200: '#acb4df',
      300: '#8893d1',
      400: '#6372c3',
      500: '#3f51b5',
      600: '#36459a',
      700: '#2c397f',
      800: '#232d64',
      900: '#192048',
    },
    teal: {
      50: '#f2faf9',
      100: '#c2e6e2',
      200: '#91d2cc',
      300: '#61beb5',
      400: '#30aa9f',
      500: '#009688',
      600: '#008074',
      700: '#00695f',
      800: '#00534b',
      900: '#003c36',
    },
    orange: {
      50: '#fff8f2',
      100: '#fde0c2',
      200: '#fbc791',
      300: '#f9ae61',
      400: '#f79530',
      500: '#f57c00',
      600: '#d06900',
      700: '#ac5700',
      800: '#874400',
      900: '#623200',
    },
    bluegray: {
      50: '#f7f9f9',
      100: '#d9e0e3',
      200: '#bbc7cd',
      300: '#9caeb7',
      400: '#7e96a1',
      500: '#607d8b',
      600: '#526a76',
      700: '#435861',
      800: '#35454c',
      900: '#263238',
    },
    purple: {
      50: '#faf4fb',
      100: '#e7cbec',
      200: '#d4a2dd',
      300: '#c279ce',
      400: '#af50bf',
      500: '#9c27b0',
      600: '#852196',
      700: '#6d1b7b',
      800: '#561561',
      900: '#3e1046',
    },
  },
  semantic: {
    transitionDuration: '0.2s',
    focusRing: {
      width: '0px',
      style: 'none',
      color: 'intial',
      offset: '0px',
      shadow: 'none',
    },
    disabledOpacity: '0.8',
    iconSize: '14px',
    anchorGutter: '2px',
    primary: {
      50: '#f8f5fc',
      100: '#dbceee',
      200: '#bfa7e1',
      300: '#a381d4',
      400: '#AB52F5',
      500: '#6a33b9',
      600: '#5a2b9d',
      700: '#4a2482',
      800: '#3a1c66',
      900: '#2a144a',
      950: '#1b0d2e',
    },
    formField: {
      paddingX: '8px',
      paddingY: '8px',
      height: '26px',
      borderRadius: '{border.radius.md}',
      focusRing: {
        width: '0',
        style: 'none',
        color: 'transparent',
        offset: '0',
        shadow: 'none',
      },
      transitionDuration: '{transition.duration}',
    },
    list: {
      padding: '0.25rem 0.25rem',
      gap: '2px',
      header: {
        padding: '0.5rem 1rem 0.25rem 1rem',
      },
      option: {
        padding: '0.5rem 0.75rem',
        borderRadius: '{border.radius.sm}',
      },
      optionGroup: {
        padding: '0.5rem 0.75rem',
        fontWeight: '600',
      },
    },
    content: {
      borderRadius: '{border.radius.md}',
    },
    mask: {
      transitionDuration: '0.15s',
    },
    navigation: {
      list: {
        padding: '0.25rem 0.25rem',
        gap: '2px',
      },
      item: {
        padding: '0.5rem 0.75rem',
        borderRadius: '{border.radius.sm}',
        gap: '0.5rem',
      },
      submenuLabel: {
        padding: '0.5rem 0.75rem',
        fontWeight: '600',
      },
      submenuIcon: {
        size: '0.875rem',
      },
    },
    overlay: {
      select: {
        borderRadius: '{border.radius.md}',
        shadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      popover: {
        borderRadius: '{border.radius.md}',
        padding: '0.75rem',
        shadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      modal: {
        borderRadius: '{border.radius.xl}',
        padding: '1.25rem',
        shadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      navigation: {
        shadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#FAFBFF',
          100: '#F4F6FA',
          200: '#EDEFF5',
          300: '#E6E8F0',
          400: '#D8DAE5',
          500: '#C1C4D6',
          600: '#8F95B2',
          700: '#696F8C',
          800: '#474D66',
          900: '#101840',
        },
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.0}',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
        mask: {
          background: 'rgba(0,0,0,0.4)',
          color: '{surface.200}',
        },
        formField: {
          background: '{surface.0}',
          disabledBackground: '{surface.0}',
          filledBackground: '{surface.50}',
          filledHoverBackground: '{surface.50}',
          filledFocusBackground: '{surface.50}',
          borderColor: '#E6E4ED',
          hoverBorderColor: '#D4C1F2',
          focusBorderColor: '{primary.color}',
          focusRingShadow: '0 0 6px #6a33b94d',
          focusRingColor: 'initial',
          invalidBorderColor: '#F66161',
          color: '{text.color}',
          disabledColor: '{text.color}',
          placeholderColor: '{surface.500}',
          invalidPlaceholderColor: '{text.color}',
          floatLabelColor: '{surface.500}',
          floatLabelFocusColor: '{primary.600}',
          floatLabelActiveColor: '{surface.500}',
          floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
          iconColor: '{surface.400}',
          shadow: 'none',
        },
        text: {
          color: '#3d344e',
          hoverColor: '{surface.800}',
          mutedColor: '{surface.500}',
          hoverMutedColor: '{surface.600}',
        },
        content: {
          background: '{surface.0}',
          hoverBackground: '{surface.100}',
          borderColor: '{surface.200}',
          color: '{text.color}',
          hoverColor: '{text.hover.color}',
        },
        overlay: {
          select: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{text.color}',
          },
          popover: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{text.color}',
          },
          modal: {
            background: '{surface.0}',
            borderColor: '{surface.200}',
            color: '{text.color}',
          },
        },
        list: {
          option: {
            focusBackground: '{surface.100}',
            selectedBackground: '{highlight.background}',
            selectedFocusBackground: '{highlight.focus.background}',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            selectedColor: '{highlight.color}',
            selectedFocusColor: '{highlight.focus.color}',
            icon: {
              color: '{surface.400}',
              focusColor: '{surface.500}',
            },
          },
          optionGroup: {
            background: 'transparent',
            color: '{text.muted.color}',
          },
        },
        navigation: {
          item: {
            focusBackground: '{surface.100}',
            activeBackground: '{surface.100}',
            color: '{text.color}',
            focusColor: '{text.hover.color}',
            activeColor: '{text.hover.color}',
            icon: {
              color: '{surface.400}',
              focusColor: '{surface.500}',
              activeColor: '{surface.500}',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: '{text.muted.color}',
          },
          submenuIcon: {
            color: '{surface.400}',
            focusColor: '{surface.500}',
            activeColor: '{surface.500}',
          },
        },

      },
    },
  },
  components: {
    accordion: ACCORDION_THEME,
    autocomplete: AUTOCOMPLETE_THEME,
    badge: BADGE_THEME,
    button: BUTTON_THEME,
    carousel: CAROUSEL_THEME,
    checkbox: CHECKBOX_THEME,
    chip: CHIP_THEME,
    datatable: TABLE_THEME,
    dialog: DIALOG_THEME,
    iconfield: ICONFIELD_THEME,
    inputName: INPUT_NUMBER_THEME,
    inputtext: INPUT_TEXT_THEME,
    listbox: LISTBOX_THEME,
    menu: MENU_THEME,
    multiselect: MULTISELECT_THEME,
    paginator: PAGINATOR_THEME,
    panel: PANEL_THEME,
    popover: POPOVER_THEME,
    progressspinner: PROGRESS_SPINNER,
    radiobutton: RADIO_BUTTON_THEME,
    rating: RATING_THEME,
    select: SELECT_THEME,
    selectbutton: SELECT_BUTTON_THEME,
    tabs: TABS_THEME,
    toast: TOAST_THEME,
    togglebutton: TOGGLE_BUTTON_THEME,
    toggleswitch: TOGGLE_SWITCH_THEME,
    tooltip: TOOLTIP_THEME,
  },
  // adding disabled styles here as primeng overrides opacity to 1 when disabled, and this has more priority than our disabled configuration in theme. weird behaviour.
  css: (): string => `
    .p-disabled, .p-component:disabled {
      cursor: not-allowed !important;
    }
    .p-inputtext:disabled {
      opacity: 0.8 !important;
    }
  `,
});
