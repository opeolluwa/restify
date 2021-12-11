const obj = {
    name: "whatever",
    age: 34,
    sex: 89
}

const arr = Object.keys(obj)

const quest = "?"

const qq = `(${Array.from("?".repeat(arr.length)).join(",")})`
console.log(arr);

console.log(qq);


const fi = {name: 44}

console.log(fi == null);