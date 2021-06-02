# `2.x` migration

## Process

Address any of the changes relevant to you from the tables below.

## Globals

To align with [Carbon's documentation and package ecosystem](https://github.com/carbon-design-system/carbon#getting-started), global-related code now directly references underlying Carbon modules to provide consistency in accessing common functions, mixins, variables, and more.

### Imports

| `1.x`                                       | `2.x`                                                       |
| ------------------------------------------- | ----------------------------------------------------------- |
| `@use '@carbon/ibm-security/scss/globals';` | `@use '@carbon/ibm-security/scss';`                         |
|                                             | `@use 'carbon-components/scss/globals/scss/helper-mixins';` |

## Elements

| Name   | `2.x`                |
| ------ | -------------------- |
| Color  | [Migrate](color.md)  |
| Layout | [Migrate](layout.md) |
| Grid   | [Migrate](grid.md)   |
| Themes | [Migrate](themes.md) |
| Type   | [Migrate](type.md)   |

## Components

| Name            | `2.x`                                                             |
| --------------- | ----------------------------------------------------------------- |
| `Portal`        | [Migrate](../../../src/components/Portal/migration/2.x.md)        |
| `StepIndicator` | [Migrate](../../../src/components/StepIndicator/migration/2.x.md) |
