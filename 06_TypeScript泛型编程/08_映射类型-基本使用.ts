type MapPerson<Type> = {

  [Property in keyof Type]: Type[Property]
}



interface IPerson {
  name: string
  age: number
}





export {}