"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
var ShiftService = (function () {
    function ShiftService(_http) {
        this._http = _http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.ShiftsUrl = 'api/Shifts'; // URL to web api
        //this.baseUrl ="http://cyclock.mbde3on.com/";
        //this.baseUrl ="http://localhost:44089/api/Shift/";
    }
    /********* From Hero Editor **************/
    ShiftService.prototype.getAllShifts = function () {
        return this._http.get(this.ShiftsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ShiftService.prototype.update = function (hero) {
        var url = this.ShiftsUrl + "/" + hero.ShiftID;
        return this._http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    ShiftService.prototype.delete = function (id) {
        var url = this.ShiftsUrl + "/" + id;
        return this._http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ShiftService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*************************/
    ShiftService.prototype.getShiftsWithPromise = function () {
        return this._http.get(this.ShiftsUrl).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    ShiftService.prototype.addShiftWithPromise = function (book) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this.ShiftsUrl, book, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    ShiftService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ShiftService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return ShiftService;
}());
ShiftService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShiftService);
exports.ShiftService = ShiftService;
//# sourceMappingURL=Shift.Service.js.map