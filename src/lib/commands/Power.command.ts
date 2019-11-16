// Device power commands
export enum POWER_COMMANDS {
  // Power On
  POWER_ON = 'power_on!',

  // Power Off
  POWER_OFF = 'power_off!',

  // Toggle Power
  POWER_TOGGLE = 'power_toggle!',
}

// Device responses on power commands
export const POWER_COMMAND_RESPONSES: {
  [key in POWER_COMMANDS]: string | string[];
} = {
  [POWER_COMMANDS.POWER_ON]: 'power=on$',
  [POWER_COMMANDS.POWER_OFF]: 'power=standby$',
  [POWER_COMMANDS.POWER_TOGGLE]: ['power=on$', 'power=standby$'],
};
