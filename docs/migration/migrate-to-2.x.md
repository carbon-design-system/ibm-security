# `2.x` migration

## Process

1. Remove the `registry=` entry from your `.npmrc`
2. Remove the `@ibmduo:registry=` entry from your `.npmrc`
3. Run `yarn cache clean` and `npm cache verify` to clear old Artifactory references from your global Yarn cache and verify the integrity of the npm cache
4. Address any of the changes relevant to you from the tables below

### Optional

Remove any `@ibmduo`-scoped packages if they're listed as a dependency

## Elements

| Name   | `2.x`                    |
| ------ | ------------------------ |
| Color  | [Migrate](2.x-color.md)  |
| Grid   | [Migrate](2.x-grid.md)   |
| Layout | [Migrate](2.x-layout.md) |
| Type   | [Migrate](2.x-type.md)   |

## Components

| Name                  | `2.x`                                                           |
| --------------------- | --------------------------------------------------------------- |
| `Breadcrumb`          | [Migrate](../../src/components/Breadcrumb/migrate-to-2.x.md)    |
| `Button`              | [Migrate](../../src/components/Button/migrate-to-2.x.md)        |
| `CallToActionSection` | Removed                                                         |
| `DataDecorator`       | [Migrate](../../src/components/DataDecorator/migrate-to-2.x.md) |
| `DataTable`           | [Migrate](../../src/components/DataTable/migrate-to-2.x.md)     |
| `Header`              | [Migrate](../../src/components/Header/migrate-to-2.x.md)        |
| `Icon`                | [Migrate](../../src/components/Icon/migrate-to-2.x.md)          |
| `IconButton`          | [Migrate](../../src/components/IconButton/migrate-to-2.x.md)    |
| `InlineNotification`  | [Migrate](../../src/components/Notification/migrate-to-2.x.md)  |
| `Loading`             | [Migrate](../../src/components/Loading/migrate-to-2.x.md)       |
| `MultiSelect`         | [Migrate](../../src/components/MultiSelect/migrate-to-2.x.md)   |
| `Pagination`          | [Migrate](../../src/components/Pagination/migrate-to-2.x.md)    |
| `Panel`               | [Migrate](../../src/components/Panel/migrate-to-2.x.md)         |
| `Search`              | [Migrate](../../src/components/Search/migrate-to-2.x.md)        |
| `StepIndicator`       | [Migrate](../../src/components/StepIndicator/migrate-to-2.x.md) |
| `Tag`                 | [Migrate](../../src/components/Tag/migrate-to-2.x.md)           |
| `TextInput`           | [Migrate](../../src/components/TextInput/migrate-to-2.x.md)     |
| `TypeLayout`          | [Migrate](../../src/components/TypeLayout/migrate-to-2.x.md)    |
