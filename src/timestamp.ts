/** Parsing logic for the timestamp application */

// Note that our API works is defined in seconds since the epoch, but the node Date
// function uses milliseconds since the epoch

export interface ParsedTimestamp {
  unix: number | null;
  natural: string | null;
}

// Return value if string is not a timestamp
const nullParse: ParsedTimestamp = {
  unix: null,
  natural: null
};

// Formatting options for outputing natural-language dates
const dateLocale: string = "en-US";
const dateLocaleOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric"
};

export function parse(s: string | undefined): ParsedTimestamp {

  if (s === undefined) {
    return nullParse;
  }

  // If the input is purely numeric, parse as a Unix time
  if (/^\d+$/.test(s)) {
    let n: number = parseInt(s, 10);
    return {
      unix: n,
      natural: new Date(n * 1000).toLocaleDateString(dateLocale, dateLocaleOptions)
    };
  }

  // Otherwise, parse as a natural language date
  let naturalParse: number = Date.parse(s);
  if (naturalParse > 0) {
    return {
      unix: naturalParse / 1000,
      natural: new Date(naturalParse).toLocaleDateString(dateLocale, dateLocaleOptions)
    };
  }

  return nullParse;

};
