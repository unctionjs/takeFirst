/* eslint-disable no-magic-numbers */
import takeFirst from "./index";

test(() => {
  expect(takeFirst(2)(["a", "b", "c"])).toEqual(["a", "b"]);
});

test(() => {
  expect(takeFirst(1)(["a", "b", "c"])).toEqual(["a"]);
});

test(() => {
  expect(takeFirst(2)("abc")).toEqual("ab");
});

test(() => {
  expect(takeFirst(1)("abc")).toEqual("a");
});
