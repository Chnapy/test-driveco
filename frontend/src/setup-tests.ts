import fetchMock from "jest-fetch-mock";

fetchMock.default.enableMocks();

beforeEach(() => {
  fetchMock.default.resetMocks();
});
