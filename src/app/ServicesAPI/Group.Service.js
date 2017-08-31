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
var GroupService = (function () {
    function GroupService(_http) {
        this._http = _http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.groupsUrl = 'api/groups'; // URL to web api
        //this.baseUrl ="http://cyclock.mbde3on.com/";
        //this.baseUrl ="http://localhost:44089/api/group/";
    }
    /********* From Hero Editor **************/
    GroupService.prototype.getAllGroups = function () {
        return this._http.get(this.groupsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GroupService.prototype.update = function (hero) {
        var url = this.groupsUrl + "/" + hero.GroupID;
        return this._http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    GroupService.prototype.delete = function (id) {
        var url = this.groupsUrl + "/" + id;
        return this._http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    GroupService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /*************************/
    GroupService.prototype.getGroupsWithPromise = function () {
        return this._http.get(this.groupsUrl).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    GroupService.prototype.addGroupWithPromise = function (book) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this.groupsUrl, book, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    GroupService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    GroupService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return GroupService;
}());
GroupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=Group.Service.js.map