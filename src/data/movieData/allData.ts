import { action_Data } from "./action";
import { animation_Data } from "./animation";
import { comedy_Data } from "./comedy";
import { documentary_Data } from "./documentary";
import { horror_Data } from "./horror";
import { netflix_Data } from "./netflix";
import { romance_Data } from "./romance";
import { thriller_Data } from "./thriller";

// 전체 데이터
export const all_Data = [
  ...action_Data,
  ...animation_Data,
  ...comedy_Data,
  ...documentary_Data,
  ...horror_Data,
  ...netflix_Data,
  ...romance_Data,
  ...thriller_Data,
];
