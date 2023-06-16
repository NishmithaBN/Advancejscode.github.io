//Throttle in JavaScript

const throttle = (delay, fn) => {
    let inThrottle = false;
  
    return args => {
      if (inThrottle) {
        return;
      }
  
      inThrottle = true;
      fn(args);
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    };
  };