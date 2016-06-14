import { expect } from "chai";

import * as http from "http";

const baseURL: string = "http://localhost:8080/";
const unixURL: string = baseURL + "1450137600";

describe("Unix time", () => {

  it("returns 200", (done: MochaDone) => {
    http.get(unixURL, (res: http.IncomingMessage) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("returns requested string", (done: MochaDone) => {
    http.get(unixURL, (res: http.IncomingMessage) => {
      let data: string = "";

      res.on("data", (chunk: string) => data += chunk );
      res.on("end", () => {
        expect(data).to.equal('{"unix": 1450137600,"natural": "December 15, 2015"}');
        done();
      });
    });
  });

});
