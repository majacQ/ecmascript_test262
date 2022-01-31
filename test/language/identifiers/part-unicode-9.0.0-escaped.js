// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v9.0.0 ID_Continue characters are accepted as
  identifier part characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var _\u08D4\u08D5\u08D6\u08D7\u08D8\u08D9\u08DA\u08DB\u08DC\u08DD\u08DE\u08DF\u08E0\u08E1\u1DFB\uA8C5\u{1123E}\u{11435}\u{11436}\u{11437}\u{11438}\u{11439}\u{1143A}\u{1143B}\u{1143C}\u{1143D}\u{1143E}\u{1143F}\u{11440}\u{11441}\u{11442}\u{11443}\u{11444}\u{11445}\u{11446}\u{11450}\u{11451}\u{11452}\u{11453}\u{11454}\u{11455}\u{11456}\u{11457}\u{11458}\u{11459}\u{11C2F}\u{11C30}\u{11C31}\u{11C32}\u{11C33}\u{11C34}\u{11C35}\u{11C36}\u{11C38}\u{11C39}\u{11C3A}\u{11C3B}\u{11C3C}\u{11C3D}\u{11C3E}\u{11C3F}\u{11C50}\u{11C51}\u{11C52}\u{11C53}\u{11C54}\u{11C55}\u{11C56}\u{11C57}\u{11C58}\u{11C59}\u{11C92}\u{11C93}\u{11C94}\u{11C95}\u{11C96}\u{11C97}\u{11C98}\u{11C99}\u{11C9A}\u{11C9B}\u{11C9C}\u{11C9D}\u{11C9E}\u{11C9F}\u{11CA0}\u{11CA1}\u{11CA2}\u{11CA3}\u{11CA4}\u{11CA5}\u{11CA6}\u{11CA7}\u{11CA9}\u{11CAA}\u{11CAB}\u{11CAC}\u{11CAD}\u{11CAE}\u{11CAF}\u{11CB0}\u{11CB1}\u{11CB2}\u{11CB3}\u{11CB4}\u{11CB5}\u{11CB6}\u{1E000}\u{1E001}\u{1E002}\u{1E003}\u{1E004}\u{1E005}\u{1E006}\u{1E008}\u{1E009}\u{1E00A}\u{1E00B}\u{1E00C}\u{1E00D}\u{1E00E}\u{1E00F}\u{1E010}\u{1E011}\u{1E012}\u{1E013}\u{1E014}\u{1E015}\u{1E016}\u{1E017}\u{1E018}\u{1E01B}\u{1E01C}\u{1E01D}\u{1E01E}\u{1E01F}\u{1E020}\u{1E021}\u{1E023}\u{1E024}\u{1E026}\u{1E027}\u{1E028}\u{1E029}\u{1E02A}\u{1E944}\u{1E945}\u{1E946}\u{1E947}\u{1E948}\u{1E949}\u{1E94A}\u{1E950}\u{1E951}\u{1E952}\u{1E953}\u{1E954}\u{1E955}\u{1E956}\u{1E957}\u{1E958}\u{1E959};
