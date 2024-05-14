

 import { getCoursesRoute } from './getCourses';
 import { getCourseRoute } from './getCourseRoute';
 import { postCourseRoute } from './postCourseRoute';
 import { deleteCourseRoute } from './deleteCourseRoute';
 import { putCourseRoute } from './putCourseRoute';
import { testRoute } from './testRoute';


export const routes = [
    testRoute,


     getCoursesRoute,
     getCourseRoute,
     postCourseRoute,
     deleteCourseRoute,
     putCourseRoute
];
