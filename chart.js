// script.js

// Đảm bảo rằng mã JavaScript chỉ chạy sau khi toàn bộ HTML đã tải xong
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tham chiếu tới phần tử canvas
    const ctx = document.getElementById("myChart").getContext("2d");
    const chart2 = document.getElementById("chart2").getContext("2d");
    // Tạo biểu đồ cột
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            label: "Quarter ",
            data: [12, 19, 30, 50],
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
            
            ],
            borderColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
              "rgba(153, 102, 255)",
              "rgba(255, 159, 64)",
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
              "rgba(153, 102, 255)",
              "rgba(255, 159, 64)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Bật tính năng responsive
        maintainAspectRatio: false, // Cho phép thay đổi tỷ lệ khung hình
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false, // Tắt lưới trên trục y
            },
          },
          x: {
            grid: {
              display: false, // Tắt lưới trên trục x
            },
          },
        },
      },
    });
  
    // Tạo biểu đồ donut
    new Chart(chart2, {
      type: "doughnut",
      data: {
        labels: ["Take away", "Order",'Dine in'],
        datasets: [
          {
            label: "My First Dataset",
            data: [60, 20,20],
            backgroundColor: [
              "rgb(255, 100, 44)",
              "rgb(25, 165, 208)",
              "#2E0AC4"
   
            ],
          },
        ],
      },
      options: {
        responsive: true, // Bật tính năng responsive
        maintainAspectRatio: false, // Cho phép thay đổi tỷ lệ khung hình
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false, // Tắt lưới trên trục y
            },
          },
          x: {
            grid: {
              display: false, // Tắt lưới trên trục x
            },
          },
        },
      },
    });
    new Chart(chart3, {
      type: "line",
      data: {
        labels: ["1", "2",'3','4','5','6','7'],
        datasets: [{
          label: 'Revenue of Month',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(254, 240, 239, 0.5)',
          borderColor: '#FF806C',
          tension: 0.1
        }]
      },
      options: {
        responsive: true, // Bật tính năng responsive
        maintainAspectRatio: true, // Cho phép thay đổi tỷ lệ khung hình
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true, // Tắt lưới trên trục y
            },
          },
          x: {
            grid: {
              display: true, // Tắt lưới trên trục x
            },
          },
        },
      },
    });
  });
  