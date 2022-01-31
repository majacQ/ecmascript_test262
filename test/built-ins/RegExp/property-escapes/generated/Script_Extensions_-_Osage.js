// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Osage`
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
    [0x0104B0, 0x0104D3],
    [0x0104D8, 0x0104FB]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Osage}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Osage}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Osge}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Osge}"
);
testPropertyEscapes(
  /^\p{scx=Osage}+$/u,
  matchSymbols,
  "\\p{scx=Osage}"
);
testPropertyEscapes(
  /^\p{scx=Osge}+$/u,
  matchSymbols,
  "\\p{scx=Osge}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0104AF],
    [0x0104D4, 0x0104D7],
    [0x0104FC, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Osage}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Osage}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Osge}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Osge}"
);
testPropertyEscapes(
  /^\P{scx=Osage}+$/u,
  nonMatchSymbols,
  "\\P{scx=Osage}"
);
testPropertyEscapes(
  /^\P{scx=Osge}+$/u,
  nonMatchSymbols,
  "\\P{scx=Osge}"
);
