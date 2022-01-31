// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Bassa_Vah`
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
    [0x016AD0, 0x016AED],
    [0x016AF0, 0x016AF5]
  ]
});
testPropertyEscapes(
  /^\p{Script=Bassa_Vah}+$/u,
  matchSymbols,
  "\\p{Script=Bassa_Vah}"
);
testPropertyEscapes(
  /^\p{Script=Bass}+$/u,
  matchSymbols,
  "\\p{Script=Bass}"
);
testPropertyEscapes(
  /^\p{sc=Bassa_Vah}+$/u,
  matchSymbols,
  "\\p{sc=Bassa_Vah}"
);
testPropertyEscapes(
  /^\p{sc=Bass}+$/u,
  matchSymbols,
  "\\p{sc=Bass}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016ACF],
    [0x016AEE, 0x016AEF],
    [0x016AF6, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Bassa_Vah}+$/u,
  nonMatchSymbols,
  "\\P{Script=Bassa_Vah}"
);
testPropertyEscapes(
  /^\P{Script=Bass}+$/u,
  nonMatchSymbols,
  "\\P{Script=Bass}"
);
testPropertyEscapes(
  /^\P{sc=Bassa_Vah}+$/u,
  nonMatchSymbols,
  "\\P{sc=Bassa_Vah}"
);
testPropertyEscapes(
  /^\P{sc=Bass}+$/u,
  nonMatchSymbols,
  "\\P{sc=Bass}"
);
