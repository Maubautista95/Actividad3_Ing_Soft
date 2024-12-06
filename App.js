function saveFormData() {
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const vehiclePlate = document.getElementById('vehiclePlate').value;
    const vehicleModel = document.getElementById('vehicleModel').value;

    const newVehicleData = {
        customerName,
        customerPhone,
        vehiclePlate,
        vehicleModel
    };

    // Recuperar los datos existentes en Local Storage
    let vehicleDataArray = JSON.parse(localStorage.getItem('vehicleDataArray')) || [];

    // Añadir los nuevos datos al array
    vehicleDataArray.push(newVehicleData);

    // Guardar el array actualizado en Local Storage
    localStorage.setItem('vehicleDataArray', JSON.stringify(vehicleDataArray));

    // Redirigir a la página de la tabla de vehículos
    window.location.href = '/vehicle_table.html';
}


// Función para cargar datos de Local Storage y mostrarlos en la tabla
window.onload = function() {
    const savedData = localStorage.getItem('vehicleDataArray');
    if (savedData) {
        const vehicleDataArray = JSON.parse(savedData);

        // Obtener el cuerpo de la tabla
        const tableBody = document.getElementById('vehicleTableBody');

        // Crear una fila por cada entrada en el array
        vehicleDataArray.forEach(vehicleData => {
            const row = document.createElement('tr');

            const cell1 = document.createElement('td');
            cell1.textContent = 'A2'; // Puedes ajustar esto según la lógica de tu aplicación
            row.appendChild(cell1);

            const cell2 = document.createElement('td');
            cell2.textContent = vehicleData.vehicleModel;
            row.appendChild(cell2);

            const cell3 = document.createElement('td');
            cell3.textContent = vehicleData.customerName;
            row.appendChild(cell3);

            const cell4 = document.createElement('td');
            cell4.textContent = vehicleData.vehiclePlate;
            row.appendChild(cell4);

            const cell5 = document.createElement('td');
            cell5.textContent = '60 Minutos'; // Puedes ajustar esto según la lógica de tu aplicación
            row.appendChild(cell5);

            tableBody.appendChild(row);
        });
    }
};
