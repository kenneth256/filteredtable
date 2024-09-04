const ProductRow = ({ product }) => {
   const name = product.stocked ? product.name : <span style={{color: 'blue'}}>{product.name}</span>
return (
<tr>
    <td>{name}</td>
    <td style={{textAlign: 'right'}}>{product.price}</td>
</tr>
)
};

export default ProductRow