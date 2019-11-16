// Device volume controll commands
export enum VOLUME_COMMANDS {
  // Volume Up
  VOLUME_UP = 'vol_up!',

  // Volume Down
  VOLUME_DOWN = 'vol_dwn!',

  // Set Volume to min
  VOLUME_MIN = 'vol_min!',

  // Set volume to level n (0-96)
  VOLUME_NN = 'vol_nn!',
}

// Device responses on volume commands
export const VOLUME_COMMAND_RESPONSES: { [key in VOLUME_COMMANDS]: string } = {
  [VOLUME_COMMANDS.VOLUME_UP]: 'volume=##$',
  [VOLUME_COMMANDS.VOLUME_DOWN]: 'volume=##$',
  [VOLUME_COMMANDS.VOLUME_MIN]: 'volume=00$',
  [VOLUME_COMMANDS.VOLUME_NN]: 'volume=##$',
};
