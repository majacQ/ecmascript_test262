// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.tostring
description: Conversion of ISO date-time strings to Temporal.TimeZone instances
features: [Temporal]
---*/

const instance = new Temporal.Instant(0n);

let timeZone = "2021-08-19T17:30";
assert.throws(RangeError, () => instance.toString({ timeZone }), "bare date-time string is not a time zone");
assert.throws(RangeError, () => instance.toString({ timeZone: { timeZone } }), "bare date-time string is not a time zone");

timeZone = "2021-08-19T17:30Z";
const result1 = instance.toString({ timeZone });
assert.sameValue(result1.substr(-6), "+00:00", "date-time + Z is UTC time zone");
const result2 = instance.toString({ timeZone: { timeZone } });
assert.sameValue(result2.substr(-6), "+00:00", "date-time + Z is UTC time zone (string in property bag)");

timeZone = "2021-08-19T17:30-07:00";
const result3 = instance.toString({ timeZone });
assert.sameValue(result3.substr(-6), "-07:00", "date-time + offset is the offset time zone");
const result4 = instance.toString({ timeZone: { timeZone } });
assert.sameValue(result4.substr(-6), "-07:00", "date-time + offset is the offset time zone (string in property bag)");

timeZone = "2021-08-19T17:30[America/Vancouver]";
const result5 = instance.toString({ timeZone });
assert.sameValue(result5.substr(-6), "-08:00", "date-time + IANA annotation is the offset time zone");
const result6 = instance.toString({ timeZone: { timeZone } });
assert.sameValue(result6.substr(-6), "-08:00", "date-time + IANA annotation is the offset time zone (string in property bag)");

timeZone = "2021-08-19T17:30Z[America/Vancouver]";
const result7 = instance.toString({ timeZone });
assert.sameValue(result7.substr(-6), "-08:00", "date-time + Z + IANA annotation is the offset time zone");
const result8 = instance.toString({ timeZone: { timeZone } });
assert.sameValue(result8.substr(-6), "-08:00", "date-time + Z + IANA annotation is the offset time zone (string in property bag)");

timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";
const result9 = instance.toString({ timeZone });
assert.sameValue(result9.substr(-6), "-08:00", "date-time + offset + IANA annotation is the offset time zone");
const result10 = instance.toString({ timeZone: { timeZone } });
assert.sameValue(result10.substr(-6), "-08:00", "date-time + offset + IANA annotation is the offset time zone (string in property bag)");
