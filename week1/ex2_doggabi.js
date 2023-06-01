function solution(wallpaper) {
  let minX = 50;
  let maxX = 0;
  let minY = 50;
  let maxY = 0;

  for(let i=0; i<wallpaper.length; i++) {
    for(let j=0; j<wallpaper[i].length; j++){
      if(wallpaper[i][j] === "#"){
        minX = Math.min(minX, i)
        maxX = Math.max(maxX, i)
        minY = Math.min(minY, j)
        maxY = Math.max(maxY, j)
      }
    }
  }

  return [minX,minY,maxX+1,maxY+1]
}