// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-rest-put-const.case
// - src/dstr-assignment/error/for-of.template
/*---
description: The assignment target should obey `const` semantics. (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [const, destructuring-binding]
flags: [generated]
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
const c = null;

var counter = 0;

assert.throws(TypeError, function() {
  for ([ ...c ] of [[1]]) {
    counter += 1;
  }
  counter += 1;
});

assert.sameValue(counter, 0);
