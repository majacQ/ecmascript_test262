// Copyright 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-initializenumberformat
description: Rejects invalid values for roundingIncrement option.
features: [Intl.NumberFormat-v3]
---*/

assert.throws(RangeError, function() {
  new Intl.NumberFormat([], {roundingIncrement: 0});
}, '0');

assert.throws(RangeError, function() {
  new Intl.NumberFormat([], {roundingIncrement: 1.1});
}, '1.1');

assert.throws(RangeError, function() {
  new Intl.NumberFormat([], {roundingIncrement: 3});
}, '3');

assert.throws(RangeError, function() {
  new Intl.NumberFormat([], {roundingIncrement: 4});
}, '4');

assert.throws(RangeError, function() {
  new Intl.NumberFormat([], {roundingIncrement: 5000.1});
}, '5000.1');

assert.throws(RangeError, function() {
  new Intl.NumberFormat([], {roundingIncrement: 5001});
}, '5001');
