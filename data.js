const data=[
     { date: "08/12/2024", health: 28, play: 35, learning: 34, relationship: 35 },
      { date: "15/12/2024", health: 45, play: 50, learning: 50, relationship: 50 },
      { date: "22/12/2024", health: 56, play: 39, learning: 25, relationship: 50 },
      { date: "29/12/2024", health: 46, play: 50, learning: 35, relationship: 20 },
      { date: "05/01/2025", health: 54, play: 33, learning: 64, relationship: 44 },
      { date: "12/01/2025", health: 70, play: 63, learning: 60, relationship: 48 },
      { date: "19/01/2025", health: 67, play: 57, learning: 49, relationship: 56 },
      { date: "26/01/2025", health: 60, play: 52, learning: 55, relationship: 60 },
      { date: "02/02/2025", health: 70, play: 55, learning: 50, relationship: 45 },
      { date: "09/02/2025", health: 34, play: 34, learning: 35, relationship: 50 },
      { date: "16/02/2025", health: 20, play: 60, learning: 30, relationship: 40 },
      { date: "23/02/2025", health: 60, play: 55, learning: 30, relationship: 45 }
];
  const dashboard = document.querySelector(".dashboard_01");
   data.forEach(entry => {
      const section = document.createElement("div");
      section.innerHTML = `
        <center><h2>${entry.date}</h2></center>
        <div class="dashboard_01">
          <label for="health">Health</label>
          <progress value="${entry.health}" max="100"></progress><br>
          <label for="play">Play</label>
          <progress value="${entry.play}" max="100"></progress><br>
          <label for="learning">Learning</label>
          <progress value="${entry.learning}" max="100"></progress><br>
          <label for="relationship">Relationship</label>
          <progress value="${entry.relationship}" max="100"></progress>
        </div>
      `;
      dashboard.appendChild(section);
    });

