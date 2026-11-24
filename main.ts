import * as fs from "node:fs";

const line = "At seventy-two, after three years of night classes, Rosa read the council's letter aloud to her husband, slowly, without stopping once — then read it again.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
