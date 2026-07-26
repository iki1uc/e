import { EError } from "./e.error.js";
import { EMove } from "./e.move.js";
import { EScan } from "./e.scan.js";
import { ESignal } from "./e.signal.js";

const E = {
  identity: 0,
  index: 0,

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

  async cycle() {
    const current = this.clusters[this.index];
    const element = document.getElementById(current);

    // Echt-Scan
    const data = await EScan.read("/" + current);
    const errors = EError.scan(data);

    // Meldesystem
    const color = ESignal.color(errors);
    ESignal.apply(element, color);

    // Bewegung
    EMove.apply(element, "plop");
    setTimeout(() => EMove.apply(element, "fade"), 400);
    setTimeout(() => EMove.apply(element, "null"), 800);

    // Next
    setTimeout(() => {
      EMove.apply(element, "");
      this.index = (this.index + 1) % this.clusters.length;

      this.identity++;
      document.getElementById("identity").innerText =
        "IDENTITY: e-" + this.identity;

      const next = this.clusters[this.index];
      EMove.apply(document.getElementById(next), "plop");
    }, 1200);
  }
};

setInterval(() => E.cycle(), EMove.speed);
