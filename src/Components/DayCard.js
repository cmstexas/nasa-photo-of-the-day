import React from "react";

export default function DayCard({ imageUrl }) {
  return (
    <div className="day-card">
      <img src= {imageUrl} alt="nasa pic" style={{ maxWidth: "550px" }} />
    </div>
  );
}

