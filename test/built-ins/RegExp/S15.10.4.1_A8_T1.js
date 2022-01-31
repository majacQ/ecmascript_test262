// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T1
description: Pattern is "a|b" and flags is "i"
---*/

var __re = new RegExp("a|b","i");

assert.sameValue(__re.ignoreCase, true, 'The value of __re.ignoreCase is expected to be true');
assert.sameValue(__re.multiline, false, 'The value of __re.multiline is expected to be false');
assert.sameValue(__re.global, false, 'The value of __re.global is expected to be false');
assert.sameValue(__re.lastIndex, 0, 'The value of __re.lastIndex is expected to be 0');
assert.notSameValue(typeof __re.source, "undefined", 'The value of typeof __re.source is not "undefined"');
