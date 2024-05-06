export interface Company {
  page_number: number;
  kind: string;
  total_results: number;
  items: CompanyItem[];
}

export interface CompanyItem {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  matches: Match;
  description: string;
  links: Link;
  company_number: string;
  title: string;
  company_type: string;
  address: Address;
  kind: string;
  description_identifier: string;
}
export interface Match {
  title: number[];
}
export interface Link {
  self?: string;
  officer?: string;
}
export interface Address {
  premises: string;
  postal_code: string;
  country: string;
  locality: string;
  address_line_1: string;
}
