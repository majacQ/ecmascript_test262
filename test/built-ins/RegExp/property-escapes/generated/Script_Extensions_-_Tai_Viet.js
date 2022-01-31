// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tai_Viet`
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
    [0x00AA80, 0x00AAC2],
    [0x00AADB, 0x00AADF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Tai_Viet}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tai_Viet}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Tavt}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tavt}"
);
testPropertyEscapes(
  /^\p{scx=Tai_Viet}+$/u,
  matchSymbols,
  "\\p{scx=Tai_Viet}"
);
testPropertyEscapes(
  /^\p{scx=Tavt}+$/u,
  matchSymbols,
  "\\p{scx=Tavt}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00AA7F],
    [0x00AAC3, 0x00AADA],
    [0x00AAE0, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Tai_Viet}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tai_Viet}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Tavt}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tavt}"
);
testPropertyEscapes(
  /^\P{scx=Tai_Viet}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tai_Viet}"
);
testPropertyEscapes(
  /^\P{scx=Tavt}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tavt}"
);
