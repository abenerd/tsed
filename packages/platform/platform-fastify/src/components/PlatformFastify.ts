import middie from "@fastify/middie";
import {
  createContext,
  InjectorService,
  PlatformAdapter,
  PlatformApplication,
  PlatformBuilder,
  PlatformContext, PlatformExceptions,
  PlatformHandler,
  PlatformRequest,
  PlatformResponse,
  runInContext
} from "@tsed/common";
import {Type} from "@tsed/core";
import {PlatformLayer} from "@tsed/platform-router";
import next from "ajv/dist/vocabularies/next";
import Fastify, {FastifyInstance} from "fastify";
import {PlatformFastifyApplication} from "../services/PlatformFastifyApplication";
import {PlatformFastifyHandler} from "../services/PlatformFastifyHandler";
import {PlatformFastifyRequest} from "../services/PlatformFastifyRequest";
import {PlatformFastifyResponse} from "../services/PlatformFastifyResponse";

declare global {
  namespace TsED {
    export interface Application extends FastifyInstance {
    }
  }

  namespace TsED {
  }
}

/**
 * @platform
 * @koa
 */
export class PlatformFastify implements PlatformAdapter<FastifyInstance> {
  readonly providers = [
    {
      provide: PlatformApplication,
      useClass: PlatformFastifyApplication
    },
    {
      provide: PlatformResponse,
      useClass: PlatformFastifyResponse
    },
    {
      provide: PlatformRequest,
      useClass: PlatformFastifyRequest
    },
    {
      provide: PlatformHandler,
      useClass: PlatformFastifyHandler
    }
  ];

  constructor(private injector: InjectorService) {
  }

  /**
   * Create new serverless application. In this mode, the component scan are disabled.
   * @param module
   * @param settings
   */
  static create(module: Type<any>, settings: Partial<TsED.Configuration> = {}) {
    return PlatformBuilder.create<Fastify, FastifyRouter>(module, {
      ...settings,
      adapter: PlatformFastify
    });
  }

  /**
   * Bootstrap a server application
   * @param module
   * @param settings
   */
  static bootstrap(module: Type<any>, settings: Partial<TsED.Configuration> = {}) {
    return PlatformBuilder.bootstrap<Fastify, FastifyRouter>(module, {
      ...settings,
      adapter: PlatformFastify
    });
  }

  onInit() {
    // const injector = this.injector;
    // const app = this.injector.get<PlatformApplication>(PlatformApplication)!;
    //
    // const listener: any = (error: any, ctx: F.Context) => {
    //   injector.get<PlatformExceptions>(PlatformExceptions)?.catch(error, ctx.request.$ctx);
    // };
    //
    // app.getApp().silent = true;
    // app.getApp().on("error", listener);
  }

  mapLayers(layers: PlatformLayer[]) {
    const app = this.getPlatformApplication();
    const rawApp: FastifyInstance = app.getApp();

    layers.forEach((layer) => {
      switch (layer.method) {
        case "statics":
          // rawApp.use(layer.path, this.statics(layer.path as string, layer.opts as any));
          return;
      }

      rawApp.route({
        method: layer.method,
        url: layer.path,
        handler: layer.handler
      });
    });
  }

  // useRouter(): this {
  //    //const app = this.injector.get<PlatformApplication<Fastify>>(PlatformApplication)!;
  //
  //    //app.getApp().register(require('fastify-cors'), {
  //   //
  //   // app.getApp().use(resourceNotFoundMiddleware);
  //   // app.getApp().use(app.getRouter().routes()).use(app.getRouter().allowedMethods());
  //   //
  //   return this;
  // }

  useContext(): this {
    const app = this.getPlatformApplication();
    const invoke = createContext(this.injector);

    this.injector.logger.debug("Mount app context");

    app.addHook("onRequest", async (request: any, reply: any, done: any) => {
      const $ctx = invoke({
        request: request.,
        response
      });

      await $ctx.start();

      return runInContext($ctx, next);
    });

    app.addHook("onResponse", async () => {
      const $ctx = PlatformContext.get();
      await $ctx.finish();
    });

    return this;
  }

  app() {
    const { app, ...props } = this.injector.settings.get("fastify") || {};
    const app: FastifyInstance = app || Fastify();
    app.register(middie);

    app.get("/test", (req, res) => {

    });

    app.addHook("onError", (request, reply, error) => {
      this.injector.get<PlatformExceptions>(PlatformExceptions)?.catch(error, ctx.request.$ctx);
    });

    return {
      app,
      callback: () => app
    };
  }


  // multipart(options: PlatformMulterSettings): PlatformMulter {
  //   // return getMulter(options);
  // }

  // statics(endpoint: string, options: PlatformStaticsOptions) {
  //   // return staticsMiddleware(options);
  // }

  // bodyParser(type: "json" | "urlencoded" | "raw" | "text", additionalOptions: any = {}): any {
  //   // const opts = this.injector.settings.get(`koa.bodyParser`);
  //   // let parser: any = koaBodyParser;
  //   //
  //   // let options: Options = {};
  //   //
  //   // if (isFunction(opts)) {
  //   //   parser = opts;
  //   //   options = {};
  //   // }
  //   //
  //   // return parser({...options, ...additionalOptions});
  // }
}
