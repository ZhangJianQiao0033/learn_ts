class Person {
  name: string
  readonly age:number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p = new Person("z", 12)

export {}