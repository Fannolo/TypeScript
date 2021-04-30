//generic utility types
//can give you extra type safety or extra flexibility type
interface CourseGoal {
  title?: string;
  description?: string;
  completetUntil?: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //we are taking advantage the partial keyword which means
  //that we can initialize the property at the beginning whatever
  //we want and eventually that will be an object of type CourseGoal
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completetUntil = date;
  //returning as a Type
  return courseGoal as CourseGoal;
}

const james: ReadonlyArray<string> = ["max", "mary"];

// james.push("max"); //can't do this it's readonly
// james.pop(); //can't do this it's readonly