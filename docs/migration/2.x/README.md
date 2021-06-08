# `2.x` migration

## Elements

| Name   | `2.x`                |
| ------ | -------------------- |
| Color  | [Migrate](color.md)  |
| Themes | [Migrate](themes.md) |

## Components

| Name            | `2.x`                                                             |
| --------------- | ----------------------------------------------------------------- |
| `Portal`        | [Migrate](../../../src/components/Portal/migration/2.x.md)        |
| `StepIndicator` | [Migrate](../../../src/components/StepIndicator/migration/2.x.md) |

Also refer to [getting started in Carbon](https://www.carbondesignsystem.com/developing/get-started).

## CSS

To align with [Carbon's documentation and package ecosystem](https://github.com/carbon-design-system/carbon#getting-started), Carbon component-related styles now directly reference underlying Carbon modules instead of proxying via Carbon for IBM Security to provide compatibility in accessing common components, functions, mixins, variables, and more.

Also refer to [getting started in Carbon](https://www.carbondesignsystem.com/developing/get-started).

### Migrating

#### Imports

To add only the Carbon for IBM Security-specific components' processed and minified styles, reference `@carbon/ibm-security/css/index.next.min.css`:

| `1.x`                                    | `2.x`                                             |
| ---------------------------------------- | ------------------------------------------------- |
| `@carbon/ibm-security/css/index.min.css` | `@carbon/ibm-security/css/index.next.min.css`     |
|                                          | `carbon-components/css/carbon-components.min.css` |
