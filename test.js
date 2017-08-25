/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import takeFirst from "./source.js"

test(({same, end}) => {
  same(
    takeFirst(2)(["a", "b", "c"]),
    ["a", "b"]
  )

  end()
})

test(({same, end}) => {
  same(
    takeFirst(1)(["a", "b", "c"]),
    ["a"]
  )

  end()
})
