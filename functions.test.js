

test('return capitalized first letter', () =>{
  expect(functions.capitalize("hello dear friends!!!")).toBe("Hello dear friends!!!");
})


test('return reverse string', () =>{
  expect(functions.reverseString("Hello how are you")).toBe("uoy era woh olleH");
})

// calculator

test('plus', () =>{
  expect(functions.calculator.plus(2, 4)).toBe(6);
})

test('minus', () =>{
  expect(functions.calculator.minus(6, 4)).toBe(2);
})

test('multiply', () =>{
  expect(functions.calculator.multiply(6, 4)).toBe(24);
})

test('divide', () =>{
  expect(functions.calculator.divide(8, 4)).toBe(2);
})

// caesar test

test('function shifts one word', () => {
  expect(functions.caesar('hello', 4)).toBe('lipps');
})

test('check z to a', () => {
  expect(functions.caesar('zanzibar', 1)).toBe('aboajcbs');
})

test('uppercase sensitive', () => {
  expect(functions.caesar('hElLo', 1)).toBe('iFmMp');
})

test('function shifts by one a sentence', () => {
  expect(functions.caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test('function shifts by number more than one', () => {
  expect(functions.caesar('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
})

test('test punctuation', () => {
  expect(functions.caesar('attack at dawn, or I will', 5)).toBe('fyyfhp fy ifbs, tw N bnqq');
})

// analyze array

test('analyze array', () => {
  expect(functions.analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4,  min: 1,  max: 8,  length: 6})
})
