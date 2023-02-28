import { User } from "ababil-auth";
export * from "./utils.js";

export interface Alumni {
  Id: number;
  Name: string;
  GraduationYear?: number;
  Alias?: string;
  Title?: string;
  Classes?: string;
  NIS?: number;
  Status?: number;
  BirthDate?: Date;
  DateOfDeath?: Date;
  Addresses?: string;
  Phones?: string;
  Business?: string;
  ExtraData?: string;
}

export interface UserSLA extends User {
  Alumni?: Alumni;
  suggests?: Alumni[];
}
