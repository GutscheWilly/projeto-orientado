import { CompanyBuilder } from "./CompanyBuilder";
import { PersonBuilder } from "./PersonBuilder";

const personBuilder = new PersonBuilder();

const person1 = personBuilder.setName('willy').setDocument('1234').getPerson();

const companyBuilder = new CompanyBuilder();

const company1 = companyBuilder.setName('jamil').setDocument('57732').getCompany();

console.log(person1);
console.log(company1);
