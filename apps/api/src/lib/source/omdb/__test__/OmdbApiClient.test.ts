import { describe, expect, it } from "vitest";
import { OmdbApiClient } from "../OmdbApiClient.js";

describe("ImdbApiDevTitles", () => {

  it("findTitle tt13745850", async () => {

    const result = await OmdbApiClient.findTitle();

    expect(result).toMatchInlineSnapshot(`
      {
        "Actors": "Chris Pratt, Zoe Saldaña, Dave Bautista",
        "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
        "BoxOffice": "$389,813,101",
        "Country": "United States",
        "DVD": "N/A",
        "Director": "James Gunn",
        "Genre": "Action, Adventure, Comedy",
        "Language": "English",
        "Metascore": "67",
        "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
        "Production": "N/A",
        "Rated": "PG-13",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "7.6/10",
          },
          {
            "Source": "Rotten Tomatoes",
            "Value": "85%",
          },
          {
            "Source": "Metacritic",
            "Value": "67/100",
          },
        ],
        "Released": "05 May 2017",
        "Response": "True",
        "Runtime": "136 min",
        "Title": "Guardians of the Galaxy Vol. 2",
        "Type": "movie",
        "Website": "N/A",
        "Writer": "James Gunn, Dan Abnett, Andy Lanning",
        "Year": "2017",
        "imdbID": "tt3896198",
        "imdbRating": "7.6",
        "imdbVotes": "809,834",
      }
    `)
  });


});
