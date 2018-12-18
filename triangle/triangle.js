
const Triangle = function (side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.kind = function () {


// create variable which stores all three sides
// create variable which stores value of first side;

//loop over array of three sides

  if ( ( (this.side1 + this.side2) / 2) === (this.side3)) {
    return 'equilateral';
  } else {
    return 'test'
  }
};

module.exports = Triangle;
