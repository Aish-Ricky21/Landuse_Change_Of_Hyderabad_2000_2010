const data = [
  { "CLASS NAME": "AGRICULTURAL DRY LAND", "LOSS": 49.2471, "GAIN": 54.4464, "CHANGE": 0.22059722, "UNCHANGED": 23.5692 },
  { "CLASS NAME": "HIGHLY DENCE URBAN", "LOSS": 182.8368, "GAIN": 233.3898, "CHANGE": 0.319887467, "UNCHANGED": 158.0337 },
  { "CLASS NAME": "LOW DENCE URBAN", "LOSS": 195.0831, "GAIN": 153.36, "CHANGE": -0.430261912, "UNCHANGED": 96.9714 },
  { "CLASS NAME": "SHRUB", "LOSS": 85.1499, "GAIN": 71.7093, "CHANGE": -0.427834756, "UNCHANGED": 31.4154 },
  { "CLASS NAME": "VEGETATION", "LOSS": 82.1034, "GAIN": 80.3943, "CHANGE": -0.039797971, "UNCHANGED": 42.9444 },
  { "CLASS NAME": "WATER BODIES", "LOSS": 10.467, "GAIN": 11.5875, "CHANGE": 0.141396934, "UNCHANGED": 7.9245 }
];

// Table rendering
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGE.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart with dropdown
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial pie chart load
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});












  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  