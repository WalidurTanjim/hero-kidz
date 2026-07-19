import collections from "@/lib/collections"
import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export const getProducts = async() => {
     const result = await dbConnect(collections.PRODUCTS).find().toArray();
     const products = result.map(product => ({
          ...product, 
          _id: product._id.toString()
     }))
     return products || [];
}

export const getProductById = async(id) => {
     if(id.length !== 24) {
          return {}
     }

     const query = { _id: new ObjectId(id) };
     const result = await dbConnect(collections.PRODUCTS).findOne(query);
     return { ...result, _id: result._id.toString() } || {};
}
