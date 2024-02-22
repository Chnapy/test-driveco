export type Language = "fr" | "en";

export type ChargeBoxType = "kino_pro" | "kino_one" | "kino_urban";

export type ChargeBoxStatus = "free" | "in_use" | "booked" | "offline";

export type LocationPoints = {
  latitude: number;
  longitude: number;
};

export type ChargeBox = {
  identifier: string;
  name: string;
  type: ChargeBoxType;
  location: LocationPoints;
  address: string;
  city: string;
  zipcode: string;
  status: ChargeBoxStatus;
};

export type TranslationMap = {
  "chargebox.status.free": string;
  "chargebox.status.in_use": string;
  "chargebox.status.booked": string;
  "chargebox.status.offline": string;
  "cta.navigate_gmap": string;
  "cta.booking": string;
};

export type Parameters = {
  chargebox_type: Record<
    ChargeBoxType,
    {
      icon: string;
      picture: string;
      name: string;
    }
  >;

  translations: Record<Language, TranslationMap>;
};
