const apartments = [
    {   id: 1,
        subdivision: 'Longleaf',
        sqFt: 954,
        bedRooms: 2,
        bath: 1.5,    
        address: '1234 Abc st, Jacksonville, FL',
        isPetFriendly: true,
        lakeview: false,
        rent: '$1800'
    },
    {   id: 2,
        subdivision: 'East Forsyth',
        sqFt: 1005,
        bedRooms: 2,
        bath: 2,    
        address: '1234 Xyz st, Jacksonville, FL',
        isPetFriendly: false,
        lakeview: true,
        rent: '$1850'
    },
    { 
        id: 3,
        subdivision: 'The Drake',
        sqFt: 1200,
        bedRooms: 3,
        bath: 2,    
        address: '3456 Pqr st, Jacksonville, FL',
        isPetFriendly: true,
        lakeview: false,
        rent: '$1900'
    },
    { 
        id: 4,
        subdivision: 'Golden Shore',
        sqFt: 1300,
        bedRooms: 3,
        bath: 3,    
        address: '1478 Def st, Jacksonville, FL',
        isPetFriendly: false,
        lakeview: true,
        rent: '$2100'
    },
];
  
module.exports = {
    getAll: function() {
        return apartments;
    },

    getOne: function (id) {
        return apartments.find((apartment) => apartment.id === parseInt(id));   
    }
};
    