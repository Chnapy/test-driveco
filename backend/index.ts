import type { ChargeBox, Parameters } from "@driveco/shared";
import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/charge-boxes", (req, reply) => {
  reply.send([
    {
      identifier: "ssd:charge-box:646b7dd3-671d-3dc6-a958-b27a",
      name: "Lemoine 10",
      type: "kino_pro",
      location: {
        latitude: 48.261109,
        longitude: 3.836712,
      },
      address: "88, rue Aubry",
      city: "Lemoine",
      zipcode: "66407",
      status: "free",
    },
  ] satisfies ChargeBox[]);
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
