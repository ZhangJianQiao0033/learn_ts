interface IKun<Type> {
  name: Type,
  age: number,
  slogan: Type
}

const kunkun: IKun<string> = {
  name: "why",
  age: 19,
  slogan: "taimei"
}

export {}