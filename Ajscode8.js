// javascript pipe
pipe = (...functions) => (value) => {
    debugger;
  
    return functions.reduce((currentValue, currentFunction) => {
      debugger;
  
      return currentFunction(currentValue);
    }, value);
  };