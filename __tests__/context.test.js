import { hashCode } from "../utils/loginHelper";

describe("key", () => {
  it("key should be consistent for a given name", () => {
    const names = [
      "John",
      "Amalia",
      "Benedetta",
      "Francisca",
      "Kevin",
      "Bernardus",
      "Tom",
    ];
    names.forEach(function (name) {
      const hash1 = hashCode(name);
      const hash2 = hashCode(name);
      expect(hash1).toEqual(hash2);
    });
  });
});
