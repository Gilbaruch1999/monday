let dummyStorage = {
  voters: [],
  estimations: [],
};

export function getDummyStorage(key) {
  return JSON.stringify(dummyStorage);
}

export function setDummyStorage(key: string, data) {
  dummyStorage = data;
}
