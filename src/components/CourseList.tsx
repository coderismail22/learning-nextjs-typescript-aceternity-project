"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import coursedata from "@/data/web_dev_courses.json";
import { div } from "three/examples/jsm/nodes/Nodes.js";

interface Course {
  course_id: number;
  course_title: string;
  provider: string;
  instructor: string;
  duration: string;
  price: string;
  description: string;
  rating: number;
  isTrending: boolean;
}

export function CourseList() {
  const courses = coursedata.filter(
    (singleCourse: Course) => singleCourse.isTrending === true
  );

  return (
 <div>
          <h1 className="mb-10 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Courses
        </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
      {courses.map((course) => (
        <div className="w-full ">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <h1 className="text-lg font-bold text-gray-500">
              {course.course_title}
            </h1>
            <p className="my-2 font-semibold">{course.description}</p>
            <h1><span className="text-violet-500 font-bold">Instructor: </span>{course.instructor}</h1>
            <h1>
              <span className="text-violet-500 font-bold">Platform: </span>
              {course.provider}
            </h1>
            <h1>
              <span className="text-violet-500 font-bold">Duration: </span>{" "}
              {course.duration}
            </h1>
            <h1>
              <span className="text-violet-500 font-bold">Price: </span>
              {course.price}
            </h1>
            <h1>
              <span className="text-violet-500 font-bold">Rating: </span>
              {course.rating}
            </h1>
          </BackgroundGradient>
        </div>
      ))}
    </div>
 </div>
  );
}
