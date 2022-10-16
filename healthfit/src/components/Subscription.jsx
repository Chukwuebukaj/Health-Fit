import React from "react";

export default function Subscription(props) {
  return (
    <div className="subscription-page">
      <form className="subscription-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="e-mail">Email:</label>
          <input type="text" />
        </div>
        <div>
          <label>Send me an update:</label>
          <select>
            <option value="" disabled>
              Choose an option
            </option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Bi-weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        <div>
          <button type="submit" id="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
