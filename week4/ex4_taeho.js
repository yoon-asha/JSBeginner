function parseToMinute(timeStr) {
    const hour = parseInt(timeStr.slice(0, 2));
    const min = parseInt(timeStr.slice(-2));
    return hour * 60 + min;
  }
  
  function solution(plans) {
    
    plans.sort((a, b) => parseToMinute(a[1]) - parseToMinute(b[1]));
  
    const jobStack = [];
    const done = [];
    let currentTime = 0;  

    while (plans.length > 0) {
        let [name, timeStr, duration] = plans.shift();
        const nextTime = parseToMinute(timeStr);
        if (jobStack.length > 0) {
            let elapsedTime = nextTime - currentTime;
            while (jobStack.length > 0 && elapsedTime > 0) {
                if (jobStack[jobStack.length - 1][1] <= elapsedTime) {
                    let [name, duration] = jobStack.pop();
                    elapsedTime -= duration;
                    done.push(name);
                } else {
                    jobStack[jobStack.length - 1][1] -= elapsedTime;
                    elapsedTime = 0;
                }
            }
        }
      currentTime = nextTime;
      jobStack.push([name, parseInt(duration)]);
    }
  
    while (jobStack.length > 0) {
      done.push(jobStack.pop()[0]);
    }
  
    return done;
  }