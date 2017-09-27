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
var Group_1 = require("./Group");
var GroupService = (function () {
    function GroupService(_http) {
        this._http = _http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.groupsUrl = 'http://cyclockapi.mbde3on.com/api/group/';
        this.groupsUrlAdd = this.groupsUrl + 'AddGroup';
        this.groupsUrlEdit = this.groupsUrl + 'EditGroup';
        this.groupsUrlDelete = this.groupsUrl + 'Delete';
    }
    GroupService.prototype.AddGroup = function (group) {
        var _this = this;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post(this.groupsUrlAdd, JSON.stringify({ GroupName: group.GroupName }), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.postResponse = res; console.log(res); });
    };
    GroupService.prototype.DeleteGroup = function (id) {
        var headers = new http_2.Headers();
        this._http.delete(this.groupsUrlDelete + '/?id=' + id, new http_2.RequestOptions({
            headers: headers,
            body: Group_1.Group
        }))
            .subscribe(function (ok) { console.log(ok); });
    };
    GroupService.prototype.EditGroup = function (hero) {
        var _this = this;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        // let url = `${this.groupsUrlEdit}/${hero.GroupID}`;
        var url = "" + this.groupsUrlEdit;
        return this._http
            .put(url, JSON.stringify(hero), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.postResponse = res; console.log(res); });
    };
    return GroupService;
}());
GroupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=Group.service.js.map