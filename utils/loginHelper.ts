import { deviceType, osName } from "react-device-detect";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { UserContext } from "../types/custom-context";

const categories = [
  "Arts",
  "Biographies",
  "Finance",
  "Comics",
  "Computers",
  "History",
  "Law",
  "Fiction",
  "Sports",
  "Fantasy",
  "Travel",
];

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

export function hashCode(str: String) {
  var hash = 0,
    i = 0,
    len = str.length;
  while (i < len) {
    hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
  }
  const key = pad(hash + 2147483647 + 1, 12);
  return "key_" + key;
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

export function getContext({ name }) {
  const randomCountry = uniqueNamesGenerator({
    dictionaries: [countries],
  });

  let randomName = uniqueNamesGenerator({
    dictionaries: [names],
  });

  if (name.length > 2) randomName = name;

  const email = randomName.toLowerCase() + "@example.com";

  const categoryList = categories
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 4) + 1);

  const userContext: UserContext = {
    kind: "user",
    key: hashCode(email),
    email: email,
    name: randomName,
    country: randomCountry,
    isPremium: Math.random() < 0.5,
    isStaff: Math.random() < 0.5,
    isBeta: Math.random() < 0.5,
    categories: categoryList,
    device: deviceType,
    operatingSystem: osName,
    _meta: {
      privateAttributes: ["email"],
    },
  };

  return userContext;
}
