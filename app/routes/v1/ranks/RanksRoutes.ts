import Route from "@ioc:Adonis/Core/Route";
import ranks from "../../../data/ranks.json";

export class RanksRoutes {
  /*
  |--------------------------------------------------------------------------
  | Routes
  | Allows to see all ranks
  |--------------------------------------------------------------------------
  */
  public static start(): void {
    Route.get("api/v1/ranks", async ({}) => {
      const result = ranks;
      if (result.length < 1) return { error: "No ranks allowed matches" };
      return result;
    });
  }
}
