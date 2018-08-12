export interface UserQuery {
  searchedText: string;
  searchedType: string;
}
export interface ShortDataType {
  name?: string;
  flag?: string;
  alpha3Code?: string;
}

export interface Country {
  name?: string;
  alpha3Code?: string;
  flag?: string;
  latlng?: number[];
}
