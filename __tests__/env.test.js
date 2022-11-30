describe("env", () => {
  it("should have a repo name", () => {
    expect(process.env.REPO_NAME).toBeDefined();
  });
  it("should have a launchdarkly client id", () => {
    expect(process.env.LAUNCHDARKLY_CLIENT_ID).toBeDefined();
  });
});
