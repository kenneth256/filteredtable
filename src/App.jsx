import './index.css'
import FilteredTable from './components/FilteredTable'
import PRODUCTS from './products'

export default function App() {
  return (
    // <div className="flex justify-center items-center min-h-screen w-full bg-gray-800 p-auto">
      
    // </div>
    <FilteredTable products={PRODUCTS} />
  );
}


