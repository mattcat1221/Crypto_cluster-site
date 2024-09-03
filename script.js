// Assuming you have your data in 'crypto_market_data.csv' in the static directory

// Load the CSV data using D3.js
d3.csv('static/data/crypto_market_data.csv').then(function(data) {
    // Get the dropdown elements
    const xSelect = document.getElementById('x');
    const ySelect = document.getElementById('y');
    const zSelect = document.getElementById('z');

    // Populate dropdowns with data columns
    const columns = Object.keys(data[0]);
    columns.forEach(function(col) {
        const optionX = document.createElement('option');
        optionX.value = col;
        optionX.text = col;
        xSelect.add(optionX);

        const optionY = document.createElement('option');
        optionY.value = col;
        optionY.text = col;
        ySelect.add(optionY);

        const optionZ = document.createElement('option');
        optionZ.value = col;
        optionZ.text = col;
        zSelect.add(optionZ);
    });

    // Function to update the plot
    function updatePlot() {
        const xValue = xSelect.value;
        const yValue = ySelect.value;
        const zValue = zSelect.value;

        const trace = {
            x: data.map(d => d[xValue]),
            y: data.map(d => d[yValue]),
            z: data.map(d => d[zValue]),
            mode: 'markers',
            type: 'scatter3d',
            marker: {
                size: 5,
                color: data.map(d => d[zValue]),
                colorscale: 'Viridis',
                opacity: 0.8
            },
            text: data.map(d => d.name), // Assuming 'name' is a column with cryptocurrency names
        };

        const layout = {
            title: `3D Scatter Plot (${xValue} vs ${yValue} vs ${zValue})`,
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 40
            },
            scene: {
                xaxis: {title: xValue},
                yaxis: {title: yValue},
                zaxis: {title: zValue}
            }
        };

        Plotly.newPlot('myDiv', [trace], layout);
    }

    // Event listeners to update the plot when a new dimension is selected
    xSelect.addEventListener('change', updatePlot);
    ySelect.addEventListener('change', updatePlot);
    zSelect.addEventListener('change', updatePlot);

    // Initial plot with default selections
    updatePlot();
});


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
