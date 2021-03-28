import { Request, Response } from "express";
import CreateCoursesServices from "./CreateCoursesServices";

export function CreateCourse(request: Request, response: Response) {
  CreateCoursesServices.execute({
    name: "React",
    educator: "Dillon",
    duration: 10,
  });

  return response.send();
}
