// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Warang_Citi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0118FF
  ],
  ranges: [
    [0x0118A0, 0x0118F2]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Warang_Citi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Warang_Citi}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Wara}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Wara}"
);
testPropertyEscapes(
  /^\p{scx=Warang_Citi}+$/u,
  matchSymbols,
  "\\p{scx=Warang_Citi}"
);
testPropertyEscapes(
  /^\p{scx=Wara}+$/u,
  matchSymbols,
  "\\p{scx=Wara}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01189F],
    [0x0118F3, 0x0118FE],
    [0x011900, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Warang_Citi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Warang_Citi}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Wara}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Wara}"
);
testPropertyEscapes(
  /^\P{scx=Warang_Citi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Warang_Citi}"
);
testPropertyEscapes(
  /^\P{scx=Wara}+$/u,
  nonMatchSymbols,
  "\\P{scx=Wara}"
);
