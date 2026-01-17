import { CountryCodes } from "../constants/country-codes.constant";

export interface JwtPayload {
  id: string;
//   role: string;
  isActive: boolean;
  isBlocked: boolean;
  defCountry: CountryCodes;
}