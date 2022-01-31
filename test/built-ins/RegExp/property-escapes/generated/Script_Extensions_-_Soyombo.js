// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Soyombo`
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
    [0x011A50, 0x011AA2]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Soyombo}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Soyombo}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Soyo}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Soyo}"
);
testPropertyEscapes(
  /^\p{scx=Soyombo}+$/u,
  matchSymbols,
  "\\p{scx=Soyombo}"
);
testPropertyEscapes(
  /^\p{scx=Soyo}+$/u,
  matchSymbols,
  "\\p{scx=Soyo}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011A4F],
    [0x011AA3, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Soyombo}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Soyombo}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Soyo}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Soyo}"
);
testPropertyEscapes(
  /^\P{scx=Soyombo}+$/u,
  nonMatchSymbols,
  "\\P{scx=Soyombo}"
);
testPropertyEscapes(
  /^\P{scx=Soyo}+$/u,
  nonMatchSymbols,
  "\\P{scx=Soyo}"
);
