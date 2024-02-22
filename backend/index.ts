import type {
  ChargeBox,
  ChargeBoxStatus,
  ChargeBoxType,
  LocationPoints,
  Parameters,
} from "@driveco/shared";
import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.addHook("preHandler", (req, res, done) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");

  const isPreflight = /options/i.test(req.method);
  if (isPreflight) {
    return res.send();
  }

  done();
});

const ids = [
  "b00e6c93-0260-4418-b75f-a30059db0e2f",
  "898c5e13-ae37-4e88-b6f4-f2a37b4a85dc",
  "bf255d66-22a9-4be5-b65f-fdd554e50c87",
  "2da1f203-5f4e-49ed-8953-1e8e91bc8ea6",
  "11aa69b0-0f21-407f-9a1a-6a2a6ed2c800",
  "0eb55e43-dd5b-48f9-a85a-4f49828e1c08",
  "33451d5f-f6c1-4d39-b120-3afd407f3bc5",
  "ffe0e927-fbff-4b0e-bb32-762f06c696fd",
  "86cebcdf-af7d-4d94-812c-aee76e12f7f5",
  "f2ed1f8b-3357-46d7-a382-ff45e6328f7c",
  "6bb9dde1-744b-4c4f-ad32-1cb89f88d5bf",
  "9bd75036-299f-41e1-a241-669b4532de80",
  "d1ef1167-d0bf-4884-8ecc-003f3c4a119f",
  "e10555f5-fe98-465c-8e69-c88dfaa6cc9a",
  "6575f54f-0c5c-4e53-bd21-737b686a798e",
  "71cde542-e99a-4542-83ff-2469f81c2090",
  "4293f333-5689-4da9-976b-ad026e7ee5ce",
  "561aea09-745e-4418-a28f-63bb6a7dc034",
  "d0172a0c-36d0-4aee-a31a-9f6b2ac16690",
  "fe54206f-5901-42af-af53-21d742c29461",
  "92f54b15-db7a-4b5b-9320-eadc90d702c8",
  "c348e38e-d068-4305-84a9-5ab6899d836a",
  "0a6ca55b-1e14-4680-8f3c-03d56a24fcf5",
  "1df6ea1f-03c4-4788-b20b-c6478f3c7bb8",
  "d6797894-2282-40f7-bf13-514536e5a346",
];

const names = [
  "Lemoine 10",
  "Magog",
  "Thorold",
  "Kelowna",
  "Brampton",
  "Fort-Frances",
];

const types: ChargeBoxType[] = ["kino_one", "kino_pro", "kino_urban"];

const locations: LocationPoints[] = [
  {
    latitude: 48.261109,
    longitude: 3.836712,
  },
  {
    latitude: 47.261109,
    longitude: 4.836712,
  },
  {
    latitude: 46.261109,
    longitude: 3.836712,
  },
];

const addresses = ["88, rue Aubry", "74, rue Aubro", "62, rue Aubru"];

const cities = [
  "Lemoine",
  "Magog",
  "Thorold",
  "Kelowna",
  "Brampton",
  "Fort-Frances",
];

const zipCodes = ["66407", "75014", "82741", "95412"];

const status: ChargeBoxStatus[] = ["free", "booked", "in_use", "offline"];

const fakeChargeBoxes = ids.map(
  (identifier, i): ChargeBox => ({
    identifier,
    name: names[i % names.length],
    type: types[i % types.length],
    location: locations[i % locations.length],
    address: addresses[i % addresses.length],
    city: cities[i % cities.length],
    zipcode: zipCodes[i % zipCodes.length],
    status: status[i % status.length],
  }),
);

fastify.get("/charge-boxes", (req, reply) => {
  reply.send(fakeChargeBoxes);
});

fastify.get("/parameters.json", (req, reply) => {
  reply.send({
    chargebox_type: {
      kino_pro: {
        icon: "https://via.placeholder.com/32x32.png",
        picture: "https://via.placeholder.com/640x480.png",
        name: "Kino Pro 2x50kw",
      },
      kino_one: {
        icon: "https://via.placeholder.com/32x32.png",
        picture: "https://via.placeholder.com/640x480.png",
        name: "Kino One 2x22kw",
      },
      kino_urban: {
        icon: "https://via.placeholder.com/32x32.png",
        picture: "https://via.placeholder.com/640x480.png",
        name: "Kino Urban 2x7kw",
      },
    },

    translations: {
      fr: {
        "chargebox.status.free": "disponible",
        "chargebox.status.in_use": "occupée",
        "chargebox.status.booked": "réservée",
        "chargebox.status.offline": "indisponible",
        "cta.navigate_gmap": "s'y rendre (Google Maps)",
        "cta.booking": "réserver une session",
      },
      en: {
        "chargebox.status.free": "available",
        "chargebox.status.in_use": "busy",
        "chargebox.status.booked": "booked",
        "chargebox.status.offline": "unavailable",
        "cta.navigate_gmap": "Getting there (Google Maps)",
        "cta.booking": "book a session",
      },
    },
  } satisfies Parameters);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
});
