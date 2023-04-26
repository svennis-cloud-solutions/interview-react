import React from "react";
import { Product } from "./App";

interface Props {
  products: Product[];
}

const Table: React.FC<Props> = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th className="description">Description</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Rating</th>
          <th>Stock</th>
          <th>Brand</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td className="description">{product.description}</td>
            <td>{product.price}</td>
            <td>{product.discountPercentage}</td>
            <td>{product.rating}</td>
            <td>{product.stock}</td>
            <td>{product.brand}</td>
            <td>
              <img src={product.thumbnail} alt={product.title} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
