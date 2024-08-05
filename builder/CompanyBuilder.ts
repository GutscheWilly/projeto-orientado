import { Company } from "./Company";
import { Builder } from "./Builder";
import { PersonBuilder } from "./PersonBuilder";

export class CompanyBuilder implements Builder {
  private responsibleBuilder: PersonBuilder = new PersonBuilder();
  private company: Company = new Company();

  setName(name: string): this {
    this.responsibleBuilder.setName(name);
    return this;
  }

  setDocument(document: string): this {
    this.responsibleBuilder.setDocument(document);
    return this;  
  }

  getCompany(): Company {
    if (this.responsibleBuilder.isPersonComplete()) {
      const responsible = this.responsibleBuilder.getPerson();
      this.company.responsible = responsible;
      return this.company;
    }

    throw new Error('Responsible does bot have name or document')
  }
}
