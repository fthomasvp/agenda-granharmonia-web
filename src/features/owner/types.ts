// Create folder for `Apartment` type
export type TApartment = {
  id?: string;
  createdAt?: string;
  block: string;
  number: string;
};

export type TUser = {
  createdAt?: string;
  fullName: string;
  email: string;
  phone: string;
};

export type TOwner = {
  id?: string;
  createdAt?: string;
  apartmentId: string;
  apartment: TApartment;
  userId: string;
  // Create folder for `User` type
  user: TUser;
};
