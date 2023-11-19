import Route from "@ioc:Adonis/Core/Route";

export class ProfileRoutes {
  /*
  |--------------------------------------------------------------------------
  | Routes
  | Allows to see a specific profile
  |--------------------------------------------------------------------------
  */
  public static start(): void {
    Route.get("api/v1/cosmetics/profile/:uuid", async ({ params }) => {
      const result = {
        ok: false,
        message:
          "The profile requested with unique id " +
          params.uuid +
          " does not exist",
      };
      if (!result) return { error: "No ranks allowed matches" };
      return result;
    });
  }
}
