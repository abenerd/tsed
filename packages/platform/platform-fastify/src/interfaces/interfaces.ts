import Koa from "koa";
import {PlatformKoaSettings} from "./PlatformFastifySettings";

export * from "./PlatformFastifySettings";

declare global {
  namespace TsED {
    export interface Configuration {
      /**
       * Configuration related to Koa platform application.
       */
      koa: PlatformKoaSettings;
    }

    export interface NextFunction extends Koa.Next {}
  }
}
