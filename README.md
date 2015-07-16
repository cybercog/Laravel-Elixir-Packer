# Laravel Elixir - Packer

A simple wrapper around the [Simple port of /packer/ by Dean Edwards](https://www.npmjs.com/package/packer) for Laravel Elixir.

## Install

```
npm install laravel-elixir-packer --save-dev
```

## Usage

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-packer');

elixir(function(mix) {
    mix.packer('src/js/app.js', 'dist/js/app.pkgd.js');

    // or with options
    mix.packer('src/js/app.js', 'dist/js/app.pkgd.js', {
        base62Encode: true,
        shrinkVariables: true,
    });
});
```
