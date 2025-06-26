import type { ActionType, NodePlopAPI } from "plop";
import type { BootstrapAnswers } from "./bootstrapAnswers.js";

export type BootstrapActionSetup = (plop: NodePlopAPI) => void;

export type BootstrapActionList = (
  path?: string,
  answers?: BootstrapAnswers
) => ActionType[];

export type BootstrapAction = {
  actionSetup: BootstrapActionSetup;
  actionsList: BootstrapActionList;
};
