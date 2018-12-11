export

function solve(x,y) {
  if (x > 10 || y > 10) {
    return 0;
  } else if ((x <= 10 && x > 5) && (y <= 10 && y >= 0)) {
    return 1;
  } 
}
