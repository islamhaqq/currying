Function.prototype.curry = function () {
  const theOriginalFunctionDefinitionWeAreCurrying = this;
  const theFirstGroupOfParameters = arguments;

  return function() {
    const theSecondGroupOfParameters = arguments;

    return theOriginalFunctionDefinitionWeAreCurrying(...theFirstGroupOfParameters, ...theSecondGroupOfParameters);
  }
}
