document.addEventListener('DOMContentLoaded', function() {
    const xSelect = document.getElementById('x');
    const ySelect = document.getElementById('y');
    const zSelect = document.getElementById('z');
    const myDiv = document.getElementById('myDiv');

    const dataOptions = ['price', 'volume', 'market_cap', 'change_24h']; // Example dimensions

    function populateSelect(selectElement) {
        dataOptions.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.innerHTML = option;
            selectElement.appendChild(opt);
        });
    }

    function updateChart() {
        const xValue = xSelect.value;
        const yValue = ySelect.value;
        const zValue = zSelect.value;

        const trace = {
            x: [/* data for xValue */], 
            y: [/* data for yValue */],
            z: [/* data for zValue */], 
            type: 'scatter3d', 
            mode: 'markers'
        };

        Plotly.newPlot(myDiv, [trace]);
    }

    populateSelect(xSelect);
    populateSelect(ySelect);
    populateSelect(zSelect);

    xSelect.addEventListener('change', updateChart);
    ySelect.addEventListener('change', updateChart);
    zSelect.addEventListener('change', updateChart);
});
