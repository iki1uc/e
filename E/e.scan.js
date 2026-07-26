export const EScan = {
  async read(path) {
    try {
      const res = await fetch(path);
      return await res.text();
    } catch (err) {
      return "fail";
    }
  }
};
