import React from "react";
import { chunk } from "../../helpers/chunk";

test("chunk should return chunked array.", () => {
  let array = [1, 2, 3];
  let chunked = chunk(array, 1);
  expect(chunked).toStrictEqual([[1], [2], [3]]);
});
