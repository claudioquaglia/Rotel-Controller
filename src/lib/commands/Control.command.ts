// Device source control commands
export enum CONTROL_COMMANDS {
  // Play source
  PLAY = 'play!',

  // Stop source
  STOP = 'stop!',

  // Pause source
  PAUSE = 'pause!',

  // Track Forward/Tune Up
  TRK_FWD = 'trkf!',

  // Track Backward/Tune Down
  TRK_BWD = 'trkb!',
}

export const CONTROL_COMMAND_RESPONSES: {
  [key in CONTROL_COMMANDS]: string;
} = {
  [CONTROL_COMMANDS.PLAY]: '',
  [CONTROL_COMMANDS.STOP]: '',
  [CONTROL_COMMANDS.PAUSE]: '',
  [CONTROL_COMMANDS.TRK_FWD]: '',
  [CONTROL_COMMANDS.TRK_BWD]: '',
};
