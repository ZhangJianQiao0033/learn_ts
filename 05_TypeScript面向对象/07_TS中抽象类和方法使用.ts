abstract class Shaoe {
  abstract getArea()
}



class Rectangle {
  constructor(public width: number, public height: number){}
  getArea() {
    return this.width * this.height
  }
}

class Circle {

}


function getArea(xxx) {

}

getArea("三角形")
getArea("园形")
getArea("正方形")

export {}