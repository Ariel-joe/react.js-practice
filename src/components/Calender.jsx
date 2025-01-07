import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function CalenderComponent() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center border border-r-2">
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}

