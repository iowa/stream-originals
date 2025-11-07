import { TitleDraft } from "@repo/common";
import { Credit, Interest } from "../db/dbTypes.js";
import { TitlePatchDto } from "../dto/dtoTypes.js";
import { TestTitle } from "./TestEntities.js";
import { TestTitleHouseOfCards } from "./TestTitleHouseOfCards.js"

export class CDatas {

  // HOUSE OF CARDS
  public static readonly TitleDraft_HouseOfCards: TitleDraft = TestTitleHouseOfCards.TitleDraft_HouseOfCards
  public static readonly Interest_Drama: Interest = TestTitleHouseOfCards.Interest_Drama
  public static readonly Credit_Kevin_Spacey: Credit = TestTitleHouseOfCards.Credit_Kevin_Spacey
  public static readonly Credit_James_Foley: Credit = TestTitleHouseOfCards.Credit_James_Foley
  public static readonly Credit_Beau_Willimon: Credit = TestTitleHouseOfCards.Credit_Beau_Willimon
  public static readonly TestTitle_House_of_Cards: TestTitle = TestTitleHouseOfCards.TestTitle_House_of_Cards
  public static readonly TitlePatchDto_House_of_Cards: TitlePatchDto = TestTitleHouseOfCards.TitlePatchDto_House_of_Cards
}