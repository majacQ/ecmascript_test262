// Copyright (C) 2020 Qu Xing. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-escape-string
description: Observable operations from string coercion
info: |
    B.2.1.1 escape ( string )

    1. Let string be ? ToString(string).
    ...
features: [Symbol.toPrimitive]
---*/

var obj = {
  toString() { throw new Test262Error('this should be unreachable'); },
  valueOf() { throw new Test262Error('this should be unreachable'); },
  [Symbol.toPrimitive]() { return 'success'; }
};

assert.sameValue(escape(obj), 'success');
