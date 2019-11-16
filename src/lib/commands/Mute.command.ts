// Device mute commands
export enum MUTE_COMMANDS {
  // Set Mute ON
  MUTE_ON = 'mute_on!',

  // Set Mute OFF
  MUTE_OFF = 'mute_off!',

  // Toggle Mute state
  MUTE_TOGGLE = 'mute!',
}

// Device responses on mute commands
export const MUTE_COMMAND_RESPONSES: {
  [key in MUTE_COMMANDS]: string | string[];
} = {
  [MUTE_COMMANDS.MUTE_ON]: 'mute=on$',
  [MUTE_COMMANDS.MUTE_OFF]: 'mute=off$',
  [MUTE_COMMANDS.MUTE_TOGGLE]: ['mute=on$', 'mute=off$'],
};
