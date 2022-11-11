let STYLE = 1; //001
let CLASS = 1 << 1; //010
let CHILDREN = 1 << 2; //100

// 授权 |
let vnodeType = STYLE | CLASS; // 011

// 判断 &
console.log("vnodeType的类型 STYLE", !!(vnodeType & STYLE)); //true
console.log("vnodeType的类型 CLASS", !!(vnodeType & CLASS)); //true
console.log("vnodeType的类型 CHILDREN", !!(vnodeType & CHILDREN)); //false

// 删除授权 ^
vnodeType ^= CLASS; //001
console.log("vnodeType的类型 STYLE", !!(vnodeType & STYLE)); //true
console.log("vnodeType的类型 CLASS", !!(vnodeType & CLASS)); //false
console.log("vnodeType的类型 CHILDREN", !!(vnodeType & CHILDREN)); //false
