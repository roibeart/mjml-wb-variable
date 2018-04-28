# MJML variables

Use variables inside your [mjml](https://mjml.io/) e-mails.

> ⚠️ This component doesn't work with MJML 4.<br/>
> To use it, install version 3 of MJML using the command<br/>
> `npm init -y && npm install mjml@^3.1.1`

## Installation

Copy the `lib` folder and the `.mjmlconfig` file contained in this repository and paste them inside your mjml project directory.

## How to use

1. Declare your variables immediately below the `mj-container` opening tag through the `wb-variable` component, using the `name` and `value` attributes.

```
<mj-container>

    <wb-variable
        name="GA_TRACK"
        value="utm_source=newsletter&utm_medium=dem" />

    <wb-variable
        name="BG_COLOR"
        value="#b4d455" />

    ...
```

2. Use the declared variables anywhere inside the body of the e-mail, delimiting their name with the `#` character.

```
<mj-section background-color="#BG_COLOR#">
    <mj-column>
        <mj-button href="https://example.com?#GA_TRACK#">
            GO
        </mj-button>
    </mj-column>
</mj-section>
```

## Other options

If for some reason you don't want to use the `#` for referring the variables, you can use the `delimiter` option in order to customize it.

```
<wb-variable
    name="GA_TRACK"
    value="utm_source=newsletter&utm_medium=dem"
    delimiter="@" />
```
In this example, to refer the GA_TRACK variable you have to write `@GA_TRACK@` inside the body of the e-mail.

If for some other reasons you want to customize the left and the right delimiter, you can use the `left-delimiter` and `right-delimiter` attributes.

```
<wb-variable
    name="GA_TRACK"
    value="utm_source=newsletter&utm_medium=dem"
    left-delimiter="{"
    right-delimiter="}" />
```
In this example, to refer the GA_TRACK variable you have to write `{GA_TRACK}` inside the body of the e-mail.
