    export function funfilterRestaurant(searchInput,restaurants){
        const filteredData=restaurants.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase()));

        return filteredData;
    }

