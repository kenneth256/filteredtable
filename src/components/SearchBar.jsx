const SearchBar = ({ filter, inStock, onFilterChange, onInStockChange }) => {
    return (
        <form>
            <div><section>
            <input 
                    type="text" 
                placeholder="Search..." 
                value={filter}
                onChange={(e) => onFilterChange(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
            />
            </section>
              <section>
            <label>
                <input 
                    type="checkbox" 
                    checked={inStock}
                    onChange={(e) => onInStockChange(e.target.checked)}
                    className="text-red-500"
                />
               
                {" "}
                Only show products in stock
            </label>
            </section>
            </div>
        </form>
    )
}

export default SearchBar;