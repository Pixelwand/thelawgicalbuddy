import React from 'react'

export const Main = () => {
  return (
    <>
      <div>
        <div>India's best tech learning company</div>
        <div>Learn industry relevant skills with top veterans</div>
        <div>
          <h2>Book a live class, for Free!</h2>
          <form>
            <div>Your topic of interest</div>
            <label>
              Program 1
              <input type={"radio"} name="program" />
            </label>
            <label>
              Program 2
              <input type={"radio"} name="program" />
            </label>
            <label>
              <input type={"text"} placeholder="Full Name" />
            </label>
            <label>
              <input type={"email"} placeholder="Email" />
            </label>
            <label>
              <input type={"number"} placeholder="Phone No." />
            </label>
            <div>Limited seats left</div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
