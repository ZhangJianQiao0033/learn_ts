interface ILength {
  length: number
}

function getLength(arg: {length: number}) {
  return arg.length
}


function getInfo<T extends ILength>(args: T): T {
  return args
}