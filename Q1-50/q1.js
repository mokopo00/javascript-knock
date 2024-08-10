// 問題）const a = { a: '1', b: '2' }とconst b = { b: '3', c: '4' } をマージしたcを出力してください
// 解答）{ a:'1', b:'3', c: '4' }

const a = { a: '1', b: '2' };
const b = { b: '3', c: '4' };

const c = Object.assign(a, b);
console.log(c)