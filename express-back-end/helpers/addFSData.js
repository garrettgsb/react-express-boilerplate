const addFSData = (rawData, outputAttractions) => {
  for (let i of rawData) {
    const category = i.venue.categories[0].shortName;
    if (category.includes("Park") || category.includes("Beach") || category.includes("Trail") || category.includes("Garden"))  {
      outputAttractions.push({
        id: i.venue.id,
        name: i.venue.name,
        description: '',
        review: '',
        lat: i.venue.location.lat,
        long: i.venue.location.lng,
        open_time: 32400,
        close_time: 64800,
        visit_duration: 120,
        location: i.venue.location.address,
        category: "SCENERY"
      })
    } else if (category.includes("Store") || category.includes("Shop") || category.includes("Market") | category.includes("Supermarket") | category.includes("Mall")) {
      outputAttractions.push({
        id: i.venue.id,
        name: i.venue.name,
        description: '',
        review: '',
        lat: i.venue.location.lat,
        long: i.venue.location.lng,
        open_time: 32400,
        close_time: 64800,
        visit_duration: 120,
        location: i.venue.location.address,
        category: "SHOPPING"
      })
    } else if (category.includes("Museum")) {
      outputAttractions.push({
        id: i.venue.id,
        name: i.venue.name,
        description: '',
        review: '',
        lat: i.venue.location.lat,
        long: i.venue.location.lng,
        open_time: 32400,
        close_time: 64800,
        visit_duration: 120,
        location: i.venue.location.address,
        category: "SHOPPING"
      })
    } else if (category.includes("Restaurant") || category.includes("Coffee Shop") || category.includes("Eatery")) {
      outputAttractions.push({
        id: i.venue.id,
        name: i.venue.name,
        description: '',
        review: '',
        lat: i.venue.location.lat,
        long: i.venue.location.lng,
        open_time: 32400,
        close_time: 64800,
        visit_duration: 120,
        location: i.venue.location.address,
        category: "RESTAURANTS/COFFEE SHOPS"
      })
    }
  }
};

module.exports = { addFSData };