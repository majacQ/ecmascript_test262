// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.since
description: Rounding for roundingIncrement option
info: |
    sec-temporal-totemporalroundingincrement step 7:
      7. Set _increment_ to floor(ℝ(_increment_)).
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const earlier = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 0, 0, 0);
const later = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 0, 0, 5);
const result = later.since(earlier, { roundingIncrement: 2.5 });
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, "roundingIncrement 2.5 floors to 2");
