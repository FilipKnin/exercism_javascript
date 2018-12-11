export

function solve(x,y) {
  if (x > 10 || y > 10) {
    return 0;
  } else if ((x <= 10 && x > 5) && (y <= 10 && y >= 0)) {
    return 1;
  } else if ((y <= 10 && y > 5) && (x <= 10 && x >= 0)) {
    return 1;
  } else if ((x <= 5 && x > 1) && (y <= 10 && y >= 0)) {
    return 5;
  } else if ((y <= 5 && y > 1) && (x <= 10 && x >= 0)) {
    return 5;
  } else if ((x <= 1 && x >= 0) && (y <= 10 && y >= 0)) {
    return 10;
  } else if ((y <= 1 && y >= 0) && (x <= 10 && x >= 0)) {
    return 10;
  } else if (x != NaN || y != NaN) {
    return null;
  }
}
