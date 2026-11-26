// office-artifacts-placard — writes the chosen museum placard line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Sticky note, papyrus and pine resin, c. 2031 BCE. Donated by Clerk Amenhotep III. It reads: 'Do not forget the grain. Do not forget the grain. Do not forget the grain.'";

if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`placard line must be 1-180 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
