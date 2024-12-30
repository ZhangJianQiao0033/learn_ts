
type ID = number | string

const id1: ID = "ABC"
const id2: ID = 123


type NewType = number & string

interface Ikun {
  name: string
  age: number
}

interface IConder {
  name : string
  coding: () => void
}

const info: Ikun & IConder = {
  name: "why",
  age: 18,
  coding: function() {
    console.log("coding");
  }
}
info.coding()

export {}