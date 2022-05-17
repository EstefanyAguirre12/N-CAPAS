import { API_RESPONSE } from "./common";

export interface BedResponse extends API_RESPONSE {
  data: Bed[];
}

export interface Bed {
  id: number;
  number: number;
  tenantid: Tenantid;
}

export interface Tenantid {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  status: string;
}
