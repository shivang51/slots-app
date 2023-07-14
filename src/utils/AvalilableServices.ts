import Icons from "./Icons";

interface IAvailableService {
  id: number;
  name: string;
  requires_gender: boolean;
  icon: any;
  icon_150: any;
}

export namespace AvailableServices {
  export const Saloon: IAvailableService = {
    id: 0,
    name: "Salon",
    requires_gender: true,
    icon: Icons.saloon,
    icon_150: Icons.serviceSaloon,
  };

  export const TattooParlor: IAvailableService = {
    id: 1,
    name: "Tattoo Parlor",
    requires_gender: true,
    icon: Icons.massage,
    icon_150: Icons.serviceTattoo,
  };

  export const MassageParlor: IAvailableService = {
    id: 2,
    name: "Massage Parlor",
    requires_gender: true,
    icon: Icons.massage,
    icon_150: Icons.serviceMassage,
  };

  export const PetCare: IAvailableService = {
    id: 3,
    name: "Pet Care",
    requires_gender: true,
    icon: Icons.massage,
    icon_150: Icons.petCare150,
  };

  export const All = [Saloon, TattooParlor, MassageParlor, PetCare];
}

export const availableServiceFromId = (id: number) => {
  return AvailableServices.All[id];
};
