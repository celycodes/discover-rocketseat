// modelagem
class Stack {
  constructor() {
      this.data = [];
      this.top = -1;
  }

  push(value) {
    this.top++;
    this.data[this.top] = value;
    return this.data;
  }

  pop() {
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top];
    delete this.data[this.top];
    this.top--;
    return poppedTop;
  }

  peek() {
     return this.top >= 0 ? this.data[this.top] : undefined
  }
}

// utilizando
const stack = new Stack()
stack.push('Hello World!')
stack.push('stack')
stack.pop()
stack.push('Learning')
stack.push('Data Structures')
console.log(stack.peek())