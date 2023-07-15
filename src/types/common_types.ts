export interface Tag {
  name: string;
  active: boolean;
}

export type Tags = Tag[];

interface User {
  id: string;
  type: UserType;
  email: string;
  name: string;
  address: Address | null; // null if service provider
  phone: number;
  ip_address: {
    sign_up: number;
    recent: number;
  };
  password: string;
  last_login: string;
  user_agent: string;
  past_bookings: [PastBooking];
  service: IService | null; // null if normal user
}

export type Services = IService[];

export interface IService {
  name: string;
  type: string;
  banner: string;
  address: Address;
  packages: string[];
  rating: number;
  time: {
    open: string;
    close: string;
  };
}

export interface IPackage {
  id: string;
  name: string;
  price: number;
  discount: number;
  image: string;
  locationType: TPackageLocation;
  category: TCategory;
}

interface Appointment {
  id: string;
  on_site: boolean;
  date_time: Date;
  transaction_id: string;
  state: AppointmentState;
  package_id: string;
}

interface Address {
  lat_long: [number, number];
  zip: number;
  address_line: string;
  city: string;
  state: string;
  country: string;
}

interface ServiceType {
  id: string;
  type: string;
  requires_gender: boolean;
}

interface PastBooking {
  id: string;
  date: Date;
  price: number;
  appointment_id: string;
}

export interface IEmployee {
  id: number;
  name: string;
  imageURL: string;
}

type UserType = "customer" | "service_provider";
export type TPackageLocation = "home" | "on_site" | "both";
type AppointmentState = "completed" | "upcoming" | "cancelled" | "delayed";
type TCategory = "men" | "women" | "both";
