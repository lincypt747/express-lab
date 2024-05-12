const houses = [
    {   id: 1,
        subdivision: 'Silverthorn',
        sqFt: 4000,
        bedRooms: 5,
        bath: 4,    
        address: '233 asdf pkwy, Jacksonville, FL',
        hasPorch: true,
        lakeview: true,
        hasSunRoom: true,
        price: '$800,000'
    },
    {   id: 2,
        subdivision: 'Palencia',
        sqFt: 5000,
        bedRooms: 6,
        bath: 4.5,    
        address: '1234 palencia st, Jacksonville, FL',
        hasPorch: true,
        lakeview: true,
        hasSunRoom: false,
        price: '$1,000,000'
    },
    { 
        id: 3,
        subdivision: 'Chase Meadows',
        sqFt: 2500,
        bedRooms: 4,
        bath: 3,    
        address: '1234 chase st, Jacksonville, FL',
        hasPorch: false,
        lakeview: false,
        hasSunRoom: true,
        price: '$500,000'
    },
    { 
        id: 4,
        subdivision: 'Golden Gate',
        sqFt: 2000,
        bedRooms: 3,
        bath: 3,    
        address: '1478 golden st, Jacksonville, FL',
        isPetFriendly: false,
        hasPorch: true,
        lakeview: false,
        hasSunRoom: false,
        price: '$350,000'
    },
];

module.exports = {
    getAll: function() {
        return houses;
    },

    getOne: function(id) {
        return houses.find((house) => house.id === parseInt(id));
    }
};
