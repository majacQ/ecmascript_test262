// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The production QuantifierPrefix :: { DecimalDigits , DecimalDigits }
    evaluates as ...
es5id: 15.10.2.7_A1_T8
description: Execute /b{2,3}c/.exec("aaabbbbcccddeeeefffff") and check results
---*/

var __executed = /b{2,3}c/.exec("aaabbbbcccddeeeefffff");

var __expected = ["bbbc"];
__expected.index = 4;
__expected.input = "aaabbbbcccddeeeefffff";

assert.sameValue(
  __executed.length,
  __expected.length,
  'The value of __executed.length is expected to equal the value of __expected.length'
);

assert.sameValue(
  __executed.index,
  __expected.index,
  'The value of __executed.index is expected to equal the value of __expected.index'
);

assert.sameValue(
  __executed.input,
  __expected.input,
  'The value of __executed.input is expected to equal the value of __expected.input'
);

for(var index=0; index<__expected.length; index++) {
  assert.sameValue(
    __executed[index],
    __expected[index],
    'The value of __executed[index] is expected to equal the value of __expected[index]'
  );
}
