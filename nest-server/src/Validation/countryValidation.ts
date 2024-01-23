// import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
// import { CountryType } from "src/types/country";

// @Injectable()
// export class CountryValidationPipe implements PipeTransform {

//   readonly allowedCountries = [
//     CountryType.us,
//     CountryType.il,
//     CountryType.ru
//   ];

//   transform(value: any) {
//     if (!this.isCountryValid(value)) {
//       throw new BadRequestException(`${value} is not a valid country`);
//     }
//     return value;
//   }

//   private isCountryValid(country: any) {
//     return this.allowedCountries.indexOf(country) !== -1;
//   }

// }

