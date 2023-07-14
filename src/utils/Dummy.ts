import { Tags, Services, IPackage, IEmployee } from "./Types";

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
    name: "Belle Curls",
    address: {
      address_line: "",
      city: "",
      zip: 123456,
      country: "Honbo Land",
      lat_long: [32.1024, 77.5619],
      state: "Inoooo",
    },
    banner:
      "https://www.joonsquare.com/usermanage/image/business/prince-hair-art-saloon-udupi-36915/prince-hair-art-saloon-udupi-unnamed-1-.jpg",
    packages: ["122"],
    time: {
      open: Date(),
      close: Date(),
    },
    type: "salon",
    rating: 4.5,
  },
  {
    name: "Belle Curls",
    address: {
      address_line: "",
      city: "",
      zip: 123456,
      country: "Honbo Land",
      lat_long: [32.1024, 77.5619],
      state: "Inoooo",
    },
    banner:
      "https://www.joonsquare.com/usermanage/image/business/prince-hair-art-saloon-udupi-36915/prince-hair-art-saloon-udupi-unnamed-1-.jpg",
    packages: ["122"],
    time: {
      open: Date(),
      close: Date(),
    },
    type: "hoboo",
    rating: 4.5,
  },
  {
    name: "Belle Curls",
    address: {
      address_line: "",
      city: "",
      zip: 123456,
      country: "Honbo Land",
      lat_long: [32.1024, 77.5619],
      state: "Inoooo",
    },
    banner:
      "https://www.joonsquare.com/usermanage/image/business/prince-hair-art-saloon-udupi-36915/prince-hair-art-saloon-udupi-unnamed-1-.jpg",
    packages: ["122"],
    time: {
      open: Date(),
      close: Date(),
    },
    type: "hoboo",
    rating: 4.5,
  },
  {
    name: "Belle Curls",
    address: {
      address_line: "",
      city: "",
      zip: 123456,
      country: "Honbo Land",
      lat_long: [32.1024, 77.5619],
      state: "Inoooo",
    },
    banner:
      "https://www.joonsquare.com/usermanage/image/business/prince-hair-art-saloon-udupi-36915/prince-hair-art-saloon-udupi-unnamed-1-.jpg",
    packages: ["122"],
    time: {
      open: Date(),
      close: Date(),
    },
    type: "hoboo",
    rating: 4.5,
  },
  {
    name: "Belle Curls",
    address: {
      address_line: "",
      city: "",
      zip: 123456,
      country: "Honbo Land",
      lat_long: [32.1024, 77.5619],
      state: "Inoooo",
    },
    banner:
      "https://www.joonsquare.com/usermanage/image/business/prince-hair-art-saloon-udupi-36915/prince-hair-art-saloon-udupi-unnamed-1-.jpg",
    packages: ["122"],
    time: {
      open: Date(),
      close: Date(),
    },
    type: "hoboo",
    rating: 4.5,
  },
  {
    name: "Belle Curls",
    address: {
      address_line: "",
      city: "",
      zip: 123456,
      country: "Honbo Land",
      lat_long: [32.1024, 77.5619],
      state: "Inoooo",
    },
    banner:
      "https://www.joonsquare.com/usermanage/image/business/prince-hair-art-saloon-udupi-36915/prince-hair-art-saloon-udupi-unnamed-1-.jpg",
    packages: ["122"],
    time: {
      open: Date(),
      close: Date(),
    },
    type: "hoboo",
    rating: 4.5,
  },
];

export const DummyEmployees: IEmployee[] = [
  {
    id: 0,
    name: "Harsh Banbjare",
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
