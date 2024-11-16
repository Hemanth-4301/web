import React from "react";
import "../styles/Aboutus.css";

function Events() {
  function displayEvents() {
    // Show loader
    const loader = document.createElement("div");
    loader.className = "spinner-border text-success";
    loader.setAttribute("role", "status");
    loader.innerHTML = '<span className="visually-hidden"></span>';

    const loaderContainer = document.querySelector("#event-container");
    loaderContainer.innerHTML = ""; // Clear previous content
    loaderContainer.appendChild(loader);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      const events = [
        { date: 8, month: 1, name: "Harshitha Shankar's Birthday" },
        { date: 11, month: 1, name: "Jahnavi's Birthday" },
        { date: 25, month: 1, name: "Manoj ML's Birthday" },
        { date: 4, month: 2, name: "Ayush's Birthday" },
        { date: 8, month: 2, name: "Mohith's Birthday" },
        { date: 9, month: 2, name: "Krishna's Birthday" },
        { date: 28, month: 2, name: "Kishan Jaiswal's Birthday" },
        { date: 28, month: 2, name: "Mayuri Patil's Birthday" },
        { date: 3, month: 3, name: "Keerthan Mada's Birthday" },
        { date: 7, month: 3, name: "Nidhi Patil's Birthday" },
        { date: 17, month: 3, name: "Ilaa Ram's Birthday" },
        { date: 3, month: 3, name: "Akash's Birthday" },
        { date: 20, month: 3, name: "Impana's Birthday" },
        { date: 26, month: 3, name: "Hina Shakya's Birthday" },
        { date: 30, month: 3, name: "Kishan Kumar's Birthday" },
        { date: 30, month: 3, name: "Hithesh ST's Birthday" },
        { date: 3, month: 4, name: "Madhusudan's Birthday" },
        { date: 5, month: 4, name: "Arman's Birthday" },
        { date: 24, month: 4, name: "Keerthana SR's Birthday" },
        { date: 19, month: 5, name: "Mallakanna Suresh's Birthday" },
        { date: 21, month: 5, name: "Kanthashree's Birthday" },
        { date: 22, month: 5, name: "Kishna Bansal's Birthday" },
        { date: 23, month: 5, name: "Harshith's Birthday" },
        { date: 24, month: 5, name: "Kiran's Birthday" },
        { date: 27, month: 5, name: "Mohan's Birthday" },
        { date: 4, month: 6, name: "Kaushal's Birthday" },
        { date: 4, month: 6, name: "Harshitha M's Birthday" },
        { date: 5, month: 6, name: "Nidhi Bhat's Birthday" },
        { date: 5, month: 6, name: "Hanumantha Naik's Birthday" },
        { date: 6, month: 6, name: "Jathin's Birthday" },
        { date: 13, month: 6, name: "Aprameya's Birthday" },
        { date: 19, month: 6, name: "Komal's Birthday" },
        { date: 20, month: 6, name: "Hemang's Birthday" },
        { date: 22, month: 6, name: "Hema CY's Birthday" },
        { date: 26, month: 6, name: "Rayyan's Birthday" },
        { date: 2, month: 7, name: "Mahima's Birthday" },
        { date: 2, month: 7, name: "Druva's Birthday" },
        { date: 15, month: 7, name: "Keerthana SM's Birthday" },
        { date: 16, month: 7, name: "Karthikeya's Birthday" },
        { date: 18, month: 7, name: "Himavanth's Birthday" },
        { date: 20, month: 7, name: "Mitha's Birthday" },
        { date: 26, month: 7, name: "Himanshu's Birthday" },
        { date: 26, month: 7, name: "Shreya's Birthday" },
        { date: 5, month: 8, name: "Hemanth's Birthday" },
        { date: 9, month: 8, name: "Ekanth's Birthday" },
        { date: 10, month: 8, name: "Jeevitha's Birthday" },
        { date: 2, month: 9, name: "Manisha's Birthday" },
        { date: 4, month: 9, name: "Govardhan's Birthday" },
        { date: 4, month: 9, name: "Gautham's Birthday" },
        { date: 15, month: 9, name: "Lenora's Birthday" },
        { date: 17, month: 9, name: "Ganesha's Birthday" },
        { date: 1, month: 10, name: "Lalith's Birthday" },
        { date: 2, month: 10, name: "Gaurav's Birthday" },
        { date: 3, month: 10, name: "Abhishek's Birthday" },
        { date: 3, month: 10, name: "Mihika's Birthday" },
        { date: 6, month: 10, name: "Harsha TD's Birthday" },
        { date: 7, month: 10, name: "Harshith's Birthday" },
        { date: 7, month: 10, name: "Hithesh Patel's Birthday" },
        { date: 4, month: 11, name: "Hruthik's Birthday" },
        { date: 15, month: 11, name: "Lakshay Gupta's Birthday" },
        { date: 13, month: 11, name: "Krishna Patil's Birthday" },
        { date: 15, month: 11, name: "Harshith SK's Birthday" },
        { date: 17, month: 11, name: "Harsh Singh's Birthday" },
        { date: 28, month: 11, name: "Kush Taunk's Birthday" },
        { date: 29, month: 11, name: "Kushal Patil's Birthday" },
        { date: 30, month: 11, name: "Abhinav's Birthday" },
        { date: 2, month: 12, name: "Pallavi Bai's Birthday" },
        { date: 4, month: 12, name: "Manoj JS's Birthday" },
        { date: 4, month: 12, name: "Chitrashree's Birthday" },
        { date: 15, month: 12, name: "Madan's Birthday" },
        { date: 17, month: 12, name: "Manishankar's Birthday" },
      ];

      const month = document.querySelector("#month").value;
      const eventContainer = document.getElementById("event-container");
      eventContainer.innerHTML = ""; // Clear previous events

      const table = document.createElement("table");
      table.className =
        "table table-striped border border-dark table-bordered ";

      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      const dateHeader = document.createElement("th");
      dateHeader.innerText = "Date";
      const nameHeader = document.createElement("th");
      nameHeader.innerText = "Event Name";
      headerRow.appendChild(dateHeader);
      headerRow.appendChild(nameHeader);
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");

      let eventsFound = false;
      events.forEach((event) => {
        if (month == event.month) {
          const row = document.createElement("tr");
          const dateCell = document.createElement("td");
          dateCell.innerText = event.date;
          const nameCell = document.createElement("td");
          nameCell.innerText = event.name;
          row.appendChild(dateCell);
          row.appendChild(nameCell);
          tbody.appendChild(row);
          eventsFound = true;
        }
      });

      if (!eventsFound) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 2;
        cell.innerText = "No events found";
        row.appendChild(cell);
        tbody.appendChild(row);
      }

      table.appendChild(tbody);
      eventContainer.appendChild(table);
    }, 500); // 2000 milliseconds = 2 seconds
  }

  return (
    <>
      {/* event Manager  */}
      <section
        id="events"
        style={{ background: "black" }}
        className="px-3 pb-5 py-md-5"
      >
        <div
          className="container  text-center shadow-lg py-4  pt-5 scroll-anime"
          style={{
            background: "black",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{
              color: "white",
              letterSpacing: "1px",
              fontFamily: "monospace",
            }}
          >
            Event Manager
          </h1>
          <form id="month-form" className="my-5">
            <div className="form-group d-flex justify-content-center align-items-center ">
              <label
                for="month"
                className="text-white me-2 "
                style={{ fontFamily: "arial" }}
              >
                Select a Month:
              </label>
              <select
                className="form-control d-inline-block w-auto me-2"
                style={{
                  height: "40px",
                  fontFamily: "arial",
                }}
                name="month"
                id="month"
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <button
                type="button"
                className="btn download-btn placeholder-wave"
                onClick={displayEvents}
              >
                Submit
              </button>
            </div>
          </form>

          <div id="event-container"></div>
        </div>
      </section>
    </>
  );
}

export default Events;
