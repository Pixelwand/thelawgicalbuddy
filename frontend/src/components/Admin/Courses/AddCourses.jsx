import React, { useState } from 'react';

export const AddCourses = () => {
    const [value, setValue] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = () => {
        setValue(value)
    }
    
  return (
    <>
      <div>
        <form onSubmit={handleSubmit()}>
          <label>
            <input type="text" placeholder="Title of Course" onChange={handleChange} />
          </label>
          <label>
            <input type="text" placeholder="Details of Course" onChange={handleChange}/>
          </label>
          <label>
            <input type='video' placeholder="Upload Video" onChange={handleChange}/>
          </label>
          <label>
            <input type="Number" placeholder="Cost of Course" onChange={handleChange}/>
          </label>
          <label>
            <input type="text" placeholder="Name of the Instructor" onChange={handleChange}/>
          </label>
          <label>
            <input type="text" placeholder="Qualifications of the Instructor" onChange={handleChange}/>
          </label>
          <label>
            <input type="text" placeholder="Experience of the Instructor" onChange={handleChange}/>
          </label>
          <label>Is it Free?</label>
          <label>
            Yes
            <input type="radio" value={true} name="isFree" onChange={handleChange}/>
          </label>
          <label>
            No
                      <input type="radio" value={false} name="isFree" onChange={handleChange} />
          </label>
        </form>
      </div>
    </>
  );
}
