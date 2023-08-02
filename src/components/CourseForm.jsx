import React, { useState } from 'react';
import useCourseStore from '../app/courseStore';

const CourseForm = () => {
    const courses = useCourseStore((state) => state.courses)
    const addCourse = useCourseStore((state) => state.addCourse);
    const [courseTitle, setCourseTitle] = useState('')


    const handleFormSubmit = () => {
        if(courseTitle) {
            addCourse({
                id: courses.length + 1,
                title: courseTitle,
                completed:false
            });
            setCourseTitle('');
        }
    }


  return (
    <div className="form-container">
        <input value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} type="text" className="form-input" />
        <button onClick={() => handleFormSubmit()} className="form-submit-btn">Add Course</button>
    </div>
  )
}

export default CourseForm