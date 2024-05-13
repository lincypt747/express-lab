const button = document.querySelector('button');
const type = document.querySelector('select');
const propertiesList= document.querySelector('#data-list');


button.addEventListener('click', async function(){
    const propertyType = type.value;
    const url = `http://localhost:3000/${propertyType}`;
    const response = await(fetch(url));
    const properties = await response.json();
    let out ='';
    for(let property of properties){
        out += `
            <tr>
                <td>${property.id}</td>
                <td>${property.subdivision}</td>
                <td>${property.address}</td>
                <td>${property.sqFt}</td>
                <td>${property.bedRooms}</td>
                <td>${property.bath}</td>
            </tr>
        `;
    }
    propertiesList.innerHTML = out;
})

