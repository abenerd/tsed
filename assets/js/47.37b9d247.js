(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{763:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"create-a-new-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-project"}},[t._v("#")]),t._v(" Create a new project")]),t._v(" "),s("p",[t._v("To scaffold the project with the CLI, run the following commands. This will create a new project directory,\nand populate the directory with the initial core Ts.ED files and supporting modules, creating a conventional base structure for your project.\nCreating a new project with the CLI is recommended for first-time users.")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @tsed/cli\ntsed init "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("See our "),s("a",{attrs:{href:"https://cli.tsed.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLI website"),s("OutboundLink")],1),t._v(" for more details on the CLI commands.")])]),t._v(" "),s("p",[t._v("You can select different options to generate your first application:")]),t._v(" "),s("ul",[s("li",[t._v("The web framework: Express.js / Koa.js")]),t._v(" "),s("li",[t._v("The convention project architecture: Ts.ED or Feature")]),t._v(" "),s("li",[t._v("The convention file styling: Ts.ED or Angular")]),t._v(" "),s("li",[t._v("The features:\n"),s("ul",[s("li",[t._v("Graphql,")]),t._v(" "),s("li",[t._v("Database,")]),t._v(" "),s("li",[t._v("Passport.js,")]),t._v(" "),s("li",[t._v("Socket.io,")]),t._v(" "),s("li",[t._v("Swagger,")]),t._v(" "),s("li",[t._v("OIDC,")]),t._v(" "),s("li",[t._v("Testing (Jest/Mocha),")]),t._v(" "),s("li",[t._v("Linter (Eslint, prettier),")]),t._v(" "),s("li",[t._v("Bundler (Babel/Webpack),")])])]),t._v(" "),s("li",[t._v("The Package manager: NPM, Yarn or PNPM")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("By default, it's recommended to select the following options: Express, Ts.ED (convention), Swagger, Jest and Eslint + prettier.")])]),t._v(" "),s("figure",[s("img",{staticStyle:{"max-height":"400px",padding:"0"},attrs:{src:"/getting-started/cli-selected-features.png"}})]),t._v(" "),s("p",[t._v("When all options are selected, the CLI will generate all files.\nWhen it's done, run one of this command:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" start\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" start\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("figure",[s("img",{staticStyle:{"max-height":"400px",padding:"0"},attrs:{src:"/getting-started/server-start.png"}})]),t._v(" "),s("h2",{attrs:{id:"update-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies"}},[t._v("#")]),t._v(" Update dependencies")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If you have to upgrade Ts.ED dependencies, keep in mind this point:")]),t._v(" "),s("p",[t._v("It's really important to keep the same version for all "),s("code",[t._v("@tsed/*")]),t._v(" (excepted @tsed/logger) packages.\nTo prevent errors, fix the version for each Ts.ED packages:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@tsed/common"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@tsed/di"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@tsed/core"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@tsed/exceptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@tsed/plaftorm-express"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@tsed/swagger"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.0.0"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"project-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-examples"}},[t._v("#")]),t._v(" Project examples")]),t._v(" "),s("p",[t._v("Alternatively, you can check out one of these projects:")]),t._v(" "),s("Projects",{attrs:{type:"projects"}}),t._v(" "),s("p",[t._v("If none of previous solutions are satisfying maybe you are in these cases:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/getting-started/migration-from-v6.html"}},[t._v("I want to migrate my application from Ts.ED v6")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/getting-started/migrate-from-express.html"}},[t._v("I want to migrate my application from Express.js")])],1)]),t._v(" "),s("h2",{attrs:{id:"what-s-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's next?")]),t._v(" "),s("p",[t._v("Now you can follow one of these links to develop your new application:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/getting-started/create-your-first-controller.html"}},[t._v("Create your first controller")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/docs/configuration.html"}},[t._v("Change server configuration")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/getting-started/configuration.html#load-configuration-from-file"}},[t._v("Load configuration from files")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/docs/platform-api.html"}},[t._v("What is the Platform API")])],1)])],1)}),[],!1,null,null,null);e.default=r.exports}}]);