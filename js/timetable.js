// Timetable data and functionality
const timetableData = [
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
    week: 'Week A',
    day: 6,
    title: 'Saturday',
    schedule: [
      {period: 'Period 0', time:'Have a good weekend :)',subject:'Saturday',location:'have a good rest'}
    ]
  },
  {
    week: 'Week A',
    day: 0,
    title: 'Sunday',
    schedule: [
      {period: 'Period 0', time:'Have a good weekend :)',subject:'Sunday',location:'have a good rest'}
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
  },
  {
    week: 'Week B',
    day: 6,
    title: 'Saturday',
    schedule: [
      {period: 'Period 0', time:'Have a good weekend :)',subject:'Saturday',location:'have a good rest'}
    ]
  },
  {
    week: 'Week B',
    day: 0,
    title: 'Sunday',
    schedule: [
      {period: 'Period 0', time:'Have a good weekend (:',subject:'Sunday',location:'have a good rest '}
    ]
  },
];

// Function to get the week number
function getWeekNumber(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}

// Function to get the current day of the week (0-6, Sunday-Saturday)
function getCurrentDay() {
  const d = new Date();
  return d.getDay();
}

// Function to get the current time in HH:MM format
function getCurrentTime() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
}

// Function to determine the current period based on time
function getCurrentPeriod() {
  const currentTime = getCurrentTime();
  let periodIndex = 9; // Default value (no period)
  
  if (currentTime > '08:00') periodIndex = 0;
  if (currentTime > '08:45') periodIndex = 1;
  if (currentTime > '09:50') periodIndex = 2;
  if (currentTime > '10:55') periodIndex = 3;
  if (currentTime > '12:25') periodIndex = 4;
  if (currentTime > '13:30') periodIndex = 5;
  if (currentTime > '15:30') periodIndex = 6;
  
  return periodIndex;
}

// Function to get poems based on the day
function getPoemForDay(day) {
  const poems = {
    1: 'Roses are red, Violets are blue, Like a celestial fire, Your radiance shines through.',
    2: 'Roses are red, Violets are blue, I love you so much, I hope you love me too',
    3: 'Roses are red, Violets are blue, With every twinkle, every gleam, You illuminate my world, like stars do.',
    4: 'Roses are red, violets are blue, You\'re like sugar, cause you\'re sweet too.',
    5: 'The rose is red, the violet is blue, the honey is sweet, and so are you.',
    default: 'Roses are red, Violets are blue my love for you, it\'s just so out of the blue'
  };
  
  return poems[day] || poems.default;
}

// Function to update the timetable based on the current day and week
function updateTimetable() {
  let currentWeek = getWeekNumber(new Date()) % 2 === 0 ? 'A' : 'B';
  let currentDay = getCurrentDay();
  const currentTime = getCurrentTime();
  
  // Next day logic after 5 PM
  if (currentTime > '17:00' && currentTime < '24:00') {
    currentDay = (currentDay + 1) % 7;
    if (currentDay === 0) { // If the next day is Sunday, flip the week
      currentWeek = currentWeek === 'A' ? 'B' : 'A';
    }
  }
  
  const periodIndex = getCurrentPeriod();
  let timetableHTML = '';
  
  // Find the timetable data for the current day and week
  for (const weekData of timetableData) {
    if (weekData.week === 'Week ' + currentWeek && weekData.day === currentDay) {
      timetableHTML += '<div class="day">';
      
      // Generate day heading
      if (weekData.day === 6 || weekData.day === 0) {
        timetableHTML += '<div class="day-heading">Weekend</div>';
      } else {
        const dayNumber = currentWeek === 'A' ? weekData.day : weekData.day + 5;
        timetableHTML += `<div class="day-heading">Day ${dayNumber}</div>`;
      }
      
      // Generate periods
      for (let j = 0; j < weekData.schedule.length; j++) {
        const periodData = weekData.schedule[j];
        const periodClass = j === periodIndex ? 'period-now' : 'period';
        
        timetableHTML += `<div class="${periodClass}">`;
        timetableHTML += `<div class="period-time">${periodData.time}</div>`;
        timetableHTML += `<div class="period-subject">${periodData.subject}</div>`;
        timetableHTML += `<div class="period-location">${periodData.location}</div>`;
        timetableHTML += '</div>';
      }
      
      timetableHTML += '</div>';
      
      // Update the poem based on the current day
      document.querySelector('.quote-text').textContent = getPoemForDay(currentDay);
      break;
    }
  }
  
  // Insert the generated timetable HTML
  document.querySelector('.timetable').innerHTML = timetableHTML;
}

// Function to get current time with AEST/AEDT
function getCurrentAESTTime() {
  const currentTime = new Date();
  const options = { 
    timeZone: 'Australia/Sydney', 
    hour12: true, 
    hour: 'numeric', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  return currentTime.toLocaleTimeString('en-AU', options);
}

// Function to display current time
function displayCurrentTime() {
  const timeElement = document.getElementById('timeElement');
  if (timeElement) {
    timeElement.innerHTML = `Current time: ${getCurrentAESTTime()}`;
  }
}

// Auto-refresh the page (every 5 minutes instead of every minute)
function setupAutoRefresh() {
  setTimeout(function() {
    window.location = window.location.href;
  }, 300000); // 5 minutes
}

// Initialize all timetable functions when the page loads
document.addEventListener('DOMContentLoaded', function() {
  updateTimetable();
  displayCurrentTime();
  
  // Set interval for time updates (every second)
  setInterval(displayCurrentTime, 1000);
  setInterval(updateTimetable, 1000);
  
  // Setup auto-refresh
  setupAutoRefresh();
});