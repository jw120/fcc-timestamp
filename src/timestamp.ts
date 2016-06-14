// Parsing logic for the application

export interface ParsedTimestamp {
  unix: number | null;
  natural: string | null;
}

// Return value if string is not a timestamp
const nullParse: ParsedTimestamp = {
  unix: null,
  natural: null
};


export function parse(s: string | undefined): ParsedTimestamp {

  if (s === undefined) {
    return nullParse;
  }

  // If the input is purely numeric, parse as a Unix time
  if (/\d+/.test(s)) {
    let n: number = parseInt(s, 10);
    return {
      unix: n,
      natural: new Date(n).toDateString()
    };
  }

  // Otherwise, try as a Date
  let naturalParse: number = Date.parse(s);
  if (naturalParse) {
    return {
      unix: naturalParse,
      natural: s
    };
  }



  return nullParse;

};
