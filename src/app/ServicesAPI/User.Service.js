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
var User_1 = require("./User");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.usersUrl = 'http://cyclockapi.mbde3on.com/api/User/'; //'api/groups';  // URL to web api
        this.usersUrlAdd = this.usersUrl + 'AddUser';
        this.usersUrlEdit = this.usersUrl + 'EditUser';
        this.usersUrlDelete = this.usersUrl + 'DeleteUser';
    }
    UserService.prototype.AddUser = function (user) {
        var _this = this;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post(this.usersUrlAdd, JSON.stringify({ UserName: user.UserName, GroupID: user.GroupID,
            LoginName: user.LoginName, Password: user.Password, UserColor: user.UserColor,
            UserLogo: user.UserLogo, HourRate: user.HourRate,
            IsAdmin: user.IsAdmin, IsDeleted: user.IsDeleted }), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.postResponse = res; console.log(res); });
    };
    UserService.prototype.EditGroup = function (user) {
        var _this = this;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        var url = "" + this.usersUrlEdit;
        return this._http
            .put(url, JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.postResponse = res; console.log(res); });
    };
    UserService.prototype.DeleteUser = function (id) {
        var headers = new http_2.Headers();
        this._http.delete(this.usersUrlDelete + '/?id=' + id, new http_2.RequestOptions({
            headers: headers,
            body: User_1.User
        }))
            .subscribe(function (ok) { console.log(ok); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=User.service.js.map