// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.day
description: The "day" property of Temporal.Calendar.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Calendar.prototype.day,
  "function",
  "`typeof Calendar.prototype.day` is `function`"
);

verifyProperty(Temporal.Calendar.prototype, "day", {
  writable: true,
  enumerable: false,
  configurable: true,
});
