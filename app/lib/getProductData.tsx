import { promises as fs } from "fs";

export default async function getProductData(productId: string) {
  const productsReq = await fs.readFile(
    process.cwd() + "./app/data/products.json",
    "utf-8"
  );
  const inventoryReq = await fs.readFile(
    process.cwd() + "./app/data/inventory.json",
    "utf-8"
  );
  const imageReq = await fs.readFile(
    process.cwd() + "./app/data/product-images.json",
    "utf-8"
  );

  const products = JSON.parse(productsReq);
  const images = JSON.parse(imageReq);
  const inventory = JSON.parse(inventoryReq);

  let productName = "";
  let productDesc = "";

  // product name
  products.forEach((product) => {
    const { product_id, name, description } = product;

    if (product_id == productId) {
      productName = name;
      productDesc = description;
    }
  });

  // image, color
  const productImages = images.filter((image) => {
    return image.product_id === productId;
  });

  const productMainImageURL = productImages[0].image_url;

  const itemAllStyles = inventory.filter((product) => {
    return product.product_id === productId;
  });

  const allColors: String[] = [];
  const itemPrices = { listPrice: 0.0, salePrice: 0.0 };

  itemAllStyles.forEach((item) => {
    allColors.push(item.color);

    itemPrices.listPrice = item.list_price;
    itemPrices.salePrice = item.sale_price;
  });

  const itemColors = Array.from(new Set(allColors));

  // colors with price and size data
  return {
    productId,
    productName,
    productDesc,
    productMainImageURL,
    itemPrices,
    itemColors,
    itemAllStyles,
    productImages,
  };
}

export async function getProductStyles(
  productId: string,
  itemColors: String[]
) {
  const inventoryReq = await fs.readFile(
    process.cwd() + "/app/data/inventory.json",
    "utf-8"
  );

  const inventory = JSON.parse(inventoryReq);

  const styleData = {};

  itemColors.forEach((color) => {
    const styleArr = inventory.filter((style) => {
      return style.color === color;
    });
  });
}
