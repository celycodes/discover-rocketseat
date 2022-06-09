class Triangulo {
   constructor(base, altura) {
      this.base = base; 
      this.altura = altura;
   } 

   get area() {
      return this.#calcularArea();
   }

   #calcularArea() {
      return this.base * this.altura / 2;
   }
}

let triangle = new Triangulo(5, 4);

console.log(triangle.area) 