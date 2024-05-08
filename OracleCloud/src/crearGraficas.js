import { Chart } from "chart.js";

// const coloresPieChart = ["#F7464A", "#46BFBD", "#444FBD"];
// array de 30 colores para los gráficos de barras en hexadecimales
const coloresPieChart = [
    "#F7464A", "#46BFBD", "#444FBD", "#FFFF99", "#00B3E6",
    "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
    "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A",
    "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
    "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC",
    "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399"
];

export function crearPieChart(datasets, labels, title, elementId) {

    var chartExist = Chart.getChart(elementId);
    if (chartExist !== undefined) {
      chartExist.options.plugins.title.text = title;
      chartExist.data.labels = labels;
      chartExist.update();
    }

    var ctx = document.getElementById(elementId).getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: datasets,
                backgroundColor: coloresPieChart,
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title
                },
                legend: {
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 14
                    },
                    footerFont: {
                        size: 14
                    }
                }
            }
        }
    });
}