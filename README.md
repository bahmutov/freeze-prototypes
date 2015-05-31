## freeze-prototypes

> Freezes common prototypes like Array.prototype to avoid any library messing with them

Read [Unapply attack](http://glebbahmutov.com/blog/unapply-attack/)

[![NPM info][nodei.co]](https://npmjs.org/package/freeze-prototypes)

[![Build status][ci-image]][ci-url]

[ci-image]: https://travis-ci.org/bahmutov/freeze-prototypes.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/freeze-prototypes
[nodei.co]: https://nodei.co/npm/freeze-prototypes.png?downloads=true

## Use

Include after main trusted libraries are loaded, maybe before your own app code,
but before untrusted 3rd party code

```html
<script src="//cdn/jquery.js"></script>
<script src="//cdn/angular.js"></script>
<script src="dist/freeze-prototypes.js"></script>
<script src="<your app code>"></script>
<script src="<untrusted 3rd party code>"></script>
```

## Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/freeze-prototypes/issues) on Github
