(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"header\">\n  <img src=\"/assets/logo_corona_central.png\">\n</div>\n<div class=\"conteudo\"> -->\n  <router-outlet></router-outlet>\n<!-- </div>\n<div class=\"leads\">\n  <p>Inscreva-se e receba as novidades!</p>\n  <div>\n    <mat-form-field style=\"width: 100%;\">\n      <input matInput placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"enviarLead()\">Enviar</button>\n  </div>\n</div>\n<div class=\"rodape\">\n  © 2019 Central Corona. Todos os direitos reservados.\n</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conheca-nossanave/conheca-nossanave.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conheca-nossanave/conheca-nossanave.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Nossa Nave</h1>\n<div mat-dialog-content>\n  <img src=\"/assets/nossa_nave.jpeg\" style=\"width: 100%;\">\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Fechar</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-compra/dialog-compra.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-compra/dialog-compra.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Compre sua passagem</h1>\n<div mat-dialog-content>\n  <mat-form-field style=\"width: 100%;\">\n    <input matInput placeholder=\"Nome\" [(ngModel)]=\"data.nome\">\n  </mat-form-field>\n  <br />\n  <mat-form-field style=\"width: 100%;\">\n    <input matInput placeholder=\"Email\" type=\"email\" [(ngModel)]=\"data.email\">\n  </mat-form-field>\n  <h2>Incremente sua viagem</h2>\n  <section class=\"incrementeSuaViagem\">\n    <mat-checkbox [(ngModel)]=\"data.incrementeSuaViagem.esquiar\">Esquiar na neve do planeta Eris e aventurar-se em na\n      lua Dysnomia, uma homenagem a deusa da ilegalidade.</mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"data.incrementeSuaViagem.montanhasRochosas\">Curta uma noite nas montanhas rochosas de\n      Plutão e faça um passeio de rover pelas suas cinco luas.</mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"data.incrementeSuaViagem.noiteRomantica\">Uma noite romântica a luz do luar de duas luas e\n      aos anéis de Haumea.</mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"data.incrementeSuaViagem.mundosGelados\">Descubra mundos gelados em miniaturas com corpos\n      rochosos na lua de Makemake. </mat-checkbox>\n  </section>\n  <mat-form-field>\n    <input disabled matInput [(ngModel)]=\"data.data\" [matDatepicker]=\"picker\" placeholder=\"Escolha a data da sua viagem\">\n    <mat-datepicker-toggle [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker disabled=\"false\" matSuffix [startAt]=\"startDatePicker\" #picker></mat-datepicker>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Confirma</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-lead/dialog-lead.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-lead/dialog-lead.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Seu email foi salvo com sucesso!</h1>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Confirma</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experiencia-space-age/experiencia-space-age.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experiencia-space-age/experiencia-space-age.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>experiencia-space-age works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centralizado\">\n  <div class=\"logo\"></div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil-planetario/perfil-planetario.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil-planetario/perfil-planetario.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerExperiencia\">\n  <img class=\"logo\" src=\"/assets/logo_space_age.png\" />\n</div>\n<div class=\"quiz\">\n  <h1>Descubra uma experiência incrível</h1>\n  <form [formGroup]=\"quiz\">\n\n    <mat-form-field>\n      <input matInput type=\"email\" formControlName=\"email\" placeholder=\"Qual sua email?\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select matInput formControlName=\"voceSeConsidera\" placeholder=\"Você se identifica\">\n        <mat-option value=\"homemCis\">Homem Cis</mat-option>\n        <mat-option value=\"homemTrans\">Homem Trans</mat-option>\n        <mat-option value=\"mulherCis\">Mulher Cis</mat-option>\n        <mat-option value=\"mulherTrans\">Mulher Trans</mat-option>\n        <mat-option value=\"prefiroNaoResponder\">Prefiro não responder</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" formControlName=\"idade\" placeholder=\"Qual sua idade?\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"text\" formControlName=\"ondeVive\" placeholder=\"Onde você vive?\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"text\" formControlName=\"profissao\" placeholder=\"Qual a sua profissão?\">\n    </mat-form-field>\n\n    <label>Você tem filhos?</label>\n    <br />\n    <mat-checkbox formControlName=\"filhos\">Sim</mat-checkbox>\n    <br />\n    <mat-checkbox [disabled]=\"!quiz.value.filhos\" formControlName=\"pretendeViajarComOsFilhos\">Pretende viajar com os\n      filhos?\n    </mat-checkbox>\n\n\n    <mat-form-field>\n      <mat-select matInput formControlName=\"estadoCivil\" placeholder=\"Estado civil?\">\n        <mat-option value=\"solteiro\">Solteiro(a)</mat-option>\n        <mat-option value=\"casado\">Casado(a)</mat-option>\n        <mat-option value=\"divorciado\">Divorciado(a)</mat-option>\n        <mat-option value=\"viuvo\">Viúvo(a)</mat-option>\n        <mat-option value=\"outros\">Outros</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select matInput formControlName=\"tempoLivre\" placeholder=\"O que você faz no seu tempo livre?\">\n        <mat-option value=\"filmeSeries\">Assistir filmes/séries</mat-option>\n        <mat-option value=\"arlivre\">Atividades ao ar livre </mat-option>\n        <mat-option value=\"artesanato\">Artesanato</mat-option>\n        <mat-option value=\"cozinhar\">Cozinhar</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select matInput formControlName=\"esporteVoceGosta\" placeholder=\"Qual esporte você gosta?\">\n        <mat-option value=\"futebol\">Futebol</mat-option>\n        <mat-option value=\"volei\">Vôlei</mat-option>\n        <mat-option value=\"tenis\">Tênis</mat-option>\n        <mat-option value=\"luta\">Luta</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-checkbox formControlName=\"ficcaoCientifica\">Curte ficção científica?</mat-checkbox>\n    <br />\n\n    <mat-form-field>\n      <input matInput type=\"text\" formControlName=\"destinoDosSonhos\" placeholder=\"Qual seu destino dos sonhos?\">\n    </mat-form-field>\n    <label>Você já teve o sonho de ser<br /> astronauta?</label>\n    <br />\n    <mat-checkbox formControlName=\"sonhoDeSerAstronauta\">Sim</mat-checkbox>\n    <br />\n\n    <mat-form-field>\n      <mat-select matInput formControlName=\"viagemComum\" placeholder=\"Qual o seu tipo de viagem?\">\n        <mat-option value=\"aventura\">Aventura</mat-option>\n        <mat-option value=\"relaxante\">Relaxante</mat-option>\n        <mat-option value=\"historica\">Histórica</mat-option>\n        <mat-option value=\"espiritual\">Espiritual</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" [disabled]=\"quiz.invalid\" (click)=\"enviarQuiz()\">Enviar</button>\n    <br />\n    <br />\n    <br />\n  </form>\n\n</div>\n<div class=\"rodape\">\n  © 2045 Space Age. Todos os direitos reservados.\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/relatorio/relatorio.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relatorio/relatorio.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"text-align: center;\">\n  Relatório\n</h1>\n<div style=\"position: relative;width: 100%;display: flex;justify-content: space-around;align-items: center;\">\n  <div style=\"text-align: center;\">\n    <h1>Leads</h1>\n    <h1>{{leads.length}}</h1>\n  </div>\n  <div style=\"text-align: center;\">\n    <h1>Intenção de Compras</h1>\n    <h1>{{compras.length}}</h1>\n  </div>\n  <div style=\"text-align: center;\">\n    <h1>Quiz</h1>\n    <h1>{{quiz.length}}</h1>\n  </div>\n</div>\n<div style=\"text-align: center;\">\n  <img src=\"/assets/foguete_lancamento.gif\" />\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resultado-quiz/resultado-quiz.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultado-quiz/resultado-quiz.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br />\n<div *ngIf=\"data.planeta==1\">\n  <h1 mat-dialog-title style=\"text-align: center;\">Liberdade para voar</h1>\n  <div mat-dialog-content style=\"text-align: center;\">\n    <p>Muito obrigado, recebemos suas informações!</p>\n    <img src=\"/assets/liberdade_1.png\" style=\"height: 200px;\" />\n    <br />\n    <br />\n    Liberdade para voar foi feito para você! Fazer coisas cotidianas em uma gravidade fantástica é a cara de quem sabe\n    que o céu não é o limite. O espaço é o seu lugar.\n\n    <br />\n    <br />\n    <button mat-raised-button color=\"primary\" (click)=\"queroComprar('liberdade')\">Voe</button>\n  </div>\n</div>\n<div *ngIf=\"data.planeta==2\">\n  <h1 mat-dialog-title style=\"text-align: center;\">Explore o desconhecido</h1>\n  <div mat-dialog-content style=\"text-align: center;\">\n    <p>Muito obrigado, recebemos suas informações!</p>\n    <img src=\"/assets/descubra_1.png\" style=\"height: 200px;\" />\n    <br />\n    <br />\n    O desconhecido nunca foi problema para pessoas como você. Explorar planetas e investigar cavernas subterrâneas é o\n    seu lugar, afinal, não há incógnitas na via espacial para quem acredita no descobrimento.\n    <br />\n    <br />\n    <button mat-raised-button color=\"primary\" (click)=\"queroComprar('liberdade')\">Explore</button>\n  </div>\n</div>\n<div *ngIf=\"data.planeta==3\">\n  <h1 mat-dialog-title style=\"text-align: center;\">Aventure-se na fronteira</h1>\n  <div mat-dialog-content style=\"text-align: center;\">\n    <p>Muito obrigado, recebemos suas informações!</p>\n    <img src=\"/assets/aventure_1.png\" style=\"height: 200px;\" />\n    <br />\n    <br />\n    Aventurar-se em experiências aterrorizantes e caçar extraterrestres é o caminho de quem sabe que experiências de\n    radicais foram feitas para ultrapassarem as fronteiras energéticas. Venha aventurar-se na fronteira!\n    <br />\n    <br />\n    <button mat-raised-button color=\"primary\" (click)=\"queroComprar('liberdade')\">Aventure-se</button>\n  </div>\n</div>\n<div *ngIf=\"data.planeta==4\">\n  <h1 mat-dialog-title style=\"text-align: center;\">O espaço em seu negócio</h1>\n  <div mat-dialog-content style=\"text-align: center;\">\n    <p>Muito obrigado, recebemos suas informações!</p>\n    <img src=\"/assets/conecte_1.png\" style=\"height: 200px;\" />\n    <br />\n    <br />\n    Empreendedor é estar em constante inovação com experiências surreais. Essa conexão foi feita para ser inesquecível,\n    assim como você.\n    <br />\n    <br />\n    <button mat-raised-button color=\"primary\" (click)=\"queroComprar('liberdade')\">Conecte-se</button>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Fechar</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/salvo-com-sucesso/salvo-com-sucesso.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salvo-com-sucesso/salvo-com-sucesso.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h1 mat-dialog-title style=\"text-align: center;\">Sua reserva está confirmada!</h1>\n  <div mat-dialog-content style=\"text-align: center;\">\n    <img src=\"/assets/foguete_lancamento.gif\" style=\"height: 200px;\" />\n    <br />\n    <br />\n    <span>Todas as informações estarão no seu email.</span>\n  </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Fechar</button>\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _perfil_planetario_perfil_planetario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil-planetario/perfil-planetario.component */ "./src/app/perfil-planetario/perfil-planetario.component.ts");
            /* harmony import */ var _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relatorio/relatorio.component */ "./src/app/relatorio/relatorio.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'descubraSuaExperiencia', component: _perfil_planetario_perfil_planetario_component__WEBPACK_IMPORTED_MODULE_4__["PerfilPlanetarioComponent"] },
                { path: 'relatorio', component: _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_5__["RelatorioComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.less": 
        /*!************************************!*\
          !*** ./src/app/app.component.less ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header {\n  height: 100px;\n  background-color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25ldG8vbmFzYS9jb3ZpZC0xOS9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn0iLCIuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _perfil_planetario_perfil_planetario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./perfil-planetario/perfil-planetario.component */ "./src/app/perfil-planetario/perfil-planetario.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _experiencia_space_age_experiencia_space_age_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experiencia-space-age/experiencia-space-age.component */ "./src/app/experiencia-space-age/experiencia-space-age.component.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _dialog_lead_dialog_lead_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog-lead/dialog-lead.component */ "./src/app/dialog-lead/dialog-lead.component.ts");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _dialog_compra_dialog_compra_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog-compra/dialog-compra.component */ "./src/app/dialog-compra/dialog-compra.component.ts");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _resultado_quiz_resultado_quiz_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./resultado-quiz/resultado-quiz.component */ "./src/app/resultado-quiz/resultado-quiz.component.ts");
            /* harmony import */ var _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./relatorio/relatorio.component */ "./src/app/relatorio/relatorio.component.ts");
            /* harmony import */ var _conheca_nossanave_conheca_nossanave_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./conheca-nossanave/conheca-nossanave.component */ "./src/app/conheca-nossanave/conheca-nossanave.component.ts");
            /* harmony import */ var _salvo_com_sucesso_salvo_com_sucesso_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./salvo-com-sucesso/salvo-com-sucesso.component */ "./src/app/salvo-com-sucesso/salvo-com-sucesso.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _perfil_planetario_perfil_planetario_component__WEBPACK_IMPORTED_MODULE_8__["PerfilPlanetarioComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                        _experiencia_space_age_experiencia_space_age_component__WEBPACK_IMPORTED_MODULE_10__["ExperienciaSpaceAgeComponent"],
                        _dialog_lead_dialog_lead_component__WEBPACK_IMPORTED_MODULE_14__["DialogLeadComponent"],
                        _dialog_compra_dialog_compra_component__WEBPACK_IMPORTED_MODULE_18__["DialogCompraComponent"],
                        _resultado_quiz_resultado_quiz_component__WEBPACK_IMPORTED_MODULE_26__["ResultadoQuizComponent"],
                        _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_27__["RelatorioComponent"],
                        _conheca_nossanave_conheca_nossanave_component__WEBPACK_IMPORTED_MODULE_28__["ConhecaNossanaveComponent"],
                        _salvo_com_sucesso_salvo_com_sucesso_component__WEBPACK_IMPORTED_MODULE_29__["SalvoComSucessoComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                        ngx_page_scroll__WEBPACK_IMPORTED_MODULE_4__["NgxPageScrollModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp({
                            apiKey: "AIzaSyDFECRN7ZFh2MX-4kyEUB0vviAFB0xrtmo",
                            authDomain: "spaceage-b84cc.firebaseapp.com",
                            databaseURL: "https://spaceage-b84cc.firebaseio.com",
                            projectId: "spaceage-b84cc",
                            storageBucket: "spaceage-b84cc.appspot.com",
                            messagingSenderId: "1072408764021",
                            appId: "1:1072408764021:web:dc2296e4e052240db9e23c",
                            measurementId: "G-CLC4FJM4P8"
                        }),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                    entryComponents: [
                        _dialog_lead_dialog_lead_component__WEBPACK_IMPORTED_MODULE_14__["DialogLeadComponent"],
                        _dialog_compra_dialog_compra_component__WEBPACK_IMPORTED_MODULE_18__["DialogCompraComponent"],
                        _resultado_quiz_resultado_quiz_component__WEBPACK_IMPORTED_MODULE_26__["ResultadoQuizComponent"],
                        _conheca_nossanave_conheca_nossanave_component__WEBPACK_IMPORTED_MODULE_28__["ConhecaNossanaveComponent"],
                        _salvo_com_sucesso_salvo_com_sucesso_component__WEBPACK_IMPORTED_MODULE_29__["SalvoComSucessoComponent"]
                    ],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/conheca-nossanave/conheca-nossanave.component.less": 
        /*!********************************************************************!*\
          !*** ./src/app/conheca-nossanave/conheca-nossanave.component.less ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmhlY2Etbm9zc2FuYXZlL2NvbmhlY2Etbm9zc2FuYXZlLmNvbXBvbmVudC5sZXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/conheca-nossanave/conheca-nossanave.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/conheca-nossanave/conheca-nossanave.component.ts ***!
          \******************************************************************/
        /*! exports provided: ConhecaNossanaveComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConhecaNossanaveComponent", function () { return ConhecaNossanaveComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var ConhecaNossanaveComponent = /** @class */ (function () {
                function ConhecaNossanaveComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                ConhecaNossanaveComponent.prototype.ngOnInit = function () {
                };
                ConhecaNossanaveComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                return ConhecaNossanaveComponent;
            }());
            ConhecaNossanaveComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            ConhecaNossanaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-conheca-nossanave',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conheca-nossanave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conheca-nossanave/conheca-nossanave.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conheca-nossanave.component.less */ "./src/app/conheca-nossanave/conheca-nossanave.component.less")).default]
                })
            ], ConhecaNossanaveComponent);
            /***/ 
        }),
        /***/ "./src/app/dialog-compra/dialog-compra.component.less": 
        /*!************************************************************!*\
          !*** ./src/app/dialog-compra/dialog-compra.component.less ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1jb21wcmEvZGlhbG9nLWNvbXByYS5jb21wb25lbnQubGVzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/dialog-compra/dialog-compra.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/dialog-compra/dialog-compra.component.ts ***!
          \**********************************************************/
        /*! exports provided: DialogCompraComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCompraComponent", function () { return DialogCompraComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var DialogCompraComponent = /** @class */ (function () {
                function DialogCompraComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.startDatePicker = new Date(2045, 0, 1);
                }
                DialogCompraComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                return DialogCompraComponent;
            }());
            DialogCompraComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DialogCompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dialog-compra',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-compra.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-compra/dialog-compra.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-compra.component.less */ "./src/app/dialog-compra/dialog-compra.component.less")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DialogCompraComponent);
            /***/ 
        }),
        /***/ "./src/app/dialog-lead/dialog-lead.component.less": 
        /*!********************************************************!*\
          !*** ./src/app/dialog-lead/dialog-lead.component.less ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1sZWFkL2RpYWxvZy1sZWFkLmNvbXBvbmVudC5sZXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/dialog-lead/dialog-lead.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/dialog-lead/dialog-lead.component.ts ***!
          \******************************************************/
        /*! exports provided: DialogLeadComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLeadComponent", function () { return DialogLeadComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var DialogLeadComponent = /** @class */ (function () {
                function DialogLeadComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                DialogLeadComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                return DialogLeadComponent;
            }());
            DialogLeadComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DialogLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dialog-lead',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-lead.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-lead/dialog-lead.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-lead.component.less */ "./src/app/dialog-lead/dialog-lead.component.less")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DialogLeadComponent);
            /***/ 
        }),
        /***/ "./src/app/experiencia-space-age/experiencia-space-age.component.less": 
        /*!****************************************************************************!*\
          !*** ./src/app/experiencia-space-age/experiencia-space-age.component.less ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2lhLXNwYWNlLWFnZS9leHBlcmllbmNpYS1zcGFjZS1hZ2UuY29tcG9uZW50Lmxlc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/experiencia-space-age/experiencia-space-age.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/experiencia-space-age/experiencia-space-age.component.ts ***!
          \**************************************************************************/
        /*! exports provided: ExperienciaSpaceAgeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaSpaceAgeComponent", function () { return ExperienciaSpaceAgeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ExperienciaSpaceAgeComponent = /** @class */ (function () {
                function ExperienciaSpaceAgeComponent() {
                }
                ExperienciaSpaceAgeComponent.prototype.ngOnInit = function () {
                };
                return ExperienciaSpaceAgeComponent;
            }());
            ExperienciaSpaceAgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-experiencia-space-age',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experiencia-space-age.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experiencia-space-age/experiencia-space-age.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experiencia-space-age.component.less */ "./src/app/experiencia-space-age/experiencia-space-age.component.less")).default]
                })
            ], ExperienciaSpaceAgeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.less": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.less ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: spaceage;\n  src: url(\"/assets/space_age.ttf\");\n}\n.rodape {\n  height: 50px;\n  color: white;\n  background-color: black;\n  text-align: center;\n  line-height: 3;\n}\n.centralizado {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n.logo {\n  background-image: url(/assets/corona_central_live-01.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 45vh;\n  width: 100vw;\n}\n@media only screen and (max-width: 600px) {\n  .logo {\n    background-image: url(/assets/corona_central_live-02.png);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25ldG8vbmFzYS9jb3ZpZC0xOS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNERjtBRElBO0VBQ0UseURBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FESUU7RUFBQTtJQUNFLHlEQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogc3BhY2VhZ2U7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9zcGFjZV9hZ2UudHRmXCIpO1xufVxuXG4ucm9kYXBlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzO1xufVxuXG4uY2VudHJhbGl6YWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jb3JvbmFfY2VudHJhbF9saXZlLTAxLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDQ1dmg7XG4gIHdpZHRoOiAxMDB2dztcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY29yb25hX2NlbnRyYWxfbGl2ZS0wMi5wbmcpO1xuICB9XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHNwYWNlYWdlO1xuICBzcmM6IHVybChcIi9hc3NldHMvc3BhY2VfYWdlLnR0ZlwiKTtcbn1cbi5yb2RhcGUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDM7XG59XG4uY2VudHJhbGl6YWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY29yb25hX2NlbnRyYWxfbGl2ZS0wMS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NXZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5sb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jb3JvbmFfY2VudHJhbF9saXZlLTAyLnBuZyk7XG4gIH1cbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _dialog_lead_dialog_lead_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog-lead/dialog-lead.component */ "./src/app/dialog-lead/dialog-lead.component.ts");
            /* harmony import */ var _dialog_compra_dialog_compra_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-compra/dialog-compra.component */ "./src/app/dialog-compra/dialog-compra.component.ts");
            /* harmony import */ var _conheca_nossanave_conheca_nossanave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../conheca-nossanave/conheca-nossanave.component */ "./src/app/conheca-nossanave/conheca-nossanave.component.ts");
            /* harmony import */ var _salvo_com_sucesso_salvo_com_sucesso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../salvo-com-sucesso/salvo-com-sucesso.component */ "./src/app/salvo-com-sucesso/salvo-com-sucesso.component.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(router, db, dialog) {
                    this.router = router;
                    this.db = db;
                    this.dialog = dialog;
                    this.planetas = [
                        {
                            id: 'liberdade',
                            nome: 'Liberdade para voar',
                            class: 'liberdade_1',
                            descricao: "Que tal vivenciar uma nova experi\u00EAncia em uma gravidade fant\u00E1stica fazendo coisas cotidianas como praticar futebol, v\u00F4lei, t\u00EAnis, lutas, al\u00E9m de, tomar banho, lavar lou\u00E7a e comer em outra gravidade? Se sim, n\u00E3o h\u00E1 d\u00FAvidas que essas experi\u00EAncias foram feitas para a sua liberdade de voar.",
                            nomeBotao: 'Voe'
                        },
                        {
                            id: 'explore',
                            nome: 'Explore o desconhecido',
                            class: 'explore_1',
                            descricao: "J\u00E1 pensou em ser um explorador dos planetas do Circuto Kipuer e investigar as cavernas subterr\u00E2neas, os vulc\u00F5es, a constru\u00E7\u00E3o do pared\u00E3o de gelo, al\u00E9m de ter contato com rochas, esp\u00E9cies, luas, an\u00E9is? Tudo isso pode ser desbravado por voc\u00EA. O desconhecido n\u00E3o \u00E9 mais um problema.",
                            nomeBotao: 'Explore'
                        },
                        {
                            id: 'aventure',
                            nome: 'Aventure-se na fronteira',
                            class: 'aventure_1',
                            descricao: "As experi\u00EAncias de esportes radicais foram feitas para ultrapassarem as fronteiras energ\u00E9ticas. Rapel e bungee jump nas geleiras, saltar de asa delta de estruturas montanhosas, bal\u00E3o em gravidade diferente e, uma experi\u00EAncia aterrorizante ao ca\u00E7ar extraterrestres s\u00E3o aventuras ideais para quem se sente radical.",
                            nomeBotao: 'Aventure-se'
                        },
                        {
                            id: 'conecte',
                            nome: 'O espaço em seu negócio',
                            class: 'conecte_1',
                            descricao: "Destacar-se dos concorrentes sempre foi uma dif\u00EDcil miss\u00E3o, mas o espa\u00E7o tem experi\u00EAncias essenciais para ind\u00FAstrias e empreendimentos. Que tal ter a oportunidade de ser o pioneiro a inovar com materiais almejados e n\u00E3o utilizados?  Na Via Espacial al\u00E9m de misturas de rocha, gelo, nitrog\u00EAnio e outros materiais qu\u00EDmicos ex\u00F3ticos, existe a libera\u00E7\u00E3o para livre pesquisa e utiliza\u00E7\u00E3o para a cria\u00E7\u00E3o de novos produtos seja eles na \u00E1rea farmac\u00EAutica, cosm\u00E9tica, metal\u00FArgica, tecnologa, construtora  e o que mais a sua mente permitir.",
                            nomeBotao: 'Conecte-se'
                        },
                    ];
                    this.perguntas = [
                        {
                            pergunta: 'Como irei?',
                            resposta: 'Desenvolvemos uma nave e com muito carinho a chamamos de ATENA, que irá te proporcionar uma agradável viagem na Via Espacial Trans-Netuniana.'
                        },
                        {
                            pergunta: 'Preciso levar alimentos?',
                            resposta: 'Não precisa se preocupar com isso, durante toda a experiência iremos fornecer todas as alimentações.'
                        },
                        {
                            pergunta: 'Como vou respirar?',
                            resposta: 'Na nossa querida Atena existe todo um sistema que distribui e armazena o oxigênio. Caso queira passear pelos planetas terá uma roupa adequada para que você não sofra nem um dano.'
                        },
                        {
                            pergunta: 'Poderemos sentir algum impacto da pressão atmosférica?',
                            resposta: 'Sim, mas calma serão similares a turbulência no avião e não afetaram em nada a nossa viagem.'
                        },
                        {
                            pergunta: 'Poderei beber água tranquilamente ou terá alguma regra?',
                            resposta: 'Não teremos nenhuma regra que controle a quantidade de água por passageiro, estaremos preparados para atender da melhor forma todos os nossos passageiros.'
                        },
                        {
                            pergunta: 'A energia funcionará normalmente?',
                            resposta: 'Sim, para chegar no destino almejado em alguns momentos passaremos por lugares de pouco luz mas, isso não é um problema pois terá luz e todo continuará funcionando normalmente.'
                        },
                        {
                            pergunta: 'Essa viagem poderá causar algum dano a minha saúde?',
                            resposta: 'Poderá se o passageiro não seguir nossas instruções de segurança e tomar decisões sem consultar nenhum atende.'
                        },
                        {
                            pergunta: 'Existe alguma restrição de público?',
                            resposta: 'Nossa embarcação é restrita para gestantes, portadores de doenças cardíacas, arterial e crianças entre ( 0 a 12 anos ).'
                        },
                        {
                            pergunta: 'Como acontecerá o tempo para quem viajará?',
                            resposta: 'Normalmente, vamos ir a voltar no tempo combinado em Terra.'
                        },
                        {
                            pergunta: 'Terei seguro de vida?',
                            resposta: 'Sim, todos os nossos passageiros terão seguro de vida.'
                        },
                        {
                            pergunta: 'Como será a movimentação entre os planetas?',
                            resposta: 'Todo trajeto acontecerá na Atena mas, quando estivermos no planeta desejado todos terão a oportunidade de colocar suas devidas roupas espaciais com o intuito de usufruir da experiência. '
                        },
                    ];
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                HomeComponent.prototype.onScrollToFinish = function () {
                    document.querySelector('.foguete .fogo').classList.add('d-none');
                };
                HomeComponent.prototype.goToTop = function () {
                    document.querySelector('.foguete .fogo').classList.remove('d-none');
                };
                HomeComponent.prototype.onScroll = function () {
                    if (window.scrollY === 0) {
                        document.querySelector('.foguete').classList.add('d-none');
                    }
                    else {
                        document.querySelector('.foguete').classList.remove('d-none');
                    }
                };
                HomeComponent.prototype.queroComprar = function (planetaId) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_dialog_compra_dialog_compra_component__WEBPACK_IMPORTED_MODULE_6__["DialogCompraComponent"], {
                        data: {
                            nome: '',
                            email: '',
                            incrementeSuaViagem: {
                                esquiar: false,
                                montanhasRochosas: false,
                                noiteRomantica: false,
                                mundosGelados: false
                            },
                            data: null
                        }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        debugger;
                        if (!result)
                            return;
                        _this.db.collection('compras').add(Object.assign({}, result, { planetaId: planetaId, dataInclusao: new Date() }));
                        _this.dialog.open(_salvo_com_sucesso_salvo_com_sucesso_component__WEBPACK_IMPORTED_MODULE_8__["SalvoComSucessoComponent"]);
                    });
                };
                HomeComponent.prototype.conhecaNossaNave = function () {
                    this.dialog.open(_conheca_nossanave_conheca_nossanave_component__WEBPACK_IMPORTED_MODULE_7__["ConhecaNossanaveComponent"]);
                };
                HomeComponent.prototype.enviarLead = function () {
                    if (!this.email)
                        return;
                    this.db.collection('leads').add({ email: this.email, dataInclusao: new Date() });
                    this.email = '';
                    var dialogRef = this.dialog.open(_dialog_lead_dialog_lead_component__WEBPACK_IMPORTED_MODULE_5__["DialogLeadComponent"], {
                        data: { nome: '', email: '' }
                    });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
            ], HomeComponent.prototype, "onScroll", null);
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.less */ "./src/app/home/home.component.less")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/perfil-planetario/perfil-planetario.component.less": 
        /*!********************************************************************!*\
          !*** ./src/app/perfil-planetario/perfil-planetario.component.less ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".headerExperiencia {\n  background-image: url(/assets/header.png);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.headerExperiencia .logo {\n  height: 100px;\n  padding: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .headerExperiencia .logo {\n    height: 70px;\n  }\n}\n.quiz {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media only screen and (max-width: 600px) {\n  .quiz h1 {\n    text-align: center;\n  }\n}\n.quiz form {\n  width: 70%;\n}\n@media only screen and (max-width: 600px) {\n  .quiz form {\n    width: 90%;\n  }\n}\n.quiz form > * {\n  width: 100%;\n}\n.rodape {\n  height: 50px;\n  color: white;\n  background-color: black;\n  text-align: center;\n  line-height: 3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25ldG8vbmFzYS9jb3ZpZC0xOS9zcmMvYXBwL3BlcmZpbC1wbGFuZXRhcmlvL3BlcmZpbC1wbGFuZXRhcmlvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wZXJmaWwtcGxhbmV0YXJpby9wZXJmaWwtcGxhbmV0YXJpby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQ0VSO0FERFE7RUFBQTtJQUNJLFlBQUE7RUNJVjtBQUNGO0FEREE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0dKO0FERFE7RUFBQTtJQUNJLGtCQUFBO0VDSVY7QUFDRjtBREZJO0VBQ0ksVUFBQTtBQ0lSO0FESFE7RUFBQTtJQUNJLFVBQUE7RUNNVjtBQUNGO0FETFE7RUFDSSxXQUFBO0FDT1o7QURGQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC1wbGFuZXRhcmlvL3BlcmZpbC1wbGFuZXRhcmlvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckV4cGVyaWVuY2lhIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9oZWFkZXIucG5nKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICYgLmxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSAge1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnF1aXoge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYgaDEge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgICYgZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpICB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICAgICYgID4gKiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJvZGFwZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDM7XG59IiwiLmhlYWRlckV4cGVyaWVuY2lhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaGVhZGVyLnBuZyk7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXJFeHBlcmllbmNpYSAubG9nbyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXJFeHBlcmllbmNpYSAubG9nbyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG4ucXVpeiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5xdWl6IGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5xdWl6IGZvcm0ge1xuICB3aWR0aDogNzAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucXVpeiBmb3JtIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4ucXVpeiBmb3JtID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvZGFwZSB7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMztcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/perfil-planetario/perfil-planetario.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/perfil-planetario/perfil-planetario.component.ts ***!
          \******************************************************************/
        /*! exports provided: PerfilPlanetarioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPlanetarioComponent", function () { return PerfilPlanetarioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _resultado_quiz_resultado_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resultado-quiz/resultado-quiz.component */ "./src/app/resultado-quiz/resultado-quiz.component.ts");
            var PerfilPlanetarioComponent = /** @class */ (function () {
                function PerfilPlanetarioComponent(formBuilder, db, dialog) {
                    this.formBuilder = formBuilder;
                    this.db = db;
                    this.dialog = dialog;
                    this.startForm();
                }
                PerfilPlanetarioComponent.prototype.ngOnInit = function () {
                };
                PerfilPlanetarioComponent.prototype.enviarQuiz = function () {
                    if (!this.quiz.value || this.quiz.invalid)
                        return;
                    this.db.collection('quiz').add(Object.assign({}, this.quiz.value, { dataInclusao: new Date() }));
                    this.analisaQuiz(this.quiz.value);
                    this.startForm();
                };
                PerfilPlanetarioComponent.prototype.startForm = function () {
                    this.quiz = this.formBuilder.group({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        voceSeConsidera: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        idade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        ondeVive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        profissao: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        filhos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                        pretendeViajarComOsFilhos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                        estadoCivil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        tempoLivre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        esporteVoceGosta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        ficcaoCientifica: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                        destinoDosSonhos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        viagemComum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        sonhoDeSerAstronauta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                    });
                };
                PerfilPlanetarioComponent.prototype.analisaQuiz = function (quiz) {
                    var perfilVoe = 0;
                    var perfilDescubra = 0;
                    var perfilAventure = 0;
                    var perfilConecte = 0;
                    if (quiz.tempoLivre === 'artesanato') {
                        perfilVoe++;
                    }
                    else if (quiz.tempoLivre === 'arlivre') {
                        perfilDescubra++;
                    }
                    else if (quiz.tempoLivre === 'cozinhar') {
                        perfilAventure++;
                    }
                    else if (quiz.tempoLivre === 'filmeSeries') {
                        perfilConecte++;
                    }
                    if (quiz.esporteVoceGosta === 'tenis') {
                        perfilVoe++;
                    }
                    else if (quiz.esporteVoceGosta === 'luta') {
                        perfilDescubra++;
                    }
                    else if (quiz.esporteVoceGosta === 'volei') {
                        perfilAventure++;
                    }
                    else if (quiz.esporteVoceGosta === 'futebol') {
                        perfilConecte++;
                    }
                    if (quiz.viagemComum === 'relaxante') {
                        perfilVoe++;
                    }
                    else if (quiz.viagemComum === 'aventura') {
                        perfilDescubra++;
                    }
                    else if (quiz.viagemComum === 'espiritual') {
                        perfilAventure++;
                    }
                    else if (quiz.viagemComum === 'historica') {
                        perfilConecte++;
                    }
                    var planeta;
                    if (perfilVoe) {
                        planeta = 1;
                    }
                    else if (perfilDescubra) {
                        planeta = 2;
                    }
                    else if (perfilAventure) {
                        planeta = 3;
                    }
                    else if (perfilConecte) {
                        planeta = 4;
                    }
                    else {
                        planeta = Math.floor(Math.random() * (5 - 1) + 1);
                    }
                    this.dialog.open(_resultado_quiz_resultado_quiz_component__WEBPACK_IMPORTED_MODULE_5__["ResultadoQuizComponent"], {
                        data: {
                            planeta: planeta
                        }
                    });
                };
                return PerfilPlanetarioComponent;
            }());
            PerfilPlanetarioComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
            ]; };
            PerfilPlanetarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-perfil-planetario',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil-planetario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil-planetario/perfil-planetario.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil-planetario.component.less */ "./src/app/perfil-planetario/perfil-planetario.component.less")).default]
                })
            ], PerfilPlanetarioComponent);
            /***/ 
        }),
        /***/ "./src/app/relatorio/relatorio.component.less": 
        /*!****************************************************!*\
          !*** ./src/app/relatorio/relatorio.component.less ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbGF0b3Jpby9yZWxhdG9yaW8uY29tcG9uZW50Lmxlc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/relatorio/relatorio.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/relatorio/relatorio.component.ts ***!
          \**************************************************/
        /*! exports provided: RelatorioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioComponent", function () { return RelatorioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var RelatorioComponent = /** @class */ (function () {
                function RelatorioComponent(db) {
                    this.db = db;
                }
                RelatorioComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.db.collection('compras').valueChanges().subscribe(function (compras) {
                        _this.compras = compras;
                    });
                    this.db.collection('leads').valueChanges().subscribe(function (leads) {
                        _this.leads = leads;
                    });
                    this.db.collection('quiz').valueChanges().subscribe(function (quiz) {
                        _this.quiz = quiz;
                    });
                };
                return RelatorioComponent;
            }());
            RelatorioComponent.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            RelatorioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-relatorio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./relatorio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/relatorio/relatorio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./relatorio.component.less */ "./src/app/relatorio/relatorio.component.less")).default]
                })
            ], RelatorioComponent);
            /***/ 
        }),
        /***/ "./src/app/resultado-quiz/resultado-quiz.component.less": 
        /*!**************************************************************!*\
          !*** ./src/app/resultado-quiz/resultado-quiz.component.less ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby1xdWl6L3Jlc3VsdGFkby1xdWl6LmNvbXBvbmVudC5sZXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/resultado-quiz/resultado-quiz.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/resultado-quiz/resultado-quiz.component.ts ***!
          \************************************************************/
        /*! exports provided: ResultadoQuizComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoQuizComponent", function () { return ResultadoQuizComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _dialog_compra_dialog_compra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog-compra/dialog-compra.component */ "./src/app/dialog-compra/dialog-compra.component.ts");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ResultadoQuizComponent = /** @class */ (function () {
                function ResultadoQuizComponent(dialogRef, data, dialog, db, router) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.dialog = dialog;
                    this.db = db;
                    this.router = router;
                }
                ResultadoQuizComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                ResultadoQuizComponent.prototype.queroComprar = function (planetaId) {
                    var _this = this;
                    this.onNoClick();
                    var dialogRef = this.dialog.open(_dialog_compra_dialog_compra_component__WEBPACK_IMPORTED_MODULE_3__["DialogCompraComponent"], {
                        data: {
                            nome: '',
                            email: '',
                            incrementeSuaViagem: {
                                esquiar: false,
                                montanhasRochosas: false,
                                noiteRomantica: false,
                                mundosGelados: false
                            },
                            data: null
                        }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (!result) {
                            _this.router.navigate(['/']);
                            return false;
                        }
                        _this.router.navigate(['/']);
                        _this.db.collection('compras').add(Object.assign({}, result, { planetaId: planetaId, dataInclusao: new Date() }));
                    });
                };
                return ResultadoQuizComponent;
            }());
            ResultadoQuizComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            ResultadoQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-resultado-quiz',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resultado-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resultado-quiz/resultado-quiz.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resultado-quiz.component.less */ "./src/app/resultado-quiz/resultado-quiz.component.less")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ResultadoQuizComponent);
            /***/ 
        }),
        /***/ "./src/app/salvo-com-sucesso/salvo-com-sucesso.component.less": 
        /*!********************************************************************!*\
          !*** ./src/app/salvo-com-sucesso/salvo-com-sucesso.component.less ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbHZvLWNvbS1zdWNlc3NvL3NhbHZvLWNvbS1zdWNlc3NvLmNvbXBvbmVudC5sZXNzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/salvo-com-sucesso/salvo-com-sucesso.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/salvo-com-sucesso/salvo-com-sucesso.component.ts ***!
          \******************************************************************/
        /*! exports provided: SalvoComSucessoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvoComSucessoComponent", function () { return SalvoComSucessoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var SalvoComSucessoComponent = /** @class */ (function () {
                function SalvoComSucessoComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                SalvoComSucessoComponent.prototype.ngOnInit = function () {
                };
                SalvoComSucessoComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                return SalvoComSucessoComponent;
            }());
            SalvoComSucessoComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            SalvoComSucessoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-salvo-com-sucesso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salvo-com-sucesso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/salvo-com-sucesso/salvo-com-sucesso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salvo-com-sucesso.component.less */ "./src/app/salvo-com-sucesso/salvo-com-sucesso.component.less")).default]
                })
            ], SalvoComSucessoComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/neto/nasa/covid-19/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map