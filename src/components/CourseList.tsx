"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import coursedata from "@/data/web_dev_courses.json";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
      {/* <div className="w-80 max-h-28">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
      </div> */}
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
  );
}
