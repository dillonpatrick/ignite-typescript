"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCoursesServices = /** @class */ (function () {
    function CreateCoursesServices() {
    }
    CreateCoursesServices.prototype.execute = function (_a) {
        var name = _a.name, duration = _a.duration, educator = _a.educator;
        console.log(duration, name, educator);
    };
    return CreateCoursesServices;
}());
exports.default = new CreateCoursesServices();
