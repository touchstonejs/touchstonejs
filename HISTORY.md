# TouchstoneJS

Please be aware that TouchstoneJS is still under heavy initial development, and the features / API are liable to change rapidly and possibly break things.

## v0.4.0 - v0.4.2 / 2015-07-03

* massive update, live published from #reacteurope. see touchstone-starter for changes.

## v0.3.2 / 2015-05-30

* updated build, there were issues with the last release :/

## v0.3.1 / 2015-05-30

* added .npmignore becuase we're excuding `lib` from git, but it needs to be published to npm.

## v0.3.0 / 2015-05-30

* added happiness linter
* lots of cleanup and consistency fixes
* source code is now in `src`, built to `lib` for inclusion in projects without transpilation via browserify / webpack. use `npm run watch` and `npm run build` for development.

Make sure you update to `touchstonejs-tasks` v0.2.1 when using this release of TouchstoneJS.

## v0.2.0 / 2015-04-01

* significant refactor of components and styles, see git history for details
* added; better support for default props generally
* added; uses `blacklist` for consuming props
* added; uses `xtend` over `underscore` for extending properties
* updated; uses `react-tappable` 0.4
* updated; removed deprecated React 0.11 syntax
* removed; Dialogs Mixin, uses `cordova-dialogs` module instead

## v0.1.2 / 2014-12-17

* fixed; Issue with the headerbar disappearing (#11)
* added; Keypad and passcode component (prototype)
* added; Dialogs mixin (prototype)
* improved; Headerbar component tweaked
* improved; Text selection is blocked by default

... and lots of general cleanup.


## v0.1.1 / 2014-12-04

* Minor fixes


## v0.1.0 / 2014-12-03

* First public release
