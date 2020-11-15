/* eslint-disable strict */
const { v4: uuid } = require("uuid");

const bookmarks = [
  {
    id: uuid(),
    title: "WWE",
    url: "https://Test.org",
    description: "ssss",
    rating: 5,
  },
  {
    id: uuid(),
    title: "CNN",
    url: "https://Test.org",
    description: "ddddddd",
    rating: 4,
  },
  {
    id: uuid(),
    title: "BBC",
    url: "https://Test.org",
    description: "Test",
    rating: 5,
  },
];

module.exports = { bookmarks };
