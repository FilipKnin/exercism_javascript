
const Triangle = function (side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.kind = function () {

  if (
    this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0
  ) {
    throw 'triangles with no size are illegal';
  } else if (
    (this.side1 + this.side2 < this.side3)
    ||
    (this.side2 + this.side3 < this.side1)

  ) {
    throw 'triangles violating triangle inequality are illegal';
  } else if ( ( (this.side1 + this.side2) / 2) === (this.side3) ) {
    return 'equilateral';
  } else if (
    (this.side1 === this.side2) || (this.side1 === this.side3)
    ||
    (this.side2 === this.side3)
  ) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

module.exports = Triangle;
