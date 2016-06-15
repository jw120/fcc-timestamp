// Tests the server - uses existing server on the environment variable
// TEST_URL if that variable exists, otherwise we start our own

import * as fetch from "isomorphic-fetch";
import * as chai from "chai";

import { startServer } from "../src/server";
import { ParsedTimestamp } from "../src/timestamp";

// Connect to a provided server or create our own and connect to it
let serverUrl: string;
if (process.env.SERVER) {
  serverUrl = process.env.SERVER;
} else {
  const localPort: number = 8081;
  startServer(localPort);
  serverUrl = "http://localhost:" + localPort;
}

// Data we use in our tests
const unixTimeUrl: string = serverUrl + "/1450137600";
const naturalTimeUrl: string = serverUrl + "/December%2015,%202015";
const exampleTS: ParsedTimestamp = {
  unix: 1450137600,
  natural: "December 15, 2015"
};

describe(unixTimeUrl, () => {

  it("returns an ok status", promiseAssertion(fetch(unixTimeUrl), (res: IResponse): void => {
    chai.expect(res.ok).to.be.true;
  }));

  it("returns status 200", promiseAssertion(fetch(unixTimeUrl), (res: IResponse): void => {
    chai.expect(res.status).to.equal(200);
  }));

  it("returns OK statusText", promiseAssertion(fetch(unixTimeUrl), (res: IResponse): void => {
    chai.expect(res.statusText).to.equal("OK");
  }));

  it("returns a Content-Type header for json and utf8", promiseAssertion(fetch(unixTimeUrl), (res: IResponse): void => {
    chai.expect(res.headers.get("Content-Type")).to.equal("application/json; charset=utf-8");
  }));

  let p: Promise<ParsedTimestamp> =
    fetch(unixTimeUrl)
      .then((res: IResponse) => res.json());
  it("returns expected JSON result", promiseAssertion(p, (res: ParsedTimestamp): void => {
    chai.expect(res).to.deep.equal(exampleTS);
  }));

});

describe(naturalTimeUrl, () => {

  it("returns status 200", promiseAssertion(fetch(unixTimeUrl), (res: IResponse): void => {
    chai.expect(res.status).to.equal(200);
  }));

  let p: Promise<ParsedTimestamp> =
    fetch(unixTimeUrl)
      .then((res: IResponse) => res.json());
  it("returns expected JSON result", promiseAssertion(p, (res: ParsedTimestamp): void => {
    chai.expect(res).to.deep.equal(exampleTS);
  }));

});

// Helper which create a function which applies the callback after promise resolves and applying the assertion to the result
function promiseAssertion<T>(p: Promise<T>, assertion: ((x: T) => void)): ((d: MochaDone) => void) {
  return function(done: MochaDone): void {
    p.then((val: T) => {
      assertion(val);
      done();
    }).catch((err: any) => {
      done(err);
    });
  };
}
