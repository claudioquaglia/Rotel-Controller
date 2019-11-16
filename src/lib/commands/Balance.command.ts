export enum BALANCE_COMMANDS {
  // Balance right
  RIGHT = 'balance_r!',

  // Balance left
  LEFT = 'balance_l!',

  // Set balance to max left
  MAX_LEFT = 'balance_l15!',

  // Set balance to 0
  ZERO = 'balance_000!',

  // Set balance to max right
  MAX_RIGHT = 'balance_r15!',
}

export const BALANCE_COMMAND_RESPONSES: {
  [key in BALANCE_COMMANDS]: string | string[];
} = {
  [BALANCE_COMMANDS.RIGHT]: ['balance=000$', 'balance=L##$', 'balance=R##$'],
  [BALANCE_COMMANDS.LEFT]: ['balance=000$', 'balance=L##$', 'balance=R##$'],
  [BALANCE_COMMANDS.MAX_LEFT]: 'balance=L15$',
  [BALANCE_COMMANDS.ZERO]: 'balance=000$',
  [BALANCE_COMMANDS.MAX_RIGHT]: 'balance=R15$',
};
