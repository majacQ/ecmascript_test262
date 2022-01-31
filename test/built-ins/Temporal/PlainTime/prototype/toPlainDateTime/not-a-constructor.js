// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.toplaindatetime
description: >
  Temporal.PlainTime.prototype.toPlainDateTime does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.PlainTime.prototype.toPlainDateTime();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.PlainTime.prototype.toPlainDateTime), false,
  "isConstructor(Temporal.PlainTime.prototype.toPlainDateTime)");
