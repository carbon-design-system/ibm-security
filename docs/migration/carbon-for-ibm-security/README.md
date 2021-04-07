# `@carbon/ibm-security` migration

## Process

1. Remove the `registry=` entry from your `.npmrc`
2. Remove the `@ibmduo:registry=` entry from your `.npmrc`
3. Run `yarn cache clean` and `npm cache verify` to clear old Artifactory references from your global Yarn cache and verify the integrity of the npm cache
4. Address any of the changes relevant to you from the tables below

### Optional

Remove any `@ibmduo`-scoped packages if they're listed as a dependency

## Elements

| Name   | `@carbon/ibm-security` |
| ------ | ---------------------- |
| Color  | [Migrate](color.md)    |
| Grid   | [Migrate](grid.md)     |
| Layout | [Migrate](layout.md)   |
| Type   | [Migrate](type.md)     |

## Components

| Name                  | `@carbon/ibm-security`                                                                |
| --------------------- | ------------------------------------------------------------------------------------- |
| `Breadcrumb`          | [Migrate](../../../src/components/Breadcrumb/migration/carbon-for-ibm-security.md)    |
| `Button`              | [Migrate](../../../src/components/Button/migration/carbon-for-ibm-security.md)        |
| `CallToActionSection` | Removed                                                                               |
| `DataDecorator`       | [Migrate](../../../src/components/DataDecorator/migration/carbon-for-ibm-security.md) |
| `DataTable`           | [Migrate](../../../src/components/DataTable/migration/carbon-for-ibm-security.md)     |
| `Header`              | [Migrate](../../../src/components/Header/migration/carbon-for-ibm-security.md)        |
| `Icon`                | [Migrate](../../../src/components/Icon/migration/carbon-for-ibm-security.md)          |
| `IconButton`          | [Migrate](../../../src/components/IconButton/migration/carbon-for-ibm-security.md)    |
| `InlineNotification`  | [Migrate](../../../src/components/Notification/migration/carbon-for-ibm-security.md)  |
| `Loading`             | [Migrate](../../../src/components/Loading/migration/carbon-for-ibm-security.md)       |
| `MultiSelect`         | [Migrate](../../../src/components/MultiSelect/migration/carbon-for-ibm-security.md)   |
| `Pagination`          | [Migrate](../../../src/components/Pagination/migration/carbon-for-ibm-security.md)    |
| `Panel`               | [Migrate](../../../src/components/Panel/migration/carbon-for-ibm-security.md)         |
| `Search`              | [Migrate](../../../src/components/Search/migration/carbon-for-ibm-security.md)        |
| `Tag`                 | [Migrate](../../../src/components/Tag/migration/carbon-for-ibm-security.md)           |
| `TextInput`           | [Migrate](../../../src/components/TextInput/migration/carbon-for-ibm-security.md)     |
| `TypeLayout`          | [Migrate](../../../src/components/TypeLayout/migration/carbon-for-ibm-security.md)    |
