import Route from "@ioc:Adonis/Core/Route";

export class ProductsRoutes {
  /*
  |--------------------------------------------------------------------------
  | Routes
  | Allows to see all products available in the store
  |--------------------------------------------------------------------------
  */
  public static start(): void {
    Route.get("api/v1/products", async ({}) => {
      const result = [];
      if (result.length < 1) return { error: "No products allowed matches" };
      return result;
    });
  }
}
