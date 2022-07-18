class SomeClass {
  ranges = [];

  static get example() {
    return 'e.g., [1,10], [5, 15]';
  }

  add(range) {
    if (!Array.isArray(range)) {
      throw new Error(`Invalid type. You should pass an array with two numbers, ${this.constructor.example}`);
    }

    if (range.length !== 2) {
      throw new Error(`Invalid length. You should pass two elements inside the array, ${this.constructor.example}`);
    }

    if (range[0] > range[1]) {
      throw new Error(`Validation error. The first number should be lower than the second one, ${this.constructor.example}`);
    }

    if (this.mergeRanges(range) == false) {
      this.ranges.push(range);
    }

  }

  match(number) {
    if (typeof number !== 'number') {
      throw new Error(`Invalid type. You should pass a number`);
    }

    return this.ranges.some(range => number >= range[0] && number <= range[1]);
  }

  mergeRanges(range) {
    console.log('checking for possible merging... value:', range);

    const indexes = [];

    let hasPossibleMergings = this.ranges.reduce((previousValue, currentValue, currentIndex) => {
      console.log({
        previousValue,
        currentValue
      });

      let firstValue, secondValue;

      if (range[0] >= currentValue[0]) {
        firstValue = true;
      }

      if (range[1] <= currentValue[1]) {
        secondValue = true;
      }

      if (firstValue === true || secondValue === true) {
        indexes.push(currentIndex);
      }

      return [firstValue || previousValue[0], secondValue || previousValue[1]];
    }, [false, false]);

    if (hasPossibleMergings[0] === true && hasPossibleMergings[1] === true) {
      console.log('found it! joining the indexes: ', indexes);
      console.log('values:', this.ranges.filter((range, index) => indexes.includes(index)))

      let merge = this.ranges.reduce((previousValue, currentValue) => {
        return {
          min: currentValue[0] < previousValue.min ? currentValue[0] : previousValue.min,
          max: currentValue[1] > previousValue.max ? currentValue[1] : previousValue.max,
        };
      }, {
        min: this.ranges[indexes[0]][0],
        max: this.ranges[indexes[0]][1]
      })

      this.ranges = this.ranges.filter((range, index) => !indexes.includes(index));
      this.ranges.push([merge.min, merge.max])

      return true;
    }

    return false;
  }
}

const test = new SomeClass();

test.add([1, 10]);
test.add([15, 20]);
test.add([8, 16]);
console.log({
  'ranges': test.ranges
});
console.log(test.match(2));