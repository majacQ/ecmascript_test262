// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.now.zoneddatetimeiso
description: The "zonedDateTimeISO" property of Temporal.Now
includes: [propertyHelper.js]
features: [Temporal]
---*/

  <<<<<<< bocoup/temporal-now-zoneddatetime-zoneddatetimeiso
  =======
assert.sameValue(typeof Temporal.Now.zonedDateTimeISO, "function", "typeof is function");

  >>>>>>> main
verifyProperty(Temporal.Now, 'zonedDateTimeISO', {
  enumerable: false,
  writable: true,
  configurable: true
});
 