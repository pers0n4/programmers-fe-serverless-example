import fetch from "node-fetch";

const API_ENDPOINT = process.env.API_ENDPOINT;

export default async function handler(req, res) {
  const { username } = req.query;

  const response = await fetch(API_ENDPOINT, {
    headers: {
      "x-username": username,
    },
  });
  const data = await response.json();

  res.status(200).json(data);
}
