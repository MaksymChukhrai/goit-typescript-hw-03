class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[] = [];
  
    constructor(door: boolean, key: Key) {
      this.door = door;
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door && this.key.getSignature() === person.getKey().getSignature()) {
        this.tenants.push(person);
        console.log('Person came in.');
      } else {
        console.log('Person can\'t come in.');
      }
    }
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('Door opened.');
      } else {
        console.log('Door remains closed.');
      }
    }
  }
  
  const key = new Key();
  const house = new MyHouse(false, key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  