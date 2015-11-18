# Tink timepicker Angular directive

v1.0.5

## What is this repository for?

The Tink Angular timepicker provides a beautiful timepicker.

Tink is an in-house developed easy-to-use front-end framework for quick prototyping and simple deployment of all kinds of websites and apps, keeping a uniform and consistent look and feel.

## Setup

### Prerequisites

* nodeJS [http://nodejs.org/download/](http://nodejs.org/download/)
* bower: `npm install -g bower`

### Install

1. Go to the root of your project and type the following command in your terminal:

   `bower install tink-timepicker-angular --save`

2. Add the following files to your project:

   `<link rel="stylesheet" href="bower_components/tink-core/dist/tink.css" />` (or one of the Tink themes)

   `<script src="bower_components/tink-timepicker-angular/dist/tink-timepicker-angular.js"></script>`

   `<script src="bower_components/tink-helper-safe-apply-angular/dist/tink-helper-safe-apply-angular.js"></script>`

3. Add `tink.timepicker` to your app module's dependency.

   `angular.module('myApp', ['tink.timepicker']);`



----------



## How to use

### tink-timepicker

```html
<tink-timepicker data-ng-model="selectedTime"></tink-timepicker>
```

### Options

Attr | Type | Default | Details
--- | --- | --- | ---
data-ng-model (required) | `object` | `''` | This variable holds a date object with the time.

   Note: The Tink timepicker also works with the disabled attribute.

### Example

A working example can be found in [the Tink documentation](http://tink.digipolis.be/#/docs/directives/timepicker#example).

## Contribution guidelines

* If you're not sure, drop us a note
* Fork this repo
* Do your thing
* Create a pull request

## Who do I talk to?

* Jasper Van Proeyen - jasper.vanproeyen@digipolis.be - Lead front-end
* Tom Wuyts - tom.wuyts@digipolis.be - Lead UX
* [The hand](https://www.youtube.com/watch?v=_O-QqC9yM28)
