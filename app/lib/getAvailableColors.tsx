import React from 'react'
// import { promises as fs } from 'fs';
import { promises as fs } from 'fs';
import getProducts from './getProducts';


export default async function getAvailableColors() {
    
    const products = await getProducts()
    const inventoryReq = await fs.readFile(process.cwd() + '/app/data/inventory.json', 'utf-8')

    const productIds = [];
    const inventoryProducts = JSON.parse(inventoryReq);

    products.forEach(product => {
        productIds.push(product.product_id)
    })
    
    const itemColors:String[] = []
    
    inventoryProducts.forEach(item => {
      itemColors.push(item.color)

    })

    const colorsSet = new Set(itemColors)

    return Array.from(colorsSet)

}
