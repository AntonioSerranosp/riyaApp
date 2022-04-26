import { createContext } from "react";

/**
 * crear type para el context
 *
 */
interface user {
  name: string;
}
interface RiyaState {
  logged: boolean;
  name: string;
}
export interface RiyaContextProps {
  riyaState: RiyaState;
  dispatch: React.Dispatch<any>;
}

export const RiyaContext = createContext<RiyaContextProps>(
  {} as RiyaContextProps
);
