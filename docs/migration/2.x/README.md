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

To align with [Carbon's documentation and package ecosystem](https://github.com/carbon-design-system/carbon#getting-started), Carbon component-related code now directly references underlying Carbon modules instead of proxying via Carbon for IBM Security to provide consistency in accessing common components, functions, mixins, variables, and more.

Also refer to [getting started in Carbon](https://www.carbondesignsystem.com/developing/get-started).

### Migrating

#### Sass

| `1.x`                                                    | `2.x`                                                           |
| -------------------------------------------------------- | --------------------------------------------------------------- |
| `@use '@carbon/ibm-security/scss/components/Accordion';` | `@use 'carbon-components/scss/components/accordion/accordion';` |

#### JavaScript

| `1.x`                                               | `2.x`                                                  |
| --------------------------------------------------- | ------------------------------------------------------ |
| `import { Accordion } from '@carbon/ibm-security';` | `import { Accordion } from 'carbon-components-react';` |
