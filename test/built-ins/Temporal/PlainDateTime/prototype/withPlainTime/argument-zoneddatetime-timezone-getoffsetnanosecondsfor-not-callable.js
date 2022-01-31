// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.withplaintime
description: TypeError thrown if timeZone.getOffsetNanosecondsFor is not callable
features: [BigInt, Symbol, Temporal, arrow-function]
---*/

[undefined, null, true, Math.PI, 'string', Symbol('sym'), 42n, {}].forEach((notCallable) => {
  const timeZone = new Temporal.TimeZone("UTC");
  const plain = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
  const zoned = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, timeZone);
  timeZone.getOffsetNanosecondsFor = notCallable;
  assert.throws(
    TypeError,
    () => plain.withPlainTime(zoned),
    `Uncallable ${notCallable === null ? 'null' : typeof notCallable} getOffsetNanosecondsFor should throw TypeError`
  );
});
