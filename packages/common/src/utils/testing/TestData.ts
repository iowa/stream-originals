import { TitleDraft } from "@repo/common";
import { TestTitle } from "./TestEntities.js";
import { TestTitleHouseOfCards } from "./TestTitleHouseOfCards.js"
import { TestTitleTheWatcher } from "./TestTitleTheWatcher.js";
import { TitlePatchDto } from "../../dto/dtoTypes.js";
import { TestTitleStrangerThings } from "./TestTitleStrangerThings.js";

export class TestData {

  public static readonly TitleDraft_HouseOfCards: TitleDraft = TestTitleHouseOfCards.TitleDraft
  public static readonly TestTitle_HouseOfCards: TestTitle = TestTitleHouseOfCards.TestTitle
  public static readonly TitlePatchDto_HouseOfCards: TitlePatchDto = TestTitleHouseOfCards.TitlePatchDto

  public static readonly TestTitle_TheWatcher: TestTitle = TestTitleTheWatcher.TestTitle

  public static readonly TestTitle_StrangerThings: TestTitle = TestTitleStrangerThings.TestTitle

}