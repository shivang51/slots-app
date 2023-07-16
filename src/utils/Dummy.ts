import { IEmployee, IPackage, Services, Tags } from "@/types/common_types";

export let DummyTags: Tags = [
  { name: "Verified", active: false },
  { name: "Men", active: false },
  { name: "Women", active: false },
  { name: "Open", active: false },
];
export let DummyPackageTags: Tags = [
  { name: "Haircut", active: false },
  { name: "Pedicure", active: false },
  { name: "Women", active: false },
  { name: "Manicure", active: false },
  { name: "Men", active: false },
];

export let DummyPackage: IPackage = {
  id: "0",
  name: "Fade Haircut",
  discount: 20,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRMqjSpxOlCF2hHiMgvWIzrYHVQnUQQMAlg&usqp=CAU",
  locationType: "both",
  price: 100,
  category: "men",
};

export let DummyServices: Services = [
  {
    name: "Bark and Bubbles",
    typeId: 3,
    banner: "https://example.com/images/bark-and-bubbles.jpg",
    address: {
      lat_long: [34.0522, -118.2437],
      zip: 90001,
      address_line: "101 Bark Lane",
      city: "Los Angeles",
      state: "California",
      country: "USA",
    },
    packages: ["pkg201", "pkg202", "pkg203"],
    rating: 4.2,
    time: {
      open: "09:00",
      close: "18:00",
    },
  },
  {
    name: "Glamour Salon",
    typeId: 0,
    banner: "https://example.com/images/glamour-salon.jpg",
    address: {
      lat_long: [40.7128, -74.006],
      zip: 10001,
      address_line: "205 Glamour Street",
      city: "New York",
      state: "New York",
      country: "USA",
    },
    packages: ["pkg301", "pkg302", "pkg303"],
    rating: 4.5,
    time: {
      open: "10:00",
      close: "21:00",
    },
  },
  {
    name: "Inked Paradise",
    typeId: 1,
    banner: "https://example.com/images/inked-paradise.jpg",
    address: {
      lat_long: [41.8781, -87.6298],
      zip: 60601,
      address_line: "500 Inked Street",
      city: "Chicago",
      state: "Illinois",
      country: "USA",
    },
    packages: ["pkg401", "pkg402", "pkg403"],
    rating: 4.9,
    time: {
      open: "12:00",
      close: "23:00",
    },
  },
  {
    name: "Elegant Massages",
    typeId: 2,
    banner: "https://example.com/images/elegant-massages.jpg",
    address: {
      lat_long: [29.7604, -95.3698],
      zip: 77001,
      address_line: "800 Relaxation Boulevard",
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
    packages: ["pkg501", "pkg502", "pkg503"],
    rating: 4.8,
    time: {
      open: "10:00",
      close: "22:00",
    },
  },
  {
    name: "Posh Paws",
    typeId: 3,
    banner: "https://example.com/images/posh-paws.jpg",
    address: {
      lat_long: [33.4484, -112.074],
      zip: 85001,
      address_line: "900 Furry Friends Road",
      city: "Phoenix",
      state: "Arizona",
      country: "USA",
    },
    packages: ["pkg601", "pkg602", "pkg603"],
    rating: 4.6,
    time: {
      open: "09:00",
      close: "19:00",
    },
  },
  {
    name: "Dazzling Hair",
    typeId: 0,
    banner: "https://example.com/images/dazzling-hair.jpg",
    address: {
      lat_long: [39.9526, -75.1652],
      zip: 19101,
      address_line: "1000 Shine Street",
      city: "Philadelphia",
      state: "Pennsylvania",
      country: "USA",
    },
    packages: ["pkg701", "pkg702", "pkg703"],
    rating: 4.7,
    time: {
      open: "10:00",
      close: "20:00",
    },
  },
  {
    name: "Body Art Studio",
    typeId: 1,
    banner: "https://example.com/images/body-art-studio.jpg",
    address: {
      lat_long: [29.4241, -98.4936],
      zip: 78201,
      address_line: "1100 Art Alley",
      city: "San Antonio",
      state: "Texas",
      country: "USA",
    },
    packages: ["pkg801", "pkg802", "pkg803"],
    rating: 4.9,
    time: {
      open: "13:00",
      close: "23:00",
    },
  },
];

export const DummyEmployees: IEmployee[] = [
  {
    id: 0,
    name: "Harsh Banjare",
    imageURL:
      "https://static.thehoneycombers.com/wp-content/uploads/sites/6/2021/09/barber-shops-handsome-factory.jpeg",
  },
  {
    id: 1,
    name: "Bella",
    imageURL:
      "https://i0.wp.com/outnowmagazine.com/wp-content/uploads/2021/05/Bella-Poarch.jpg?fit=1640%2C924&ssl=1",
  },
];
