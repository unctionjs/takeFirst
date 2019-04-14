/* eslint-disable no-magic-numbers */
import {test} from "tap";

import takeFirst from "./index";

test(({same, end}) => {
  same(
    takeFirst(2)(["a", "b", "c"]),
    ["a", "b"]
  );

  end();
});

test(({same, end}) => {
  same(
    takeFirst(1)(["a", "b", "c"]),
    ["a"]
  );

  end();
});

test(({same, end}) => {
  same(
    takeFirst(2)("abc"),
    "ab"
  );

  end();
});

test(({same, end}) => {
  same(
    takeFirst(1)("abc"),
    "a"
  );

  end();
});
