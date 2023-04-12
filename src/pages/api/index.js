// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ObjectId } from "mongodb";

const dbUrl =
  "mongodb+srv://willcowen:cowenator69@cluster0.ysaekvh.mongodb.net/?retryWrites=true&w=majority";
export default async function handler(req, res) {
  if (req.method === "POST") {
    // POST request
    const response = await addProduct(req.body);
    return res.status(200).json({ response });
  }
  if (req.method === "GET") {
    // GET request
    const response = await getProducts();
    return res.status(200).json({ response });
  }
}

export async function getProducts() {
  const client = new MongoClient(dbUrl);
  const db = client.db();
  const productsCollection = db.collection("defaultDB");
  const products = await productsCollection.find().toArray();
  client.close();
  return products;
}

export async function getProductById(id) {
  const newObjectId = new ObjectId(id);
  const client = new MongoClient(dbUrl);
  const db = client.db();
  const productsCollection = db.collection("defaultDB");
  const product = await productsCollection.findOne({_id: newObjectId})
  client.close();
  return product;
}

export async function addProduct(product) {
  const client = new MongoClient(dbUrl);
  const db = client.db();
  const data = product;

  const productsCollection = db.collection("defaultDB");

  const result = await productsCollection.insertOne(data);
  client.close();

  return result;
}
