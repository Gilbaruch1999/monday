let dummyStorage = {
  voters: [],
  estimations: [],
};

export function getDummyStorage(key : any) {
  return JSON.stringify(dummyStorage);
}

export function setDummyStorage(key: string, data : any) {
  dummyStorage = data;
}
