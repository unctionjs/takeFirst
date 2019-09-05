# @unction/takeFirst

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> number => OrderedEnumerableType<V> => OrderedEnumerableType<V>

Returns the first N of a list of ordered values.

``` javascript
takeFirst(2)([1, 2, 3]) // [1, 2]
takeFirst(1)([1, 2, 3]) // [1]
takeFirst(2)("abc") // "ab"
takeFirst(1)("abc") // "a"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/takeFirst.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/takeFirst.svg?maxAge=2592000&style=flat-square
