# Shapla Confirm Dialog

A simple confirm modal/dialog based on modal component for vanilla JavaScript

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vanilla-components
```

## Usage

### Javascript Instantiation

```js
import {Dialog} from "@shapla/vanilla-components";

const openConfirmModal = () => {
    Dialog.confirm("Are you sure to delete the item?").then((confirm) => {
        if (confirm) {
            console.log("Confirmed");
        }
    });
};

const openAlertModal = () => {
    Dialog.alert({
        message: "You need to click Ok button to close it.",
        title: "Simple Alert",
    });
};
```

## Dialog API

- Dialog.alert(message);
- Dialog.confirm(message);

Both `alert` and `confirm` can accept String for the message or Object with following props.

| Property        | Type            | Required | Default   | Description                                             |
|-----------------|-----------------|----------|-----------|---------------------------------------------------------|
| `message`       | String          | **yes**  | ``        | Confirm dialog message                                  |
| `title`         | String          | **no**   | ``        | Confirm dialog title                                    |
| `icon`          | String          | **no**   | `primary` | Value can be `primary`, `success` or `error`.           |
| `confirmButton` | String, Boolean | **no**   | `OK`      | Confirm button text. Set `false` to hide confirm button |
| `cancelButton`  | String, Boolean | **no**   | `Cancel`  | Cancel button text. Set `false` to hide cancel button   |
