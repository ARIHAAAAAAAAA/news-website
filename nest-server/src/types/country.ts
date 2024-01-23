import { registerEnumType } from "@nestjs/graphql";

export enum CountryType {
    us,
    il,
    ru
}
registerEnumType(CountryType, {
    name: 'CountryType',
  });