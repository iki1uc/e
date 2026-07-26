// E · EBENE · EDIT · ENGINE
// SCAN-ENGINE · RESPO

const E = {
  identity: 0,
  clusters: [
    "CORE-X6D",
    "CORE-NE6D",
    "CORE-BEN9D",
    "DATA",
    "PORTENGINE",
    "HDFCORE",
    "HIWORLD",
    "XENGINEIX",
    "XENGINEXI",
    "USE-UI"
  ],

  move: ["plop", "fade", "null", "next", "plop"],
  index: 0,

  cycle() {
    const current = this.clusters[this.index];

    // plop
    this.set(current, "plop");

    // fade
    setTimeout(() => this.set(current, "fade"), 400);

    // null
    setTimeout(() => this.set(current, "null"), 800);

    // next
    setTimeout(() => {
      this.set(current, "");
      this.index = (this.index + 1) % this.clusters.length;

      this.identity++;
      document.getElementById("identity").innerText =
        "IDENTITY: e-" + this.identity;

      const next = this.clusters[this.index];
      this.set(next, "plop");
    }, 1200);
  },

  set(cluster, state) {
    const el = document.getElementById(cluster);
    if (el) el.className = "cluster " + state;
  }
};

setInterval(() => E.cycle(), 1600);
