import { Link, Address } from './company.model';

export interface Officer {
  etag: string;
  kind: string;
  items_per_page: number;
  links: Link;
  items: OfficerItem[];
}
export interface OfficerItem {
  address: string;
  name: string;
  appointed_on: string;
  officer_role: string;
  links: Link;
  date_of_birth: Dob;
  occupation: string;
  country_of_residence: string;
  nationality: string;
}
export interface Dob {
  month: number;
  year: number;
}
