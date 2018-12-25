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
  alpha2Code?: string;
  alpha3Code?: string;
  flag?: string;
  latlng?: number[];
  altSpellings?: string[];
  nativeName?: string;
  translations?: string[];
  languages?: { name: string; nativeName: string }[];
  callingCodes?: string[];
  topLevelDomain?: string[];
  numericCode?: string;
  currencies?: { code?: string; name?: string }[];
  region?: string;
  subregion?: string;
  demonym?: string;
  area?: string;
  capital?: string;
  population?: string;
  borders?: string[];
  timezones?: string[];
  regionalBlocs?: { acronym?: string }[];
}
