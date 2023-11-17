# Shapla Components

> IMPORTANT: Shapla Components is a work in progress and subject to major changes until 1.0 release.

A collection of reusable components using vanilla javaScript.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

Install using npm package manager

```
npm i @shapla/vanilla-components
```

or using yarn package manager

```
yarn add @shapla/vanilla-components
```

# Usage

Here we export all components script as ES module and all style as SCSS mixins. So you need to import SCSS mixin to
load style of component and also need to import ES module and register as vue component.

For example, to use button and progress bar components:

### Styles (SCSS)

```scss
// Add the following line at top of your scss file
@use "@shapla/vanilla-components/src/index.scss" as shapla;

@include shapla.spinner;
@include shapla.notification;
// Include other mixins as your requirement
```

### Javascript Instantiation

```js
import {Spinner, Notify} from "@shapla/vanilla-components";

```

# List of Components

<details>
<summary>Loading Spinner</summary>

A loading spinner component using vanilla javaScript.

Include SCSS mixin

```scss
// Add the following line at top of your scss file
@use "@shapla/vanilla-components/src/index.scss" as shapla;

@include shapla.spinner;
```

Import javaScript module

```js
import {Spinner} from "@shapla/vanilla-components";

// Show spinner
Spinner.show();

// Show single spinner with 'Loading...' text
Spinner.show({single: true, showText: true});

// Hide spinner
Spinner.hide();
```

**Available Props for `Spinner.show()` method**

| Property      | Type    | Required | Default      | Description                                                     |
|---------------|---------|----------|--------------|-----------------------------------------------------------------|
| `single`      | Boolean | **no**   | `false`      | If set `true`, only primary color will be shown for all layers. |
| `showText`    | Boolean | **no**   | `false`      | If set `true`, `Loading...` text will be show beside spinner.   |
| `loadingText` | String  | **no**   | `Loading...` | Loading text                                                    |
| `position`    | String  | **no**   | `fixed`      | Value can be `fixed`, `absolute`, or `static`.                  |
| `size`        | String  | **no**   | `default`    | Value can be `default`, `small`, or `medium` or `large`.        |

</details>
<details>
<summary>Notification</summary>

A simple notification component using vanilla javaScript.

Include SCSS mixin

```scss
// Add the following line at top of your scss file
@use "@shapla/vanilla-components/src/index.scss" as shapla;

@include shapla.delete-icon;
@include shapla.notification;
```

Import javaScript module

```js
import {Notify} from "@shapla/vanilla-components";

// Show success notification
Notify.success('Message content');

// You can also include title and timeout
Notify.success('Message content', 'Success!', 5000);
```

Notify API

- Notify.info(message, title, timeout);
- Notify.success(message, title, timeout);
- Notify.warning(message, title, timeout);
- Notify.error(message, title, timeout);

| Property  | Type   | Required | Default | Description                       |
|-----------|--------|----------|---------|-----------------------------------|
| `message` | String | **yes**  | ``      | Notification message              |
| `title`   | String | **no**   | ``      | Notification title                |
| `timeout` | Number | **no**   | `4000`  | The popup timeout in milliseconds |

</details>
<details>
<summary>Dialog</summary>

A simple dialog component for confirm/alert dialog using vanilla javaScript.

Include SCSS mixin

```scss
// Add the following line at top of your scss file
@use "@shapla/vanilla-components/src/index.scss" as shapla;

@include shapla.modal;
```

Import javaScript module

```js
import {Dialog} from "@shapla/vanilla-components";

// Show confirm dialog
Dialog.confirm('Are you sure to delete the item?').then(() => {
    // User confirmed to delete the item
});

// Show alert dialog
Dialog.alert('A simple alert message like native JavaScript alert');
```

</details>
