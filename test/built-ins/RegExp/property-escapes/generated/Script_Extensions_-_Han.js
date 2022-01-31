// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Han`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x003030,
    0x0030FB,
    0x0032FF
  ],
  ranges: [
    [0x002E80, 0x002E99],
    [0x002E9B, 0x002EF3],
    [0x002F00, 0x002FD5],
    [0x003001, 0x003003],
    [0x003005, 0x003011],
    [0x003013, 0x00301F],
    [0x003021, 0x00302D],
    [0x003037, 0x00303F],
    [0x003190, 0x00319F],
    [0x0031C0, 0x0031E3],
    [0x003220, 0x003247],
    [0x003280, 0x0032B0],
    [0x0032C0, 0x0032CB],
    [0x003358, 0x003370],
    [0x00337B, 0x00337F],
    [0x0033E0, 0x0033FE],
    [0x003400, 0x004DBF],
    [0x004E00, 0x009FFF],
    [0x00A700, 0x00A707],
    [0x00F900, 0x00FA6D],
    [0x00FA70, 0x00FAD9],
    [0x00FE45, 0x00FE46],
    [0x00FF61, 0x00FF65],
    [0x016FE2, 0x016FE3],
    [0x016FF0, 0x016FF1],
    [0x01D360, 0x01D371],
    [0x01F250, 0x01F251],
    [0x020000, 0x02A6DF],
    [0x02A700, 0x02B738],
    [0x02B740, 0x02B81D],
    [0x02B820, 0x02CEA1],
    [0x02CEB0, 0x02EBE0],
    [0x02F800, 0x02FA1D],
    [0x030000, 0x03134A]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Han}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Han}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Hani}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hani}"
);
testPropertyEscapes(
  /^\p{scx=Han}+$/u,
  matchSymbols,
  "\\p{scx=Han}"
);
testPropertyEscapes(
  /^\p{scx=Hani}+$/u,
  matchSymbols,
  "\\p{scx=Hani}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x002E9A,
    0x003004,
    0x003012,
    0x003020,
    0x0033FF
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002E7F],
    [0x002EF4, 0x002EFF],
    [0x002FD6, 0x003000],
    [0x00302E, 0x00302F],
    [0x003031, 0x003036],
    [0x003040, 0x0030FA],
    [0x0030FC, 0x00318F],
    [0x0031A0, 0x0031BF],
    [0x0031E4, 0x00321F],
    [0x003248, 0x00327F],
    [0x0032B1, 0x0032BF],
    [0x0032CC, 0x0032FE],
    [0x003300, 0x003357],
    [0x003371, 0x00337A],
    [0x003380, 0x0033DF],
    [0x004DC0, 0x004DFF],
    [0x00A000, 0x00A6FF],
    [0x00A708, 0x00DBFF],
    [0x00E000, 0x00F8FF],
    [0x00FA6E, 0x00FA6F],
    [0x00FADA, 0x00FE44],
    [0x00FE47, 0x00FF60],
    [0x00FF66, 0x016FE1],
    [0x016FE4, 0x016FEF],
    [0x016FF2, 0x01D35F],
    [0x01D372, 0x01F24F],
    [0x01F252, 0x01FFFF],
    [0x02A6E0, 0x02A6FF],
    [0x02B739, 0x02B73F],
    [0x02B81E, 0x02B81F],
    [0x02CEA2, 0x02CEAF],
    [0x02EBE1, 0x02F7FF],
    [0x02FA1E, 0x02FFFF],
    [0x03134B, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Han}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Han}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Hani}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hani}"
);
testPropertyEscapes(
  /^\P{scx=Han}+$/u,
  nonMatchSymbols,
  "\\P{scx=Han}"
);
testPropertyEscapes(
  /^\P{scx=Hani}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hani}"
);
