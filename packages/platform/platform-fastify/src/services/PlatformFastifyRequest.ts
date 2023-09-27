import {IncomingEvent, PlatformContext, PlatformRequest} from "@tsed/common";
import Koa, {FastifyRequest} from "fastify";
import {IncomingMessage} from "http";

declare module "fastify" {
  export interface FastifyRequest {
    id: string;
    $ctx: PlatformContext;
  }
}

declare global {
  namespace TsED {
    export interface Request extends FastifyRequest {}
  }
}

/**
 * @platform
 * @fastify
 */
export class PlatformFastifyRequest extends PlatformRequest<FastifyRequest> {
  get protocol(): string {
    // return this.#ctx.request.protocol;
  }

  get host(): string {
    // return this.#ctx.request.host;
  }

  get secure(): boolean {
    // return this.#ctx.request.secure;
  }

  get cookies(): {[p: string]: any} {
    // return this.#ctx.cookie || this.#ctx.cookies;
  }

  get session(): any {
    // return this.#ctx.session;
  }

  getReq(): IncomingMessage {
    return this.raw.raw;
  }
}
