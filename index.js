var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    packer = require('packer'),
    filendir = require('filendir'),
    _ = require('underscore'),
    notify = require('gulp-notify'),
    fs = require('fs');

elixir.extend('packer', function(src, dest, options) {
    options = _.extend({
        base62Encode: true,
        shrinkVariables: true,
    }, options);

    gulp.task('packer', function(callback) {
        var fileContent = fs.readFileSync(src, 'utf8');
        var packedContents = packer.pack(fileContent, options.base62Encode, options.shrinkVariables);

        if (!filendir.ws(dest, packedContents)) {
            return notify({
                title: 'Packer Failed!',
                icon: __dirname + '/../laravel-elixir/icons/fail.png'
            });
        }

        return notify({
            title: 'Packer Succeeded!',
            icon: __dirname + '/../laravel-elixir/icons/pass.png'
        });
    });

    return this.queueTask('packer');
});
