
let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      console.log("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
//конфликт
  
  worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
  
  console.log( worker.slow(2) ); // работает
  console.log( worker.slow(2) ); // работает
  
  