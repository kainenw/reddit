const postList = require("./sample_data.js");
/* import searchData from "./sample_data/search.js" */
const postobjects = require("../util.js");
const { store } = require("../App/store.js");

describe("set the redux state to raw data", () => {
  test("set postList to sample data", () => {
    const input = store;
    const output = {
      raw: {},
      processed: {},
      isLoading: false,
      hasError: false,
    };
    expect(input).toEqual(output);
  });
});
describe("convert api response into a useable form", () => {
  test("return list of post objects", () => {
    const input = postList.data.children;
    const output = [
      {
        title: "A dog running and feeling the speed",
        subreddit: "nextfuckinglevel",
        user: "t2_a8w6ykir",
        text: "this is text that I made up for testing",
        hasImage: false,
        media: "https://v.redd.it/hrwe87t6103a1",
      },
      {
        title: "Meirl",
        subreddit: "meirl",
        user: "t2_iczoph5y",
        text: "",
        hasImage: true,
        media: "https://i.redd.it/t0zqz3vuw43a1.jpg",
        /* link: null */
      },
      {
        title:
          "World Cup fan, 27, 'shot and killed for celebrating USA win' in Iran by security agencies",
        subreddit: "worldnews",
        user: "t2_5paqirf4",
        text: "special",
        hasImage: false,
        media:
          "https://euroweeklynews.com/2022/11/30/breaking-world-cup-fan-27-shot-and-killed-for-celebrating-usa-win-in-iran-by-security-agencies/",
        /* link: null */
      },
    ];
    expect(postobjects(input)).toEqual(output);
  });
});

// npm test apiDataProcessing.spec.js
