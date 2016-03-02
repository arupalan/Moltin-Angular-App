System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this.publicId = 'yxUnERm1C9z3h4eerRvGNwtdRC2cYcPMkW46fzwZ';
                    this.moltin = new Moltin({ publicId: this.publicId });
                    this.moltin.Authenticate();
                }
                DataService.prototype.getAllProducts = function () {
                    return this.moltin.Product.List();
                };
                DataService.prototype.getAllCategories = function () {
                    //var promise = new Promise(resolve => {
                    //    this.moltin.Category.List(null, function (res) {
                    //        resolve(res);
                    //    })
                    //});
                    var _this = this;
                    return Rx_1.Observable.create(function (observer) {
                        _this.moltin.Category.List(null, function (res) {
                            observer.next(res);
                        });
                    });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map