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
var Shift_1 = require("./Shift");
var ShiftService = (function () {
    function ShiftService(_http) {
        this._http = _http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.ShiftsUrl = 'http://cyclockapi.mbde3on.com/api/Shift/'; //'api/groups';  // URL to web api
        this.ShiftsUrlAdd = this.ShiftsUrl + 'AddShift';
        this.ShiftsUrlEdit = this.ShiftsUrl + 'EditShift';
        this.ShiftsUrlDelete = this.ShiftsUrl + 'DeleteShift';
    }
    ShiftService.prototype.AddShift = function (shift) {
        var _this = this;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post(this.ShiftsUrlAdd, JSON.stringify({ EndTime: shift.EndTime, IsDeleted: shift.IsDeleted,
            ShiftDate: shift.ShiftDate, ShiftPeriodMin: shift.ShiftPeriodMin,
            StartTime: shift.StartTime, UserID: shift.UserID }), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.postResponse = res; console.log(res); });
    };
    ShiftService.prototype.EditGroup = function (shift) {
        var _this = this;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        var url = "" + this.ShiftsUrlEdit;
        return this._http
            .put(url, JSON.stringify(shift), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.postResponse = res; console.log(res); });
    };
    ShiftService.prototype.DeleteShift = function (id) {
        var headers = new http_2.Headers();
        this._http.delete(this.ShiftsUrlDelete + '/?id=' + id, new http_2.RequestOptions({
            headers: headers,
            body: Shift_1.Shift
        }))
            .subscribe(function (ok) { console.log(ok); });
    };
    return ShiftService;
}());
ShiftService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShiftService);
exports.ShiftService = ShiftService;
//# sourceMappingURL=Shift.Service.js.map