// script.js

// Đảm bảo rằng mã JavaScript chỉ chạy sau khi toàn bộ HTML đã tải xong
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tham chiếu tới phần tử canvas
    const chart3 = document.getElementById("chart3").getContext("2d");
    new Chart(chart3, {
      type: "line",
      data: {
        labels: ["1", "2",'3','4','5','6','7'],
        datasets: [{
          label: 'Revenue of Month',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: '#FEF0EF',
          borderColor: '#FF806C',
          tension: 0.1
        }]
      },
      options: {
        responsive: true, // Bật tính năng responsive
        maintainAspectRatio: false, // Cho phép thay đổi tỷ lệ khung hình
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
  