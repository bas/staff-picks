import { deviceType, osName } from "react-device-detect";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { LDMultiKindContext, LDSingleKindContext } from "launchdarkly-js-client-sdk";

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

function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
  }
  return '' + hash;
}

export function getContext({ name }) {
  const randomCountry = uniqueNamesGenerator({
    dictionaries: [countries],
  });

  let randomName = uniqueNamesGenerator({
    dictionaries: [names],
  });

  if (name.length > 2) randomName = name;

  const email = randomName.toLowerCase() + '@example.com';

  const deviceContext: LDSingleKindContext =  {
    kind: 'device',
    key: deviceType,
    device: deviceType,
    operatingSystem: osName,
  };
  
  const userContext: LDSingleKindContext = {
    kind: 'user',
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

  const multiContext: LDMultiKindContext = {
    kind: 'multi',
    user: userContext,
    device: deviceContext
  }

  return multiContext;
}
