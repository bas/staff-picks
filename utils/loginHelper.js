import { deviceType, osName } from "react-device-detect";
import { uniqueNamesGenerator, names } from "unique-names-generator";

const countries = [
  "United States",
  "Singapore",
  "Norway",
  "United Kingdom",
  "The Netherlands",
  "Germany",
  "Belgium",
  "Australia",
  "India",
  "Sweden",
  "France",
  "Italy",
  "Finland",
  "Ireland",
  "Portugal",
];

const releaseStage = ["team", "staff", "private-beta", "public-beta"];

export function getContext({ name }) {
  const randomCountry = uniqueNamesGenerator({
    dictionaries: [countries],
  });

  const randomReleaseStage = uniqueNamesGenerator({
    dictionaries: [releaseStage],
  });

  let randomName = uniqueNamesGenerator({
    dictionaries: [names],
  });

  if (name.length > 2) randomName = name;

  const email = randomName.toLowerCase() + "@example.com";

  let userContext = {
    key: email,
    email: email,
    name: randomName,
    country: randomCountry,
    custom: {
      premium: Math.random() < 0.5,
      staff: Math.random() < 0.5,
      device: deviceType,
      operatingSystem: osName,
      releaseStage: randomReleaseStage
    },
  };
  return userContext;
}
