const dogs = [
    { id: 1,
      name: "Honey",
     color: "blonde",
     personality: "fisty" },
    { id: 2,
      name: "Missy",
      color: "white black and brown",
      personality: 'lovable' },
    { id: 3,
      name: "Bella",
      color: "Black and white",
      personality: 'playful' },
];
  
module.exports = {
    getAll: function() {
      return dogs;
    },
 
   getOne: function (id) {
     return dogs.find((dog) => dog.id === parseInt(id));
   }
  };
 
 