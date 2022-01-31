// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.round
description: Plural units are accepted as well for the smallestUnit option
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 789, 999, 999);
const validUnits = [
  "day",
  "hour",
  "minute",
  "second",
  "millisecond",
  "microsecond",
  "nanosecond",
];
TemporalHelpers.checkPluralUnitsAccepted((smallestUnit) => datetime.round({ smallestUnit }), validUnits);
TemporalHelpers.checkPluralUnitsAccepted((smallestUnit) => datetime.round(smallestUnit), validUnits);
