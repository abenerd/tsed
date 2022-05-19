import {PlatformBuilder} from "@tsed/common";
import Sinon from "sinon";
import {expect} from "chai";
import {PlatformFastify} from "./PlatformFastify";

const sandbox = Sinon.createSandbox();

class Server {}

describe("PlatformFastify", () => {
  describe("create()", () => {
    beforeEach(() => {
      sandbox.stub(PlatformBuilder, "create");
    });
    afterEach(() => sandbox.restore());
    it("should create platform", () => {
      PlatformFastify.create(Server, {});

      expect(PlatformBuilder.create).to.have.been.calledWithExactly(Server, {
        adapter: PlatformFastify
      });
    });
  });
  describe("bootstrap()", () => {
    beforeEach(() => {
      sandbox.stub(PlatformBuilder, "bootstrap");
    });
    afterEach(() => sandbox.restore());
    it("should create platform", async () => {
      await PlatformFastify.bootstrap(Server, {});

      expect(PlatformBuilder.bootstrap).to.have.been.calledWithExactly(Server, {
        adapter: PlatformFastify
      });
    });
  });
  describe("bodyParser()", () => {
    afterEach(() => sandbox.restore());
    it("should return the body parser (json) ", () => {
      const stub = sandbox.stub().returns("body");

      const platform = PlatformFastify.create(Server, {
        koa: {
          bodyParser: stub
        }
      });

      const result = platform.adapter.bodyParser("json", {strict: true});

      expect(result).to.equal("body");
      expect(stub).to.have.been.calledWithExactly({strict: true});
    });
    it("should return the body parser (raw) ", () => {
      const stub = sandbox.stub().returns("body");

      const platform = PlatformFastify.create(Server, {
        koa: {
          bodyParser: stub
        }
      });

      const result = platform.adapter.bodyParser("raw", {strict: true});

      expect(result).to.equal("body");
      expect(stub).to.have.been.calledWithExactly({strict: true});
    });
    it("should return the body parser (urlencoded) ", () => {
      const stub = sandbox.stub().returns("body");

      const platform = PlatformFastify.create(Server, {
        koa: {
          bodyParser: stub
        }
      });

      const result = platform.adapter.bodyParser("urlencoded", {strict: true});

      expect(result).to.equal("body");
      expect(stub).to.have.been.calledWithExactly({strict: true});
    });
  });
});
