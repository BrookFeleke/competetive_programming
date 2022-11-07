function kClosest(points: number[][], k: number): number[][] {
    let distance: number[] = [];
  
    for (let i = 0; i < points.length; i++) {
      distance[i] = points[i][0] ** 2 + points[i][1] ** 2;
    }
  
    distance.sort(function (a, b) {
      return a - b;
    });
  
    const res: number[][] = [];
  
    for (let i = 0; i < points.length; i++) {
      let dist = points[i][0] ** 2 + points[i][1] ** 2;
  
      if (dist <= distance[k - 1]) res.push([points[i][0], points[i][1]]);
    }
  
    return res;
  }
