describe("env", () => {
  beforeAll(() => {
    process.env.REPO_NAME = "mock-repo-name";
  });

  it("should have a repo name", () => {
    expect(process.env.REPO_NAME).toBeDefined();
  });
});
