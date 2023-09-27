import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "vNzRiRzr64MpV0hmt1vRCKYgGAiDcPYO9RwNeugz",
    "X-Parse-REST-API-Key": "WOBzvGt4hyJ0RvAXT1VQnU7LK7pTcUaauuiEferA",
  },
});

export const getBooks = () =>
  instance
    .get("/Books", {
      params: {
        keys: ["author", "title","year","description", "objectID"]
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});

export const createBook = ({author,title,year,description}) => {

  console.log("Author:", author)
  console.log("Title:", title)
  console.log("Year:", year)
  console.log("Description:", description)

  return instance.post("/Books", {
    author,
    title,
    year,
    description
  });
};