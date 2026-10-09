class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Developer extends Person {
  language: string;
  constructor(name: string, language: string){
    super(name);
    this.language = language;
  }
}