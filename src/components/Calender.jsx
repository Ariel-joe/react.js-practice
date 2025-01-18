import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function CalenderComponent() {
  const [date, setDate] = useState(null);

  return (
    <div className="card flex justify-content-center px-4 py-2">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        view="month"
        className="border border-red-500"
      />
    </div>
  );
}
