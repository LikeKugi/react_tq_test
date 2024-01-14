export interface IGetDataQuery {
  endpoint: string;
  page?: number;
  per_page?: number;
  queryString?: string | null;
}

export interface IFetchDetailsPostResponse {
  post: IPost;
  user: IUser;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IGeo {
  lat: string;
  lng: string;

}

export interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo,
}

export interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
