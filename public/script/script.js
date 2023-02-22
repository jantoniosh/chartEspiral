const ctx = document.getElementById('myChart');

const nVal = 360;

let lab = new Array(nVal);
let val = new Array(nVal);

for (let i = 0; i < lab.length; i++) {
    lab[i] = '';
    val[i] = i;
}

console.log(lab);

const data = {
    labels: lab,
    datasets: [{
        label: 'Distancias',
        data: val,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',

    },]
}
new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});  