import { promises as fs } from "fs";

export default async function getProducts() {
  const productsReq = await fs.readFile(
    process.cwd() + "/app/data/products.json",
    "utf-8"
  );

  const inventoryReq = await fs.readFile(
    process.cwd() + "/app/data/inventory.json",
    "utf-8"
  );
  const products = JSON.parse(productsReq);
  const inventory = JSON.parse(inventoryReq);

  const updatedProducts = products.map((product) => {
    const itemColors = [];

    const itemInfo = inventory.filter((item) => {
      return product.product_id === item.product_id;
    });

    itemInfo.forEach((item) => {
      itemColors.push(item.color);
    });

    return {
      ...product,
      color: Array.from(new Set(itemColors)),
    };
  });

  return updatedProducts;
}
