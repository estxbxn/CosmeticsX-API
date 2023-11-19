/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { CosmeticsRoutes } from "../app/routes/v1/cosmetics/CosmeticsRoutes";
import { ProfileRoutes } from "../app/routes/v1/cosmetics/profile/ProfileRoutes";
import { RanksRoutes } from "../app/routes/v1/ranks/RanksRoutes";

ProfileRoutes.start();
CosmeticsRoutes.start();
RanksRoutes.start();
