// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Old_Italic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010300, 0x010323],
    [0x01032D, 0x01032F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Old_Italic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Old_Italic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Ital}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ital}"
);
testPropertyEscapes(
  /^\p{scx=Old_Italic}+$/u,
  matchSymbols,
  "\\p{scx=Old_Italic}"
);
testPropertyEscapes(
  /^\p{scx=Ital}+$/u,
  matchSymbols,
  "\\p{scx=Ital}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0102FF],
    [0x010324, 0x01032C],
    [0x010330, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Old_Italic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Old_Italic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Ital}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ital}"
);
testPropertyEscapes(
  /^\P{scx=Old_Italic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Old_Italic}"
);
testPropertyEscapes(
  /^\P{scx=Ital}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ital}"
);
