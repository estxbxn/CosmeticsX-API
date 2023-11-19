import Route from "@ioc:Adonis/Core/Route";

export class CosmeticsRoutes {
  /*
  |--------------------------------------------------------------------------
  | Routes
  | Allows to see all cosmetics
  |--------------------------------------------------------------------------
  */
  public static start(): void {
    Route.get("api/v1/cosmetics", async ({}) => {
      const result = [];
      if (result.length < 1) return { error: "No cosmetics allowed matches" };
      return result;
    });
  }
}
