export const EError = {
  scan(cluster) {
    const errors = [];

    if (cluster.includes("tmp.room")) errors.push("tmp.room");
    if (cluster.includes("tmp,room")) errors.push("tmp,room");
    if (cluster.includes("ghost.html")) errors.push("ghost.html");
    if (cluster.includes("tmp-Matrix")) errors.push("tmp-Matrix");

    return errors;
  }
};
