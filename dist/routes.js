"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
var CreateCoursesServices_1 = __importDefault(require("./CreateCoursesServices"));
function CreateCourse(request, response) {
    CreateCoursesServices_1.default.execute({
        name: "React",
        educator: "Dillon",
        duration: 10,
    });
    return response.send();
}
exports.CreateCourse = CreateCourse;
