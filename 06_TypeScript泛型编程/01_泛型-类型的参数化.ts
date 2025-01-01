function foo(name, age) {

}

foo("why", 19)
foo("kobe", 29)



function bar<Type>(arg: Type) {
  return arg
}

const res1 = bar<number>(123)

const res2 = bar("aaaa")

export {}