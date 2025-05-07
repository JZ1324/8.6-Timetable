// Full timetable functionality
const scheduleData1 = [
  {
    week: 'Week A',
    day: 1,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Assembly/Tute', location: '8.6/Cafe' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Languages', location: 'your own classroom' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'English', location: 'L06' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Art', location: 'F05'},
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Sports (REMEMBER SPORTS BAG)', location: 'Sport Complex' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Maths', location: 'M05' }
    ]
  },
  {
    week: 'Week A',
    day: 2,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Maths', location: 'M05' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Science', location: 'S04' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Humanities', location: 'L06' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Languages', location: 'your own classroom' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: '7/8 Sport (REMEMBER SPORTS BAG) ', location: 'Your own Location' }
    ]
  },
  {
    week: 'Week A',
    day: 3,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Food studies 🍱', location: 'K01' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Maths', location: 'M06' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'English', location: 'L06' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Science', location: 'S06' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Health', location: 'L06' }
    ]
  },
  {
    week: 'Week A',
    day: 4,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Art', location: 'F05' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Science', location: 'S02' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Humanities', location: 'L06' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'English', location: 'L06' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Food studies 🍱 ', location: 'K01' }
    ]
  },
  {
    week: 'Week A',
    day: 5,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Sport (REMEMBER SPORTS BAG)', location: 'Sport Complex' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Drama', location: 'D02' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Humanities', location: '7.4'},
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'English', location: 'L06' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Music', location: 'P02' }
    ]
  },
  {
    week: 'Week B',
    day: 1,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute/Assembly', location: '8.6/Cafe' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Language', location: 'Your own location' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Sports (REMEMBER SPORTS BAG)', location: 'Sport Complex' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'English', location: '7.8 classroom' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Humanities', location: 'L06' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Maths', location: 'L06' }
    ]
  },
  {
    week: 'Week B',
    day: 2,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Language', location: 'Your own location' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Maths', location: 'L06' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Science', location: 'S06' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Food studies 🍱', location: 'K01' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Sports (REMEMBER SPORTS BAG)', location: 'Your own location' }
    ]
  },
  {
    week: 'Week B',
    day: 3,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Art', location: 'FO5' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Language', location: 'Your own location' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Plus+', location: 'L06' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Maths', location: 'M06' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Science', location: 'S03' }
    ]
  },
  {
    week: 'Week B',
    day: 4,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Humanaties', location: 'L06' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'English', location: 'L06' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Drama', location: 'D02' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Science', location: 'S02' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'Food studies 🍱', location: 'K01' }
    ]
  },
  {
    week: 'Week B',
    day: 5,
    schedule: [
      { period: 'Period 0', time: '8:35am–8:45am', subject: 'Tute', location: '8.6' },
      { period: 'Period 1', time: '8:50am–9:50am', subject: 'Health', location: 'L09' },
      { period: 'Period 2', time: '9:55am–10:55am', subject: 'Art', location: 'F05' },
      { period: 'Period 3', time: '11:25am–12:25pm', subject: 'Humanities', location: 'L06' },
      { period: 'Period 4', time: '12:30pm–1:30pm', subject: 'Music', location: 'P02' },
      { period: 'Period 5', time: '2:25pm–3:25pm', subject: 'English', location: 'Library' }
    ]
  }
];

let timetableVisible = false;

// Toggle full timetable display
function toggleTimetable() {
  const button = document.getElementById("toggleButton");
  const timetableContainer = document.getElementById("timetableContainer1");

  if (timetableVisible) {
    timetableContainer.innerHTML = ""; // Clear the table when hiding
    button.textContent = "Show Full Timetable";
  } else {
    button.textContent = "Hide Timetable";
    renderTimetable(scheduleData1, timetableContainer);
  }

  timetableVisible = !timetableVisible;
}

// Render full timetable
function renderTimetable(data, container) {
  container.innerHTML = ""; // Clear the existing content
  
  data.forEach(day => {
    const dayColumn = document.createElement("div");
    dayColumn.classList.add("day-column1");

    const dayHeading = document.createElement("div");
    dayHeading.classList.add("day-heading1");
    dayHeading.textContent = `${day.week}, Day ${day.day}`;
    dayColumn.appendChild(dayHeading);

    day.schedule.forEach(period => {
      const periodElement = document.createElement("div");
      periodElement.classList.add("period1");

      const periodTime = document.createElement("div");
      periodTime.classList.add("period-time1");
      periodTime.textContent = period.time;
      periodElement.appendChild(periodTime);

      const periodSubject = document.createElement("div");
      periodSubject.classList.add("period-subject1");
      periodSubject.textContent = period.subject;
      periodElement.appendChild(periodSubject);

      const periodLocation = document.createElement("div");
      periodLocation.classList.add("period-location1");
      periodLocation.textContent = period.location;
      periodElement.appendChild(periodLocation);

      dayColumn.appendChild(periodElement);
    });

    container.appendChild(dayColumn);
  });
}