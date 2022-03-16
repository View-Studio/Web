function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}
