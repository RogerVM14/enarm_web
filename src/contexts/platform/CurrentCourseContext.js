import React, { useState, createContext, useEffect } from 'react';

export const CurrentCourseContext = createContext(null);

const CurrentCourseProvider = (props) => {

  const [currentCourse, setCurrentCourse] = useState({
    route: "",
    plan_month: "",
    course: ""
  });

  const handleCourse = (data) => {
    setCurrentCourse((object_data) => {
      return {
        ...object_data, course: (() => {
          return data.course.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        })()
      }
    });
  }

  const handleRoutePlan = (data) => {
    setCurrentCourse((object_data) => {
      return {
        ...object_data, route: data.route, plan_month: (() => {
          return data.plan_month.replace(" ", "_").toLowerCase();
        })()
      }
    });
  }

  useEffect(() => {
    console.log(currentCourse);
  }, [currentCourse]);

  return (
    <CurrentCourseContext.Provider value={{ currentCourse, handleRoutePlan, handleCourse }}>
      {props.children}
    </CurrentCourseContext.Provider>
  )
}

export default CurrentCourseProvider;