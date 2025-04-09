import { count } from "console";
import { STATES, STATES_DATA } from "../common/states/states";
import { randomUnsignedInteger } from "./helpers";

export function CPFGenerator(state?: string): string {
  const fiscalRegionCode = state && STATES.includes(state || '') ? STATES_DATA[state].fiscalRegionCode : randomUnsignedInteger(1);
  const baseCPF = randomUnsignedInteger(8) + fiscalRegionCode;

  let randomNumber = '';
  let count = 0;
  // console.log('executing...');
  // while (randomNumber != '422295408') {
  //   count++;
  //   randomNumber = randomUnsignedInteger(9);
  // }

  console.log({ count, randomNumber });

  console.log({
    fiscalRegionCode,
    baseCPF
  });
  return randomUnsignedInteger(8);
}