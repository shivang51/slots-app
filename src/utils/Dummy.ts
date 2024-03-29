import {
  IEmployee,
  IPackage,
  IPackages,
  IServices,
  Tags,
} from "@/types/common_types";

export let DummyTags: Tags = [
  { name: "Verified", active: false },
  { name: "Men", active: false },
  { name: "Women", active: false },
  { name: "Open", active: false },
];
export let DummyPackageFilters: Tags = [
  { name: "Haircut", active: false },
  { name: "Pedicure", active: false },
  { name: "Women", active: false },
  { name: "Manicure", active: false },
  { name: "Men", active: false },
];
export let DummyPackageTags: string[] = ["haircut", "men", "women", "pet care"];

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

export let DummyPackages: IPackages = [
  {
    id: "s1",
    name: "Haircut & Styling",
    price: 45,
    discount: 5,
    image:
      "https://www.realmenrealstyle.com/wp-content/uploads/2022/06/mens-haircut-styles.jpg",
    locationType: "both",
    category: "both",
  },
  {
    id: "s2",
    name: "Manicure & Pedicure",
    price: 60,
    discount: 10,
    image:
      "https://img.freepik.com/free-photo/closeup-photo-female-feet-spa-salon-pedicure-manicure-procedure-soft-focus-image_186202-6443.jpg",
    locationType: "on site",
    category: "women",
  },
  {
    id: "s3",
    name: "Color Treatment",
    price: 80,
    discount: 15,
    image:
      "https://images.herzindagi.info/image/2020/Dec/balayage-hair-colour-main.jpg",
    locationType: "on site",
    category: "both",
  },
  {
    id: "m1",
    name: "Swedish Massage",
    price: 70,
    discount: 10,
    image:
      "https://grazia.wwmindia.com/content/2022/jul/swedishcover11657021031.jpg",
    locationType: "both",
    category: "both",
  },
  {
    id: "m2",
    name: "Deep Tissue Massage",
    price: 85,
    discount: 15,
    image:
      "https://linspadubai.com/assets/images/blog/deep-tissue-massage-lin-massage-spa-business-bay-dubai.jpg",
    locationType: "on site",
    category: "both",
  },
  {
    id: "m3",
    name: "Aromatherapy Massage",
    price: 75,
    discount: 5,
    image:
      "https://bodhithaimassage.com/wp-content/uploads/2021/10/Thai-Aromatherapy.jpg",
    locationType: "both",
    category: "both",
  },
  {
    id: "t1",
    name: "Small Tattoo",
    price: 150,
    discount: 0,
    image:
      "https://www.fashionlady.in/wp-content/uploads/2016/08/small-tattoos-with-meaning-for-girls.jpg",
    locationType: "on site",
    category: "both",
  },

  {
    id: "t2",
    name: "Medium Tattoo",
    price: 300,
    discount: 10,
    image:
      "https://i.pinimg.com/736x/61/8d/3c/618d3c39a70a13db5ac1e7f7ebc90daa--cicada-tattoo-tattoo-feather.jpg",
    locationType: "on site",
    category: "both",
  },

  {
    id: "t3",
    name: "Large Tattoo",
    price: 500,
    discount: 20,
    image:
      "https://cdn-dkjbd.nitrocdn.com/qNmQqveZKwMUNeDNlMPAziVFOeKpgoEc/assets/images/optimized/rev-0b19392/wp-content/uploads/large-back-tattoos-men.jpg",
    locationType: "on site",
    category: "both",
  },
  {
    id: "p1",
    name: "Basic Grooming",
    price: 40,
    discount: 5,
    image: "https://probreeds.in/wp-content/uploads/2020/07/pet-groom.jpg",
    locationType: "both",
    category: "both",
  },
  {
    id: "p2",
    name: "Premium Grooming",
    price: 70,
    discount: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0521/5784/1585/products/71sl-rb-DmL_1024x1024.jpg?v=1680938507",
    locationType: "both",
    category: "both",
  },
  {
    id: "p3",
    name: "Pet Boarding",
    price: 30,
    discount: 0,
    image:
      "https://images.squarespace-cdn.com/content/v1/5b631cba5b409b413bb3a633/1562078308410-N9774YB7LWKPCCV7UATK/petboard4.jpg",
    locationType: "on site",
    category: "both",
  },
];

export let DummyServices: IServices = [
  {
    id: "0",
    name: "Bark and Bubbles",
    typeId: 3,
    banner:
      "https://www.pawspace.in/wp-content/uploads/2022/07/Layer-1-3-1024x605.png",
    address: {
      lat_long: [34.0522, -118.2437],
      zip: 90001,
      address_line: "101 Bark Lane",
      city: "Los Angeles",
      state: "California",
      country: "USA",
    },
    packages: ["s1", "s2", "s3"],
    rating: 4.2,
    time: {
      open: "09:00",
      close: "18:00",
    },
  },
  {
    id: "1",
    name: "Glamour Salon",
    typeId: 0,
    banner:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hair_Salon_Stations.jpg/420px-Hair_Salon_Stations.jpg",
    address: {
      lat_long: [40.7128, -74.006],
      zip: 10001,
      address_line: "205 Glamour Street",
      city: "New York",
      state: "New York",
      country: "USA",
    },
    packages: ["s1", "s2"],
    rating: 4.5,
    time: {
      open: "10:00",
      close: "21:00",
    },
  },
  {
    id: "2",
    name: "Inked Paradise",
    typeId: 1,
    banner:
      "https://www.shutterstock.com/image-vector/design-poster-tattoo-studio-two-260nw-1150367480.jpg",
    address: {
      lat_long: [41.8781, -87.6298],
      zip: 60601,
      address_line: "500 Inked Street",
      city: "Chicago",
      state: "Illinois",
      country: "USA",
    },
    packages: ["t1", "t2", "t3"],
    rating: 4.9,
    time: {
      open: "12:00",
      close: "23:00",
    },
  },
  {
    id: "3",
    name: "Elegant Massages",
    typeId: 2,
    banner:
      "https://images.template.net/83906/Massage-Parlour-Promotion-Banner-Template.jpeg",
    address: {
      lat_long: [29.7604, -95.3698],
      zip: 77001,
      address_line: "800 Relaxation Boulevard",
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
    packages: ["m1", "m2", "m3"],
    rating: 4.8,
    time: {
      open: "10:00",
      close: "22:00",
    },
  },
  {
    id: "4",
    name: "Posh Paws",
    typeId: 3,
    banner:
      "https://www.sbdcnet.org/wp-content/uploads/2019/02/jamie-street-s9Tf1eBDFqw-unsplash-2048x1536.jpg",
    address: {
      lat_long: [33.4484, -112.074],
      zip: 85001,
      address_line: "900 Furry Friends Road",
      city: "Phoenix",
      state: "Arizona",
      country: "USA",
    },
    packages: ["p1", "p2", "p3"],
    rating: 4.6,
    time: {
      open: "09:00",
      close: "19:00",
    },
  },
  {
    id: "5",
    name: "Dazzling Hair",
    typeId: 0,
    banner:
      "https://img.freepik.com/premium-photo/working-places-masters-hairdressing-beauty-salon-modern-design-interior_285484-133.jpg?w=2000",
    address: {
      lat_long: [39.9526, -75.1652],
      zip: 19101,
      address_line: "1000 Shine Street",
      city: "Philadelphia",
      state: "Pennsylvania",
      country: "USA",
    },
    packages: ["s1", "s3"],
    rating: 4.7,
    time: {
      open: "10:00",
      close: "20:00",
    },
  },
  {
    id: "6",
    name: "Body Art Studio",
    typeId: 1,
    banner:
      "https://c7.alamy.com/comp/2FWHTM9/tattoo-studio-banner-2FWHTM9.jpg",
    address: {
      lat_long: [29.4241, -98.4936],
      zip: 78201,
      address_line: "1100 Art Alley",
      city: "San Antonio",
      state: "Texas",
      country: "USA",
    },
    packages: ["t1", "t3"],
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
