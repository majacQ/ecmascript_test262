// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.daysinweek
description: The "daysInWeek" property of Temporal.Calendar.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Calendar.prototype.daysInWeek,
  "function",
  "`typeof Calendar.prototype.daysInWeek` is `function`"
);

verifyProperty(Temporal.Calendar.prototype, "daysInWeek", {
  writable: true,
  enumerable: false,
  configurable: true,
});
