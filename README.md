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

- Notification
- Spinner
