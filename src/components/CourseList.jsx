import React from 'react'
import useCourseStore from '../app/courseStore'

const CourseList = () => {
  const {courses, removeCourse, toggleCourseState} = useCourseStore((state) => state);
  return (
    <>
        <ul>
            {courses.map((course,index) => (
                <li key={index} className='course-item' style={{backgroundColor: course.completed ? '#b1f59d' : 'white' }}>
                    <span className="course-item-col-1">
                        <input type="checkbox" checked={course.completed} onChange={() => toggleCourseState(course.id)}/>
                    </span>
                    <span style={{color:'black'}}>{course?.title}</span>
                    <button className='delete-btn' onClick={(e) => removeCourse(course.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default CourseList