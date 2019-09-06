/* eslint-disable no-magic-numbers */
import takeFirst from "./index";

test("works", () => {
  expect(takeFirst(2)(["a", "b", "c"])).toEqual(["a", "b"]);
});

test("works", () => {
  expect(takeFirst(1)(["a", "b", "c"])).toEqual(["a"]);
});

test("works", () => {
  expect(takeFirst(2)("abc")).toEqual("ab");
});

test("works", () => {
  expect(takeFirst(1)("abc")).toEqual("a");
});
