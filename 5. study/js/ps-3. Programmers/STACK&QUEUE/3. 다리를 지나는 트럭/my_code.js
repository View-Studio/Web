function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let onBridgeTruck_weight = 0;
  const NumberOfTruck = truck_weights.length;
  const onBridgeTruck = [];
  const arriveTruck = [];
  const elapsedTime = [];

  for (let i = 0; arriveTruck.length !== NumberOfTruck; i++) {
    if (
      onBridgeTruck_weight + truck_weights[0] <= weight &&
      onBridgeTruck.length < bridge_length
    ) {
      onBridgeTruck.push(truck_weights.shift());
      answer++;
      for (let i = 0; i < elapsedTime.length; i++) {
        elapsedTime[i] += 1;
      }
      elapsedTime.push(1);
      onBridgeTruck_weight = onBridgeTruck.reduce(
        (accumulator, curr) => accumulator + curr
      );
    } else {
      answer++;
      for (let i = 0; i < elapsedTime.length; i++) {
        elapsedTime[i] += 1;
      }
    }

    if (elapsedTime[0] === bridge_length) {
      let escape = onBridgeTruck.shift();
      arriveTruck.push(escape);
      elapsedTime.shift();
      if (onBridgeTruck.length === 0) {
        onBridgeTruck_weight = 0;
      } else {
        onBridgeTruck_weight -= escape;
      }
    }
  }

  return answer + 1;
}
