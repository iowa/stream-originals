import { Credit } from "../../db/dbTypes.js";

export class TestCredits {

  public static readonly Kevin_Spacey: Credit = {
    id: "nm0000228",
    name: "Kevin Spacey",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
  }

  public static readonly James_Foley: Credit = {
    id: "nm0001226",
    name: "James Foley",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjI1MDQyMTAxNF5BMl5BanBnXkFtZTgwMjg0MTM2NjE@._V1_.jpg"
  }

  public static readonly Beau_Willimon: Credit = {
    id: "nm2802722",
    name: "Beau Willimon",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2ODk3Mjg3Ml5BMl5BanBnXkFtZTcwNTQyMjQwOQ@@._V1_.jpg"
  }

  public static readonly Winona_Ryder: Credit = {
    id: "nm0000213",
    name: "Winona Ryder",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ3NzM3MTc2NF5BMl5BanBnXkFtZTcwODMxNjA0NA@@._V1_.jpg",
  }



}

/*
SELECT *
FROM
	credits
WHERE
	ID IN ( SELECT credit_id FROM title_credits WHERE title_id = 'tt1856010' );
*/