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

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [15, 20, 10, 17, 13],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ["#246dec", "#00ff99", "#FEC260", "#1597BB", "#03C4A1"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Monitor", "Laptop", "Phone", "RAM", "SSD"],
    labels: {
      style: {
        colors: "#FFFFFF",
      },
    },
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        color: "#FFFFFF",
      },
    },
    labels: {
      style: {
        colors: "#FFFFFF",
      },
    },
  },
  tooltip: {
    theme: "dark",
  },
};

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: "Purchase",
      data: [31, 40, 33, 51, 42, 109, 100],
    },
    {
      name: "Sales",
      data: [15, 35, 50, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#00ff99", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Purchase",
        style: {
          color: "#FFFFFF",
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales",
        style: {
          color: "#FFFFFF",
        },
      },
      labels: {
        style: {
          colors: "#FFFFFF",
        },
      },
    },
  ],
  xaxis: {
    labels: {
      style: {
        colors: "#FFFFFF",
      },
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  legend: {
    labels: {
      colors: "#FFFFFF",
    },
  },
};

const areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();
