const ctx = document.getElementById("myChart")
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "$",
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: ["hsl(10, 79%, 65%)"],
      },
    ],
  },
  options: {
    borderRadius: 3,
    hoverBackgroundColor: "hsl(10, 79%, 75%)",
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        yAlign: "bottom",
        titleAlign: "center",
        bodyAlign: "center",
        displayColors: false,
      },
    },
  },
})
