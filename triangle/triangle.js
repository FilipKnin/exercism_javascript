
const Triangle = function (side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.kind = function () {

const allSides = [this.side1, this.side2, this.side3];
// create variable which stores value of first side;

//loop over array of three sides

  if ( ( (this.side1 + this.side2) / 2) === (this.side3)) {
    return 'equilateral';
  } else if (
    (this.side1 === this.side2) || (this.side1 === this.side3)


  ) {
    return 'isosceles';
  }
};

module.exports = Triangle;