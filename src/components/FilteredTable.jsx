import { useState } from "react";
import ProdTable from "./ProdTable";
import SearchBar from "./SearchBar";

const FilteredTable = ({ products }) => {
    const [filter, setFilter] = useState('');
    const [inStock, setInStock] = useState(false);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleInStockChange = (newInStock) => {
        setInStock(newInStock);
    };

    return (
        <div className="flex flex-col p-4 bg-gray-800 my-auto border-2 border-gray-700 rounded-md">
           <SearchBar 
               filter={filter} 
               inStock={inStock} 
               onFilterChange={handleFilterChange} 
               onInStockChange={handleInStockChange}
           />
           <ProdTable 
               products={products} 
               filter={filter} 
               inStock={inStock}
           />
        </div>
    )
};

export default FilteredTable;