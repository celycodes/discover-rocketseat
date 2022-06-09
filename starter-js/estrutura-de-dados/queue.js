// modelando
class Queue {
  constructor() {
    this.data = [];  
  }

  enqueue(item) {
     this.data.push(item); 
     console.log(`${item} chegou na fila!`)
  }

  dequeue() {
    const item = this.data.shift();
    console.log(`${item} saiu da fila!`) 
  }
}

// utilizando
const fila = new Queue()
fila.enqueue('Lassy');
fila.enqueue('Luiz');
fila.enqueue('Celenny');
fila.dequeue();
fila.dequeue();
fila.dequeue();