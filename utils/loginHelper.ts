import { deviceType, osName } from "react-device-detect";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { CustomContext, CustomMultiContext } from "../types/custom-context";

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

const groups = [["alpha", "beta"], ["alpha"], ["beta"], ["none"]];

export function hashCode(str: String) {
  var hash = 0,
    i = 0,
    len = str.length;
  while (i < len) {
    hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
  }
  return "key_" + (hash + 2147483647 + 1);
}

export function getContext( {name} ) {
  const randomCountry = uniqueNamesGenerator({
    dictionaries: [countries],
  });

  let randomName = uniqueNamesGenerator({
    dictionaries: [names],
  });

  if (name.length > 2) randomName = name;

  const email = randomName.toLowerCase() + "@example.com";

  const deviceContext: CustomContext = {
    kind: "device",
    key: deviceType,
    device: deviceType,
    operatingSystem: osName,
  };

  const userContext: CustomContext = {
    kind: "user",
    key: hashCode(email),
    email: email,
    name: randomName,
    country: randomCountry,
    premium: Math.random() < 0.5,
    staff: Math.random() < 0.5,
    groups: groups[Math.floor(Math.random() * 4)],
    _meta: {
      privateAttributes: ["email"],
    },
  };

  const multiContext: CustomMultiContext = {
    kind: "multi",
    user: userContext,
    device: deviceContext,
  };

  return multiContext;
}
