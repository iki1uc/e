export const EScan = {
  async read(path) {
    const res = await fetch(path);
    const data = await res.text();
    return data.split("\n");
  }
};
