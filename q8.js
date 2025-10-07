// denna funktion tar emot en array av strängar. gör så att den returnerar en enda sträng som sammanfogar alla strängar i arrayen

import { findSmallerNumber } from "./q7";

export function combineStrings(strings) {
  let result = "";
  strings.forEach((string) => {result+= string; 
  });
  return result;
}
