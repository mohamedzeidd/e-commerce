import { CountryCodes } from "../constants/country-codes.constant";
import { PERMISSIONS } from "../constants/permissions.contant";

export interface JwtPayload {
  id: string;
  role: string;
  isActive: boolean;
  isBlocked: boolean;
  defCountry: CountryCodes;
}


export interface LoggedUser {
  id?: string;
  role: string;
  isActive: boolean;
  isBlocked: boolean;
  permissions: PERMISSIONS[];
  defCountry?: CountryCodes;
}
