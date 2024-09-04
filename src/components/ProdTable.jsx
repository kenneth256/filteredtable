import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

const ProdTable = ({ products, filter, inStock }) => {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
            return;
        }
        if (inStock && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(<ProductCategory category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
};

export default ProdTable;

