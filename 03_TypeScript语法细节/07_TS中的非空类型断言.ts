// 定义接口
interface IPerson {
  name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: "why",
  age: 18
}

console.log(info.friend?.name);

info.friend!.name = "lpne"

export{}