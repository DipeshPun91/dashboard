const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}

const progressCircles = document.querySelectorAll(".progress-circle .progress");

progressCircles.forEach((circle) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const progress = 81;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${
    circumference - (progress / 100) * circumference
  }`;
});

document.addEventListener("DOMContentLoaded", function () {
  let barChart, areaChart;

  function renderCharts() {
    if (barChart) barChart.destroy();
    if (areaChart) areaChart.destroy();

    let chartWidth = document.querySelector(".charts-card").offsetWidth;
    let chartHeight = 350;

    // BAR CHART
    const barChartOptions = {
      series: [{ data: [15, 20, 10, 17, 13] }],
      chart: {
        type: "bar",
        height: chartHeight,
        width: chartWidth,
        toolbar: { show: false },
        animations: { enabled: true },
      },
      colors: ["#246dec", "#00ff99", "#FEC260", "#1597BB", "#03C4A1"],
      plotOptions: {
        bar: { distributed: true, borderRadius: 4, columnWidth: "40%" },
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      xaxis: {
        categories: ["Monitor", "Laptop", "Phone", "RAM", "SSD"],
        labels: { style: { colors: "#FFFFFF" } },
      },
      yaxis: {
        title: { text: "Count", style: { color: "#FFFFFF" } },
        labels: { style: { colors: "#FFFFFF" } },
      },
      tooltip: { theme: "dark" },
    };

    barChart = new ApexCharts(
      document.querySelector("#bar-chart"),
      barChartOptions
    );
    barChart.render();

    // AREA CHART
    const areaChartOptions = {
      series: [
        { name: "Revenue", data: [31, 40, 33, 51, 42, 109, 100] },
        { name: "Expenses", data: [15, 35, 50, 32, 34, 52, 41] },
      ],
      chart: {
        height: chartHeight,
        width: chartWidth,
        type: "area",
        toolbar: { show: false },
        animations: { enabled: true },
      },
      colors: ["#00ff99", "#246dec"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      yaxis: [
        {
          title: { text: "Revenue", style: { color: "#FFFFFF" } },
          labels: { style: { colors: "#FFFFFF" } },
        },
        {
          opposite: true,
          title: { text: "Expenses", style: { color: "#FFFFFF" } },
          labels: { style: { colors: "#FFFFFF" } },
        },
      ],
      xaxis: { labels: { style: { colors: "#FFFFFF" } } },
      tooltip: { shared: true, theme: "dark" },
      legend: { labels: { colors: "#FFFFFF" } },
    };

    areaChart = new ApexCharts(
      document.querySelector("#area-chart"),
      areaChartOptions
    );
    areaChart.render();
  }

  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      let newWidth = document.querySelector(".charts-card").offsetWidth;
      if (barChart && areaChart) {
        barChart.updateOptions({ chart: { width: newWidth, height: 350 } });
        areaChart.updateOptions({ chart: { width: newWidth, height: 350 } });
      }
    }, 200);
  });

  renderCharts();
});
