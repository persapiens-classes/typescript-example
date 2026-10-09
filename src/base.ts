export class Ponto {
  x: number; 
  y: number;
  constructor(x: number, y: number) {
    this.x = x; 
    this.y = y;
  }
  static distancia(a: Ponto, b: Ponto) :number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
  distancia2(b: Ponto) :number {
    return Ponto.distancia(this, b);
  }

}
const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10)
console.log(Ponto.distancia(p1, p2));
console.log(p1.distancia2(p2));