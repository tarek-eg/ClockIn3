"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var groups = [
            { GroupID: 1, GroupName: 'Cyclers' },
            { GroupID: 2, GroupName: 'UFO' },
            { GroupID: 3, GroupName: 'Pioneers' }
        ];
        var users = [
            { UserID: 1, UserName: 'Amany' },
            { UserID: 2, UserName: 'Slouma' },
            { UserID: 3, UserName: 'Khaled' }
        ];
        var Shifts = [
            { UserID: 1, ShiftID: '1' },
        ];
        return { groups: groups, users: users, Shifts: Shifts };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map