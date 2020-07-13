(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-info-http.service.ts":
/*!******************************************!*\
  !*** ./src/app/all-info-http.service.ts ***!
  \******************************************/
/*! exports provided: AllInfoHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInfoHttpService", function() { return AllInfoHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let AllInfoHttpService = /** @class */ (() => {
    class AllInfoHttpService {
        constructor(_http) {
            this._http = _http;
        }
        getAllData() {
            return this._http.get('https://restcountries.eu/rest/v2/all');
        }
    }
    AllInfoHttpService.ɵfac = function AllInfoHttpService_Factory(t) { return new (t || AllInfoHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    AllInfoHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllInfoHttpService, factory: AllInfoHttpService.ɵfac, providedIn: 'root' });
    return AllInfoHttpService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllInfoHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AppComponent = /** @class */ (() => {
    class AppComponent {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 120vh;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
    return AppComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _regions_regions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regions/regions.component */ "./src/app/regions/regions.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _search_results_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-results.pipe */ "./src/app/search-results.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./autofocus.directive */ "./src/app/autofocus.directive.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/__ivy_ngcc__/fesm2015/agm-snazzy-info-window.js");
/* harmony import */ var _keys_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./keys.pipe */ "./src/app/keys.pipe.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data-storage.service */ "./src/app/data-storage.service.ts");














// add these imports








const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], pathMatch: 'full' },
    { path: 'results/:filter', component: _results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"] },
    { path: 'details/:alpha3Code', component: _details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"] }
];
let AppModule = /** @class */ (() => {
    class AppModule {
        constructor(_dataStore) {
            this._dataStore = _dataStore;
            this._dataStore.processData();
        }
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_18__["DataStorageService"])); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDhMVN7GypCP7HhT_3ydc8in7Qm2BDeQM0',
                    apiVersion: '3.31'
                }),
                _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_15__["AgmSnazzyInfoWindowModule"],
                // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
                _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"]
            ]] });
    return AppModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _regions_regions_component__WEBPACK_IMPORTED_MODULE_4__["RegionsComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        _search_results_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchResultsPipe"],
        _results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
        _autofocus_directive__WEBPACK_IMPORTED_MODULE_13__["AutofocusDirective"],
        _keys_pipe__WEBPACK_IMPORTED_MODULE_16__["KeysPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"], _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_15__["AgmSnazzyInfoWindowModule"],
        // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _regions_regions_component__WEBPACK_IMPORTED_MODULE_4__["RegionsComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                    _search_results_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchResultsPipe"],
                    _results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
                    _autofocus_directive__WEBPACK_IMPORTED_MODULE_13__["AutofocusDirective"],
                    _keys_pipe__WEBPACK_IMPORTED_MODULE_16__["KeysPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyDhMVN7GypCP7HhT_3ydc8in7Qm2BDeQM0',
                        apiVersion: '3.31'
                    }),
                    _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_15__["AgmSnazzyInfoWindowModule"],
                    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], function () { return [{ type: _data_storage_service__WEBPACK_IMPORTED_MODULE_18__["DataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/autofocus.directive.ts":
/*!****************************************!*\
  !*** ./src/app/autofocus.directive.ts ***!
  \****************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AutofocusDirective = /** @class */ (() => {
    class AutofocusDirective {
        constructor(el) {
            this.el = el;
            this.focus = true;
        }
        ngOnInit() {
            if (this.focus) {
                // Otherwise Angular throws error: Expression has changed after it was checked.
                window.setTimeout(() => {
                    this.el.nativeElement.focus();
                });
            }
        }
        set autofocus(condition) {
            this.focus = condition !== false;
        }
    }
    AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutofocusDirective, selectors: [["", "autofocus", ""]], inputs: { autofocus: "autofocus" } });
    return AutofocusDirective;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutofocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[autofocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/data-storage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-storage.service.ts ***!
  \*****************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _all_info_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-info-http.service */ "./src/app/all-info-http.service.ts");




let DataStorageService = /** @class */ (() => {
    class DataStorageService {
        constructor(_httpService) {
            this._httpService = _httpService;
            this._fullDataStore = [];
            this._shortDataStore = [];
            this.userQuery = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        processData() {
            this._httpService.getAllData().subscribe((response) => {
                this._shortDataStore = response.map(r => {
                    return {
                        name: r.name,
                        flag: r.flag,
                        alpha3Code: r.alpha3Code.toLowerCase()
                    };
                });
                this._fullDataStore = response;
            }, error => {
                console.log(error);
            });
        }
        get longDataStore() {
            return this._fullDataStore;
        }
        get shortDataStore() {
            return this._shortDataStore;
        }
    }
    DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_all_info_http_service__WEBPACK_IMPORTED_MODULE_2__["AllInfoHttpService"])); };
    DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });
    return DataStorageService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _all_info_http_service__WEBPACK_IMPORTED_MODULE_2__["AllInfoHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/details.service.ts":
/*!************************************!*\
  !*** ./src/app/details.service.ts ***!
  \************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-storage.service */ "./src/app/data-storage.service.ts");



let DetailsService = /** @class */ (() => {
    class DetailsService {
        constructor(dataStorage) {
            this.dataStorage = dataStorage;
        }
        getDetails(code) {
            return this.dataStorage.longDataStore.find(d => d['alpha3Code'].toLowerCase() === code);
        }
    }
    DetailsService.ɵfac = function DetailsService_Factory(t) { return new (t || DetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"])); };
    DetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailsService, factory: DetailsService.ɵfac, providedIn: 'root' });
    return DetailsService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details.service */ "./src/app/details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/__ivy_ngcc__/fesm2015/agm-snazzy-info-window.js");
/* harmony import */ var _keys_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../keys.pipe */ "./src/app/keys.pipe.ts");








function DetailsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " My first Snazzy Info Window! ");
} }
function DetailsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spelling_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spelling_r7);
} }
function DetailsComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", key_r9, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.searchedData.translations[key_r9]);
} }
function DetailsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_div_39_div_1_Template, 5, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.searchedData.translations));
} }
const _c0 = function () { return ["/results", "language"]; };
const _c1 = function (a0) { return { q: a0 }; };
function DetailsComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, (language_r10.name || "").toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r10.nativeName);
} }
const _c2 = function () { return ["/results", "currency"]; };
function DetailsComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, (currency_r11.code || "").toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currency_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currency_r11.code);
} }
function DetailsComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const border_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](border_r12);
} }
function DetailsComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bloc_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bloc_r13.acronym);
} }
const _c3 = function () { return ["/"]; };
const _c4 = function () { return ["/results", "region"]; };
let DetailsComponent = /** @class */ (() => {
    class DetailsComponent {
        constructor(_location, _detailsService, _activatedRoute) {
            this._location = _location;
            this._detailsService = _detailsService;
            this._activatedRoute = _activatedRoute;
        }
        ngOnInit() {
            this.searchedData = { name: '', flag: '', latlng: [] };
            this.population = '';
            this.showTranslations = false;
            this.toggleText = 'Show';
            setTimeout(() => {
                this.searchedData = this._detailsService.getDetails(this._activatedRoute.snapshot.params['alpha3Code']);
                this.population = parseInt(this.searchedData.population, 10).toLocaleString();
            }, 2000);
        }
        goBack() {
            this._location.back();
        }
        toggleTranslations() {
            this.showTranslations = !this.showTranslations;
            this.toggleText = this.toggleText === 'Show' ? 'Hide' : 'Show';
        }
    }
    DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 119, vars: 41, consts: [[1, "wrapper"], [1, "details__container"], [1, "nav"], [1, "back", 3, "click"], [1, "icon-back"], [1, "search", 3, "routerLink"], [1, "icon-search"], [1, "details"], [1, "header"], [1, "name"], [3, "src", "alt"], [1, "map"], [2, "height", "400px", 3, "gestureHandling", "zoom", "scrollwheel", "latitude", "longitude"], [3, "latitude", "longitude"], [3, "maxWidth", "closeWhenOthersOpen"], [1, "cards__container"], [1, "common", "names"], [1, "label"], [1, "key"], [1, "value"], [4, "ngFor", "ngForOf"], [1, "key", "translations"], [3, "click"], [4, "ngIf"], [1, "common", "language"], [1, "key", "name"], [1, "value", "native__name"], [1, "common", "codes"], ["class", "currency", 4, "ngFor", "ngForOf"], [1, "common", "geography"], [1, "router__link", 3, "routerLink", "queryParams"], ["class", "translation", 4, "ngFor", "ngForOf"], [1, "translation"], [1, "key", "row"], [1, "value", "row"], [1, "currency"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_3_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "agm-map", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "agm-marker", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "agm-snazzy-info-window", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DetailsComponent_ng_template_18_Template, 1, 0, "ng-template");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Names");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Common:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Common (Native):");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Alternative spellings:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DetailsComponent_div_34_Template, 2, 1, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Translations:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_Template_a_click_37_listener() { return ctx.toggleTranslations(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DetailsComponent_div_39_Template, 3, 3, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Language");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Native Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DetailsComponent_div_47_Template, 6, 7, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Codes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ISO 3166-1 alpha-2:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "ISO 3166-1 alpha-3:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ISO 3166-1 numeric:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "International calling code:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "ISO 4217 currency code:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, DetailsComponent_div_70_Template, 7, 7, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Top level domain:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Geography");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Region:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Subregion:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Capital:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Demonym:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Lat/Lng:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Area:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Land borders:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, DetailsComponent_div_106_Template, 2, 1, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Regional Blocs:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, DetailsComponent_div_110_Template, 2, 1, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Timezones:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Population:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.searchedData.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.searchedData.name.toLowerCase());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gestureHandling", "coopeative")("zoom", 5)("scrollwheel", null)("latitude", ctx.searchedData.latlng[0])("longitude", ctx.searchedData.latlng[1]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", 51.673858)("longitude", 7.815982);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 200)("closeWhenOthersOpen", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.nativeName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedData.altSpellings);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toggleText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTranslations);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedData.languages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.alpha2Code);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.alpha3Code);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.numericCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.callingCodes);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedData.currencies);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.topLevelDomain);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c1, (ctx.searchedData.region || "").toLowerCase()));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.region);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.subregion);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.capital);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.demonym);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.latlng);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.searchedData.area, "km\u00B2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedData.borders);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedData.regionalBlocs);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchedData.timezones);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.population);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"], _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_5__["AgmSnazzyInfoWindow"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_keys_pipe__WEBPACK_IMPORTED_MODULE_6__["KeysPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  padding: 5% 0;\r\n  background-color: #f2f2f2;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2331672f' fill-opacity='0.36' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\");\r\n}\r\n\r\n.details__container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  max-width: 1000px;\r\n  min-height: 120vh;\r\n  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n  background: #fff;\r\n  padding: 2%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: rgba(0, 0, 0, 0.05);\r\n  padding: 1%;\r\n}\r\n\r\n.back[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 9px 18px;\r\n  color: var(--base);\r\n  background: rgba(49, 103, 47, 0.2);\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  border-bottom: 2px solid rgba(49, 103, 47, 0.6);\r\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.icon-back[_ngcontent-%COMP%]:before {\r\n  color: var(--base);\r\n}\r\n\r\n.back[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(2px);\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: var(--base);\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: var(--base);\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin: 3% 0;\r\n  height: 80vh;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  word-wrap: break-word;\r\n  text-align: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 200px;\r\n  display: inline-block;\r\n}\r\n\r\n.map[_ngcontent-%COMP%] {\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.cards__container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.common[_ngcontent-%COMP%] {\r\n  flex: 0 0 100%;\r\n  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n  height: 2%;\r\n  padding: 2%;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.key[_ngcontent-%COMP%], .value[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: inline-block;\r\n  margin: 6% 0;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.key[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  border-left: 2px dotted rgba(0, 0, 0, 0.9);\r\n  padding-left: 4%;\r\n}\r\n\r\n.value[_ngcontent-%COMP%] {\r\n  border-right: 2px dotted rgba(0, 0, 0, 0.8);\r\n  padding-right: 4%;\r\n  text-align: right;\r\n}\r\n\r\n.label[_ngcontent-%COMP%], .value[_ngcontent-%COMP%], .key[_ngcontent-%COMP%], .row[_ngcontent-%COMP%], .name[_ngcontent-%COMP%], .value[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.router__link[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.9);\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: box-shadow 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\r\n  box-shadow: inset 0 -3px 0 0 rgba(49, 103, 47, 0.6);\r\n  cursor: pointer;\r\n  padding-bottom: 1%;\r\n}\r\n\r\n.router__link[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 -12px 0 0 rgba(49, 103, 47, 0.5);\r\n}\r\n\r\n.language[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .language[_ngcontent-%COMP%]   .native__name[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.translations[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.translations[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-left: 3%;\r\n  font-size: 0.8rem;\r\n  color: var(--base);\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n.translation[_ngcontent-%COMP%]    > .key[_ngcontent-%COMP%], .translation[_ngcontent-%COMP%]    > .value[_ngcontent-%COMP%] {\r\n  margin: 4% 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .details__container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n  .header[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    height: auto;\r\n  }\r\n  .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n  .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 300px;\r\n  }\r\n  .common[_ngcontent-%COMP%] {\r\n    flex: 0 0 60%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 992px) {\r\n  .common[_ngcontent-%COMP%] {\r\n    flex: 0 0 45%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtPQUFrTztBQUNwTzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLCtDQUErQztFQUMvQyxrREFBa0Q7QUFDcEQ7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkNBQTZDO0VBQzdDLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7RUFNRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixrRUFBa0U7RUFDbEUsbURBQW1EO0VBQ25ELGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUEsMkRBQTJEOztBQUMzRCwwREFBMEQ7O0FBRTFELDJDQUEyQzs7QUFDM0M7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSwyQ0FBMkM7O0FBQzNDO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDUlIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCclM0UlM0NwYXRoIGZpbGw9JyUyMzMxNjcyZicgZmlsbC1vcGFjaXR5PScwLjM2JyBkPSdNMSAzaDF2MUgxVjN6bTItMmgxdjFIM1YxeiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi5kZXRhaWxzX19jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHZoO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogOXB4IDE4cHg7XHJcbiAgY29sb3I6IHZhcigtLWJhc2UpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDksIDEwMywgNDcsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDQ5LCAxMDMsIDQ3LCAwLjYpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcbi5pY29uLWJhY2s6YmVmb3JlIHtcclxuICBjb2xvcjogdmFyKC0tYmFzZSk7XHJcbn1cclxuLmJhY2s6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tYmFzZSk7XHJcbn1cclxuXHJcbi5zZWFyY2ggaSB7XHJcbiAgY29sb3I6IHZhcigtLWJhc2UpO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDMlIDA7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4uaGVhZGVyIC5uYW1lIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5jYXJkc19fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNvbW1vbiB7XHJcbiAgZmxleDogMCAwIDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG4gIGhlaWdodDogMiU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5rZXksXHJcbi52YWx1ZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA2JSAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5rZXkge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggZG90dGVkIHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGJvcmRlci1yaWdodDogMnB4IGRvdHRlZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgcGFkZGluZy1yaWdodDogNCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5sYWJlbCxcclxuLnZhbHVlLFxyXG4ua2V5LFxyXG4ucm93LFxyXG4ubmFtZSxcclxuLnZhbHVlICoge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbn1cclxuLnJvdXRlcl9fbGluayB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGN1YmljLWJlemllcigwLjg5NSwgMC4wMywgMC42ODUsIDAuMjIpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSg0OSwgMTAzLCA0NywgMC42KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG59XHJcblxyXG4ucm91dGVyX19saW5rOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xMnB4IDAgMCByZ2JhKDQ5LCAxMDMsIDQ3LCAwLjUpO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UgLm5hbWUsXHJcbi5sYW5ndWFnZSAubmF0aXZlX19uYW1lIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcbi5yb3cge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4udHJhbnNsYXRpb25zIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRyYW5zbGF0aW9ucyBhIHtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6IHZhcigtLWJhc2UpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRyYW5zbGF0aW9uID4gLmtleSxcclxuLnRyYW5zbGF0aW9uID4gLnZhbHVlIHtcclxuICBtYXJnaW46IDQlIDA7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KSAqL1xyXG4vKiBObyBtZWRpYSBxdWVyeSBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIEJvb3RzdHJhcCAqL1xyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRldGFpbHNfX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5oZWFkZXIgLm5hbWUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmhlYWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIC5jb21tb24ge1xyXG4gICAgZmxleDogMCAwIDYwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb21tb24ge1xyXG4gICAgZmxleDogMCAwIDQ1JTtcclxuICB9XHJcbn1cclxuIl19 */"] });
    return DetailsComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _regions_regions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../regions/regions.component */ "./src/app/regions/regions.component.ts");





function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a Region:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openSearch = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_app_search_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closedClicked", function HomeComponent_app_search_1_Template_app_search_closedClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openSearch = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_app_regions_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-regions");
} }
let HomeComponent = /** @class */ (() => {
    class HomeComponent {
        constructor() {
            this.openSearch = false;
        }
        ngOnInit() { }
    }
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 3, consts: [["class", "search", 4, "ngIf"], [3, "closedClicked", 4, "ngIf"], [4, "ngIf"], [1, "search"], [1, "instruction"], [3, "click"], [1, "icon-search"], [3, "closedClicked"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 5, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_search_1_Template, 1, 0, "app-search", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_regions_2_Template, 1, 0, "app-regions", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openSearch);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _regions_regions_component__WEBPACK_IMPORTED_MODULE_3__["RegionsComponent"]], styles: [".search[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  height: 70px;\r\n  border-top: 5px solid var(--base);\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n}\r\n\r\n.instruction[_ngcontent-%COMP%] {\r\n  font-size: 1.6rem;\r\n  margin-left: 1%;\r\n  color: rgba(0, 0, 0, 0.9);\r\n  border-left: 4px solid #ffeb3b;\r\n  padding: 5px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  margin-right: 1%;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition: all 300ms;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n  color: rgba(0, 0, 0, 0.85);\r\n}\r\n\r\napp-search[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.95);\r\n  border-top: 5px solid var(--base);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tYmFzZSk7XHJcbn1cclxuXHJcbi5zZWFyY2ggYSxcclxuLnNlYXJjaCBpIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuLmluc3RydWN0aW9uIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZmViM2I7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2ggYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxufVxyXG4uc2VhcmNoIGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbi5zZWFyY2ggaTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcbn1cclxuXHJcbmFwcC1zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45NSk7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLWJhc2UpO1xyXG59XHJcbiJdfQ== */"] });
    return HomeComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/keys.pipe.ts":
/*!******************************!*\
  !*** ./src/app/keys.pipe.ts ***!
  \******************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let KeysPipe = /** @class */ (() => {
    class KeysPipe {
        transform(value) {
            if (!value) {
                return null;
            }
            return Object.keys(value);
        }
    }
    KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
    KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
    return KeysPipe;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'keys' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-storage.service */ "./src/app/data-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autofocus.directive */ "./src/app/autofocus.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0, a1) { return { "category__selected": a0, "category__not--selected": a1 }; };
function NavbarComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_div_12_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.searchedType = $event; })("ngModelChange", function NavbarComponent_div_12_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.userQuerying(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", category_r2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r1.searchedType == category_r2, ctx_r1.searchedType != category_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r2)("ngModel", ctx_r1.searchedType)("id", category_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2, " ");
} }
const _c1 = function (a0) { return { show__filter: a0 }; };
let NavbarComponent = /** @class */ (() => {
    class NavbarComponent {
        constructor(_dataStore) {
            this._dataStore = _dataStore;
            this.searchedType = 'name';
            this.categories = ['name', 'region', 'currency', 'language'];
            this.showFilter = false;
        }
        ngOnInit() { }
        onSubmit() { }
        userQuerying() {
            // emit the entered text by user
            this._dataStore.userQuery.next({
                searchedText: this.searchedText,
                searchedType: this.searchedType
            });
        }
    }
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { searchedText: "searchedText", searchedType: "searchedType" }, decls: 13, vars: 5, consts: [[1, "navbar"], [1, "search__container"], [1, "search__input--wrapper"], [1, "search__icon"], [1, "icon-search"], ["type", "text", "name", "search", "placeholder", "Search", "autofocus", "", 3, "ngModel", "ngModelChange"], ["search", ""], [1, "filter", 3, "click"], [1, "icon-filter"], [1, "filter__container", 3, "ngClass"], ["class", "category__radio", 4, "ngFor", "ngForOf"], [1, "category__radio"], [3, "for", "ngClass"], ["type", "radio", "name", "category", 3, "value", "ngModel", "id", "ngModelChange"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchedText = $event; })("ngModelChange", function NavbarComponent_Template_input_ngModelChange_6_listener() { return ctx.userQuerying(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener() { return ctx.showFilter = !ctx.showFilter; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_div_12_Template, 4, 9, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchedText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.showFilter));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__["AutofocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  border-top: 5px solid var(--base);\r\n}\r\n\r\n.search__container[_ngcontent-%COMP%] {\r\n  height: 95px;\r\n  background: rgba(0, 0, 0, 0.9);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.search__input--wrapper[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%], [name='search'][_ngcontent-%COMP%] {\r\n  outline: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  font-size: 1.1rem;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n[name='search'][_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid var(--base);\r\n  color: rgba(255, 255, 255, 0.9);\r\n  padding: 0 0 1% 3%;\r\n  width: 60%;\r\n  transition: width 300ms ease-in;\r\n}\r\n\r\n[name='search'][_ngcontent-%COMP%]:focus {\r\n  width: 70%;\r\n}\r\n\r\n.search__icon[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  border-bottom: 2px solid var(--base);\r\n  padding-bottom: 1%;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n  color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.9);\r\n  cursor: pointer;\r\n  display: flex;\r\n}\r\n\r\n.icon-filter[_ngcontent-%COMP%]:before, .icon-search[_ngcontent-%COMP%]:before {\r\n  margin: 0;\r\n  color: rgba(255, 255, 255, 0.9);\r\n  margin-left: 4px;\r\n}\r\n\r\n.filter__container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: 0;\r\n  background-color: #fff;\r\n  transform: rotateX(90deg);\r\n  transform-origin: top;\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.show__filter[_ngcontent-%COMP%] {\r\n  transform: rotateX(0deg);\r\n  height: 90vh;\r\n}\r\n\r\n.category__radio[_ngcontent-%COMP%] {\r\n  margin: 4% 0;\r\n}\r\n\r\n.category__radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  cursor: pointer;\r\n  text-transform: capitalize;\r\n  letter-spacing: 2px;\r\n  transition: color 300ms ease-in;\r\n}\r\n\r\n.category__radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  position: relative;\r\n  top: -3px;\r\n  display: none;\r\n}\r\n\r\n.category__selected[_ngcontent-%COMP%] {\r\n  color: var(--base);\r\n}\r\n\r\n.category__not--selected[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.65);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .filter__container[_ngcontent-%COMP%] {\r\n    justify-content: space-around;\r\n    flex-direction: row;\r\n  }\r\n  .show__filter[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n  }\r\n  .category__radio[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .search__input--wrapper[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n  }\r\n  [name='search'][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 992px) {\r\n  .show__filter[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsU0FBUztFQUNULCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBRUEsMkNBQTJDOztBQUMzQztFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSwyQ0FBMkM7O0FBQzNDO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1iYXNlKTtcclxufVxyXG5cclxuLnNlYXJjaF9fY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDk1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnNlYXJjaF9faW5wdXQtLXdyYXBwZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5maWx0ZXIsXHJcbltuYW1lPSdzZWFyY2gnXSB7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuW25hbWU9J3NlYXJjaCddIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmFzZSk7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBwYWRkaW5nOiAwIDAgMSUgMyU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBlYXNlLWluO1xyXG59XHJcblxyXG5bbmFtZT0nc2VhcmNoJ106Zm9jdXMge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5zZWFyY2hfX2ljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iYXNlKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pY29uLWZpbHRlcjpiZWZvcmUsXHJcbi5pY29uLXNlYXJjaDpiZWZvcmUge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLmZpbHRlcl9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2hvd19fZmlsdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfX3JhZGlvIHtcclxuICBtYXJnaW46IDQlIDA7XHJcbn1cclxuLmNhdGVnb3J5X19yYWRpbyBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfX3JhZGlvIGlucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeV9fc2VsZWN0ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1iYXNlKTtcclxufVxyXG5cclxuLmNhdGVnb3J5X19ub3QtLXNlbGVjdGVkIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmZpbHRlcl9fY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLnNob3dfX2ZpbHRlciB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICAuY2F0ZWdvcnlfX3JhZGlvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zZWFyY2hfX2lucHV0LS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIFtuYW1lPSdzZWFyY2gnXSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNob3dfX2ZpbHRlciB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return NavbarComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }]; }, { searchedText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchedType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/regions/regions.component.ts":
/*!**********************************************!*\
  !*** ./src/app/regions/regions.component.ts ***!
  \**********************************************/
/*! exports provided: RegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return RegionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/results", "region"]; };
const _c1 = function (a0) { return { q: a0 }; };
function RegionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImage(region_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.getAlt(region_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, region_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](region_r1);
} }
let RegionsComponent = /** @class */ (() => {
    class RegionsComponent {
        constructor() {
            this.getImage = region => `./assets/regions/${region}.svg`;
            this.getAlt = region => `region ${region}`;
        }
        ngOnInit() {
            this.regions = ['americas', 'europe', 'africa', 'asia', 'oceania'];
        }
    }
    RegionsComponent.ɵfac = function RegionsComponent_Factory(t) { return new (t || RegionsComponent)(); };
    RegionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionsComponent, selectors: [["app-regions"]], decls: 2, vars: 1, consts: [[1, "regions"], ["class", "region", 4, "ngFor", "ngForOf"], [1, "region"], [1, "middle"], [3, "src", "alt"], [1, "name", 3, "routerLink", "queryParams"]], template: function RegionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegionsComponent_div_1_Template, 5, 8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.regions);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".region[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.region[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n.middle[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .region[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .region[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    height: 400px;\r\n  }\r\n  .middle[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n  }\r\n}\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  text-transform: capitalize;\r\n  color: rgba(0, 0, 0, 0.9);\r\n  margin-left: 4%;\r\n  outline: 0;\r\n  letter-spacing: 2px;\r\n  transition: box-shadow 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\r\n  box-shadow: inset 0 -6px 0 0 rgba(49, 103, 47, 0.8);\r\n  cursor: pointer;\r\n}\r\n.name[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 -30px 0 0 rgba(49, 103, 47, 0.8);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaW9ucy9yZWdpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBLG1EQUFtRDtBQUNuRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrRUFBa0U7RUFDbEUsbURBQW1EO0VBQ25ELGVBQWU7QUFDakI7QUFFQTtFQUNFLG9EQUFvRDtBQUN0RCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lvbnMvcmVnaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lvbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmVnaW9uIGltZyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLyogU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAucmVnaW9uIGltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucmVnaW9uIGltZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuICAubWlkZGxlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMik7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNnB4IDAgMCByZ2JhKDQ5LCAxMDMsIDQ3LCAwLjgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hbWU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTMwcHggMCAwIHJnYmEoNDksIDEwMywgNDcsIDAuOCk7XHJcbn1cclxuIl19 */"] });
    return RegionsComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regions',
                templateUrl: './regions.component.html',
                styleUrls: ['./regions.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-storage.service */ "./src/app/data-storage.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_results_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-results.pipe */ "./src/app/search-results.pipe.ts");







function ResultsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/results", "region"]; };
const _c1 = function (a0) { return { q: a0 }; };
const _c2 = function (a1) { return ["/details", a1]; };
function ResultsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "More Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", result_r2.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", result_r2.name.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2.capital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2.timezones);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, (result_r2.region || "").toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", result_r2.subregion, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, result_r2.alpha3Code.toLowerCase()));
} }
let ResultsComponent = /** @class */ (() => {
    class ResultsComponent {
        constructor(activateRoute, _dataStore) {
            this.activateRoute = activateRoute;
            this._dataStore = _dataStore;
            this.searchedText = '';
            this.searchedType = '';
            this.results = [];
            this.showLoader = true;
        }
        ngOnInit() {
            this.searchedType = this.activateRoute.snapshot.params['filter'];
            // get query parameter q if changed afterwards
            this.activateRoute.params.subscribe((params) => {
                this.searchedType = params['filter'];
            });
            this.searchedText = this.activateRoute.snapshot.queryParams['q'];
            // get query parameter q if changed afterwards
            this.activateRoute.queryParams.subscribe((params) => {
                this.searchedText = params['q'];
            });
            setTimeout(() => {
                this.showLoader = false;
                this.results = this._dataStore.longDataStore;
            }, 2000);
            this._dataStore.userQuery.subscribe((userQuery) => {
                // debounce
                window.clearTimeout(this.timer);
                this.timer = window.setTimeout(() => {
                    this.searchedText = userQuery.searchedText;
                    this.searchedType = userQuery.searchedType;
                }, 1000);
            });
        }
    }
    ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"])); };
    ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsComponent, selectors: [["app-results"]], decls: 5, vars: 8, consts: [[3, "searchedText", "searchedType"], [1, "results"], ["class", "loader", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "loader"], [1, "icon-spin5"], [1, "card"], ["height", "200", 1, "flag", 3, "src", "alt"], [1, "country__name"], [1, "capital"], [1, "icon-map-marker-solid"], [1, "timezones"], [1, "icon-clock-solid"], [1, "timezone"], [1, "region"], [1, "icon-globe-solid"], [1, "container"], [1, "name", 3, "routerLink", "queryParams"], [1, "sub"], [1, "more", 3, "routerLink"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultsComponent_div_2_Template, 2, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResultsComponent_div_3_Template, 20, 15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "searchResults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchedText", ctx.searchedText)("searchedType", ctx.searchedType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 4, ctx.results, ctx.searchedText, ctx.searchedType));
        } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_search_results_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchResultsPipe"]], styles: [".results[_ngcontent-%COMP%] {\r\n  padding-top: 2%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  min-height: 100%;\r\n  background-color: #f2f2f2;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2331672f' fill-opacity='0.36' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\");\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 2%;\r\n  padding: 2%;\r\n  width: 450px;\r\n  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.18);\r\n  background: #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.country__name[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  text-transform: uppercase;\r\n  color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.flag[_ngcontent-%COMP%] {\r\n  border: 1px solid #69676733;\r\n  width: 100%;\r\n  background: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.country__name[_ngcontent-%COMP%], .capital[_ngcontent-%COMP%], .timezones[_ngcontent-%COMP%], .region[_ngcontent-%COMP%], .sub[_ngcontent-%COMP%], .more[_ngcontent-%COMP%] {\r\n  margin: 5% 0;\r\n  letter-spacing: 3px;\r\n}\r\n\r\n.timezones[_ngcontent-%COMP%], .region[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.timezone[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  letter-spacing: 3px;\r\n  word-break: break-word;\r\n  margin-left: 2%;\r\n}\r\n\r\n.region[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n  margin-left: 2%;\r\n}\r\n\r\n.region[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  outline: 0;\r\n  letter-spacing: 3px;\r\n  transition: box-shadow 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\r\n  box-shadow: inset 0 -3px 0 0 rgba(49, 103, 47, 0.6);\r\n  cursor: pointer;\r\n  padding-bottom: 1%;\r\n}\r\n\r\n.region[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 -12px 0 0 rgba(49, 103, 47, 0.5);\r\n}\r\n\r\ni[class$='solid'][_ngcontent-%COMP%]:before {\r\n  color: rgba(0, 0, 0, 0.4);\r\n  margin-right: 2%;\r\n}\r\n\r\n.more[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 6px 12px;\r\n  color: var(--base);\r\n  background: rgba(49, 103, 47, 0.2);\r\n  border-radius: 5px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  border-bottom: 2px solid rgba(49, 103, 47, 0.6);\r\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.more[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(2px);\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 10%;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  display: inline-block;\r\n  animation: rotation 2s infinite linear;\r\n}\r\n\r\n@keyframes rotation {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(359deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrT0FBa087QUFDcE87O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7O0FBQ0E7Ozs7OztFQU1FLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtFQUFrRTtFQUNsRSxtREFBbUQ7RUFDbkQsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLCtDQUErQztFQUMvQyxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMge1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnJTNFJTNDcGF0aCBmaWxsPSclMjMzMTY3MmYnIGZpbGwtb3BhY2l0eT0nMC4zNicgZD0nTTEgM2gxdjFIMVYzem0yLTJoMXYxSDNWMXonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY291bnRyeV9fbmFtZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG4uZmxhZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY5Njc2NzMzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLmNvdW50cnlfX25hbWUsXHJcbi5jYXBpdGFsLFxyXG4udGltZXpvbmVzLFxyXG4ucmVnaW9uLFxyXG4uc3ViLFxyXG4ubW9yZSB7XHJcbiAgbWFyZ2luOiA1JSAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuXHJcbi50aW1lem9uZXMsXHJcbi5yZWdpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRpbWV6b25lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuLnJlZ2lvbiAuY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLnJlZ2lvbiAubmFtZSB7XHJcbiAgb3V0bGluZTogMDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMsIDAuNjg1LCAwLjIyKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCAwIHJnYmEoNDksIDEwMywgNDcsIDAuNik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxufVxyXG5cclxuLnJlZ2lvbiAubmFtZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMTJweCAwIDAgcmdiYSg0OSwgMTAzLCA0NywgMC41KTtcclxufVxyXG5cclxuaVtjbGFzcyQ9J3NvbGlkJ106YmVmb3JlIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5tb3JlIHtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBjb2xvcjogdmFyKC0tYmFzZSk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0OSwgMTAzLCA0NywgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNDksIDEwMywgNDcsIDAuNik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5tb3JlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5sb2FkZXIgaSB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
    return ResultsComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-results',
                templateUrl: './results.component.html',
                styleUrls: ['./results.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search-results.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/search-results.pipe.ts ***!
  \****************************************/
/*! exports provided: SearchResultsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsPipe", function() { return SearchResultsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchResultsPipe = /** @class */ (() => {
    class SearchResultsPipe {
        transform(value, searchedText, searchedType) {
            if (!searchedText) {
                return null;
            }
            if (searchedType !== 'name' &&
                searchedType !== 'region' &&
                searchedType !== 'language' &&
                searchedType !== 'currency') {
                return null;
            }
            if (searchedType === 'currency') {
                return value.filter(v => v.currencies.some(c => (c.code || '').match(new RegExp(searchedText, 'gi')) ||
                    (c.name || '').match(new RegExp(searchedText, 'gi'))));
            }
            if (searchedType === 'language') {
                return value.filter(v => v.languages.some(c => (c.iso639_2 || '').match(new RegExp(searchedText, 'gi')) ||
                    (c.name || '').match(new RegExp(searchedText, 'gi'))));
            }
            return value.filter(v => v[searchedType].match(new RegExp(searchedText, 'gi')));
        }
    }
    SearchResultsPipe.ɵfac = function SearchResultsPipe_Factory(t) { return new (t || SearchResultsPipe)(); };
    SearchResultsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchResults", type: SearchResultsPipe, pure: true });
    return SearchResultsPipe;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchResults'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-storage.service */ "./src/app/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autofocus.directive */ "./src/app/autofocus.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_results_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-results.pipe */ "./src/app/search-results.pipe.ts");








const _c0 = function (a1) { return ["/details", a1]; };
function SearchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, result_r2.alpha3Code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", result_r2.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", result_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2.name);
} }
const _c1 = function () { return ["/results", "name"]; };
const _c2 = function (a0) { return { q: a0 }; };
let SearchComponent = /** @class */ (() => {
    class SearchComponent {
        constructor(_dataStore, router) {
            this._dataStore = _dataStore;
            this.router = router;
            this.closedClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.results = [];
        }
        ngOnInit() {
            this.results = this._dataStore.shortDataStore;
        }
        closeSearch() {
            this.closedClicked.emit(false);
        }
        onSubmit() {
            this.router.navigate(['/results', 'name'], {
                queryParams: { q: this.searchedText }
            });
        }
    }
    SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { closedClicked: "closedClicked" }, decls: 12, vars: 15, consts: [[1, "close"], [3, "click"], [1, "icon-cancel"], [3, "ngSubmit"], ["f", "ngForm"], ["type", "text", "name", "search", "placeholder", "Type-in a Country", "autofocus", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "routerLink", "queryParams"], [1, "icon-right"], [1, "search__results"], ["class", "result", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "result", 3, "routerLink"], [3, "src", "alt"], [1, "name"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_a_click_1_listener() { return ctx.closeSearch(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchedText = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_div_9_Template, 4, 6, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "searchResults");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchedText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx.searchedText));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 8, ctx.results, ctx.searchedText, "name"), 0, 10));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_4__["AutofocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _search_results_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchResultsPipe"]], styles: [".close[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: right;\r\n  right: 1%;\r\n  top: 2%;\r\n}\r\n.close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  transition: all 300ms;\r\n}\r\n.close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n  margin: 20% 0 0 0;\r\n  text-align: center;\r\n}\r\n[name='search'][_ngcontent-%COMP%] {\r\n  padding-bottom: 1%;\r\n  background: transparent;\r\n  border: 0;\r\n  outline: 0;\r\n  border-bottom: 2px solid #fff;\r\n  width: 80%;\r\n}\r\n[type='submit'][_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  transform: translateX(-100%);\r\n}\r\n[name='search'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  letter-spacing: 5px;\r\n  text-transform: capitalize;\r\n}\r\n[_ngcontent-%COMP%]::placeholder {\r\n  color: var(--base);\r\n}\r\n.search__results[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 80%;\r\n  margin: 2% auto;\r\n  flex-wrap: wrap;\r\n}\r\n.result[_ngcontent-%COMP%] {\r\n  margin: 1%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  padding: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: all 300ms;\r\n}\r\n.result[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-4px);\r\n}\r\n.result[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 2rem;\r\n  height: 1rem;\r\n  margin-right: 7px;\r\n}\r\n.name[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 0.9rem;\r\n  color: #fff;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  [name='search'][_ngcontent-%COMP%] {\r\n    width: 60%;\r\n  }\r\n  [name='search'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  [name='search'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 1.7rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  form[_ngcontent-%COMP%] {\r\n    margin: 15% 0 0 0;\r\n  }\r\n\r\n  [name='search'][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  [name='search'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUEsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTs7SUFFRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUVBLDJDQUEyQztBQUMzQztFQUNFOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2Uge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcmlnaHQ6IDElO1xyXG4gIHRvcDogMiU7XHJcbn1cclxuLmNsb3NlIGkge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcbi5jbG9zZSBpOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5mb3JtIHtcclxuICBtYXJnaW46IDIwJSAwIDAgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbltuYW1lPSdzZWFyY2gnXSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuW3R5cGU9J3N1Ym1pdCddIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5bbmFtZT0nc2VhcmNoJ10sXHJcblt0eXBlPSdzdWJtaXQnXSBpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tYmFzZSk7XHJcbn1cclxuXHJcbi5zZWFyY2hfX3Jlc3VsdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgbWFyZ2luOiAxJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG4ucmVzdWx0OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbn1cclxuXHJcbi5yZXN1bHQgaW1nIHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgW25hbWU9J3NlYXJjaCddIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIFtuYW1lPSdzZWFyY2gnXSxcclxuICBbdHlwZT0nc3VibWl0J10gaSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIFtuYW1lPSdzZWFyY2gnXSxcclxuICBbdHlwZT0nc3VibWl0J10gaSB7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIGZvcm0ge1xyXG4gICAgbWFyZ2luOiAxNSUgMCAwIDA7XHJcbiAgfVxyXG5cclxuICBbbmFtZT0nc2VhcmNoJ10ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgW25hbWU9J3NlYXJjaCddLFxyXG4gIFt0eXBlPSdzdWJtaXQnXSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
    return SearchComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return [{ type: _data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { closedClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/search-countries/search-countries/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map