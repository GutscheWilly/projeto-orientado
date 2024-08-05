import { Builder } from "./Builder";
import { Person } from "./Person";

export class PersonBuilder implements Builder {
  private person: Person = new Person();

  setName(name: string): this {
    this.person.name = name;
    return this;
  }

  setDocument(document: string): this {
    this.person.document = document;
    return this;
  }

  isPersonComplete(): boolean {
    return this.person.name !== undefined && this.person.document !== undefined;
  }

  getPerson(): Person {
    if (this.isPersonComplete()) {
      return this.person;
    }

    throw new Error('Person does not have name or document');
  }

  reset(): void {
    this.person = new Person();
  }
}
