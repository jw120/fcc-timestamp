import { expect } from "chai";

import {parse, ParsedTimestamp} from "../src/timestamp";

const nullTS: ParsedTimestamp = {
  unix: null,
  natural: null
};

const exampleTS: ParsedTimestamp = {
  unix: 1450137600,
  natural: "December 15, 2015"
};

describe("parse", () => {

  it("Returns nulls for undefined input", () => {
    expect(parse(undefined)).to.deep.equal(nullTS);
  });

  it("Returns nulls for a non-date input", () => {
    expect(parse("not a date")).to.deep.equal(nullTS);
  });

  it("Matches given natural example", () => {
    expect(parse("December 15, 2015")).to.deep.equal(exampleTS);
  });

  it("Matches given unix example", () => {
    expect(parse("1450137600")).to.deep.equal(exampleTS);
  });

  it("Returns null for misspelled natural", () => {
    expect(parse("Dfcember 15, 2015")).to.deep.equal(nullTS);
  });

  it("Returns null for out of range natural", () => {
    expect(parse("December 15, 1965")).to.deep.equal(nullTS);
  });



});
