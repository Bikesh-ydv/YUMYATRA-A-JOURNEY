export function filterdata(SearchInput, restaurants)
{

   const filterdata= restaurants.filter((restaurant)=>
   restaurant.info.name.toUpperCase().includes(SearchInput.toUpperCase()))
   return filterdata;
}