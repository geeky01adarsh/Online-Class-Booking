const classes = [
  {
    id: 1,
    location: "New York",
    dates: [
      {
        date: "2023-04-01",
        timeslots: [
          {
            id: 1,
            name: "Maths",
            time: "10:00 AM",
            available: "Yes",
          },
          {
            id: 2,
            name: "Chemistry",
            time: "11:00 AM",
            available: "Yes",
          },
          {
            id: 3,
            name: "Physics",
            time: "12:00 PM",
            available: "Yes",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    location: "Los Angeles",
    dates: [
      {
        date: "2023-04-02",
        timeslots: [
          {
            id: 4,
            name: "Maths",
            time: "1:00 PM",
            available: "Yes",
          },
          {
            id: 5,
            name: "Physics",
            time: "2:00 PM",
            available: "Yes",
          },
          {
            id: 6,
            name: "Bio",
            time: "3:00 PM",
            available: "Yes",
          },
        ],
      },
      {
        date: "2023-04-03",
        timeslots: [
          {
            id: 7,
            name: "Web Development",
            time: "4:00 PM",
            available: "Yes",
          },
          {
            id: 8,
            name: "DSA",
            time: "5:00 PM",
            available: "Yes",
          },
          {
            id: 9,
            name: "Database",
            time: "6:00 PM",
            available: "Yes",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    location: "Chicago",
    dates: [
      {
        date: "2023-04-03",
        timeslots: [
          {
            id: 7,
            name: "Web Development",
            time: "4:00 PM",
            available: "Yes",
          },
          {
            id: 8,
            name: "DSA",
            time: "5:00 PM",
            available: "Yes",
          },
          {
            id: 9,
            name: "Database",
            time: "6:00 PM",
            available: "Yes",
          },
        ],
      },
    ],
  },
];

const locationSelect = document.getElementById("location");
const dateSelect = document.getElementById("date");
const timeslotsList = document.getElementById("timeslots");
const classList = document.getElementById("classTable");

// populate location dropdown
const locations = Array.from(new Set(classes.map((cls) => cls.location)));
locations.forEach((loc) => {
  const option = document.createElement("option");
  option.value = loc;
  option.textContent = loc;
  locationSelect.appendChild(option);
});

let dateArray;
const showDates = () => {
  while (date.options.length > 1) {
    date.options.remove(1);
  }

  classes.map((cls) => {
    if (locationSelect.value == cls.location) dateArray = cls.dates;
  });

  dateArray.forEach((loc) => {
    const option = document.createElement("option");
    option.value = loc.date;
    option.textContent = loc.date;
    date.appendChild(option);
  });
};

// fill the table first
const fillTable = (classesList) => {
  const location = locationSelect.value;
  classesList.forEach((eachClass) => {
    const row = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = eachClass.id;
    row.appendChild(id);
    const name = document.createElement("td");
    name.textContent = eachClass.name;
    row.appendChild(name);
    const time = document.createElement("td");
    time.textContent = eachClass.time;
    row.appendChild(time);
    const available = document.createElement("td");
      available.textContent = eachClass.available;
      row.appendChild(available);
      const BookClass = document.createElement("td");
      const book = document.createElement("Button");
      book.textContent = "Book Now";
      book.addEventListener('click', function () {
        alert(`You have booked ${eachClass.name} class of class id ${eachClass.id} at timeslot ${eachClass.time} at ${location}`);  
      })
      row.append(book)
      classList.querySelector("tbody").appendChild(row);
    
  });
};

// remove the extra items
const removeFromTable = () => {
  while (classList.rows.length > 1) classList.deleteRow(1);
};

// search classes function
let classesList;
function searchClasses() {
    // classList.style.visiblity = "visible";

  const selectedDate = date.value;
  removeFromTable();
  if (!dateArray) alert(`Please select a proper date and time.`);
  dateArray.map((dates) => {
    if (dates.date === selectedDate) classesList = dates.timeslots;
  });

  fillTable(classesList);
}

// book class function
function bookClass(classId, timeslotId) {
  alert(`You have booked class ${classId} at timeslot ${timeslotId}.`);
}
