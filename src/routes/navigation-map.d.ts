import { Route } from "./route-names";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [Route.Dashboard]: undefined;
      [Route.Character]: undefined;
    }
  }
}
