const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions');

test('capitalize', () => {
  expect(capitalize("my gosh this is hot in here")).toBe("MY GOSH THIS IS HOT IN HERE");
});

test('reverse', () => {
    expect(reverseString("GeeksforGeeks")).toBe("skeeGrofskeeG");
});

test('calculator add', () => {
    expect(calculator.add(5,10)).toBe(15);
});

test('calculator substract', () => {
    expect(calculator.subtract(10,5)).toBe(5);
});

test('calculator divide', () => {
    expect(calculator.divide(10,5)).toBe(2);
});

test('calculator multiply', () => {
    expect(calculator.multiply(10,5)).toBe(50);
});

test('caesarCipher', () => {
    expect(caesarCipher('aa',2)).toBe("cc");
});
test('caesarCipher', () => {
    expect(caesarCipher('yz',2)).toBe("ab");
});
test('caesarCipher', () => {
    expect(caesarCipher('A!',2)).toBe("C!");
});
test('caesarCipher', () => {
    expect(caesarCipher('Z',2)).toBe("B");
});
test('caesarCipher', () => {
    expect(caesarCipher('Hello World!',23)).toBe("Ebiil Tloia!");
});

test("analyzeArray" , () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({average: 3, min: 1, max: 5, length: 5}) 
})
