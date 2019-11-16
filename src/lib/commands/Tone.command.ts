export enum TONE_COMMANDS {
  // Tone bypass on
  BYPASS_ON = 'bypass_on!',

  // Tone bypass off
  BYPASS_OFF = 'bypass_off!',

  // Bass Up
  BASS_UP = 'bass_up!',

  // Bass Down
  BASS_DOWN = 'bass_down!',

  // Set bass to -10
  BASS_MINUS_TEN = 'bass_-10!',

  // Set bass to 0
  BASS_TO_ZERO = 'bass_000!',

  // Set bass to +10
  BASS_PLUS_TEN = 'bass_+10!',

  // Treble up
  TREBLE_UP = 'treble_up!',

  // Treble down
  TREBLE_DOWN = 'treble_down!',

  // Set Trebel to -10
  TREBLE_MINUS_TEN = 'treble_-10!',

  // Set treble to 0
  TREBLE_TO_ZERO = 'treble_000!',

  // Set treble to +10
  TREBLE_PLUS_TEN = 'treble_+10!',
}

export const TONE_COMMAND_RESPONSES: {
  [key in TONE_COMMANDS]: string | string[];
} = {
  [TONE_COMMANDS.BYPASS_ON]: 'bypass=on$',
  [TONE_COMMANDS.BYPASS_OFF]: 'bypass=off$',
  [TONE_COMMANDS.BASS_UP]: ['bass=000$', 'bass=+##$', 'bass=-##$'],
  [TONE_COMMANDS.BASS_DOWN]: ['bass=000$', 'bass=+##$', 'bass=-##$'],
  [TONE_COMMANDS.BASS_MINUS_TEN]: 'bass=-10$',
  [TONE_COMMANDS.BASS_TO_ZERO]: 'bass=000$',
  [TONE_COMMANDS.BASS_PLUS_TEN]: 'bass=+10$',
  [TONE_COMMANDS.TREBLE_UP]: ['treble=000$', 'treble=+##$', 'treble=-##$'],
  [TONE_COMMANDS.TREBLE_DOWN]: ['treble=000$', 'treble=+##$', 'treble=-##$'],
  [TONE_COMMANDS.TREBLE_MINUS_TEN]: 'treble=-10$',
  [TONE_COMMANDS.TREBLE_TO_ZERO]: 'treble=000$',
  [TONE_COMMANDS.TREBLE_PLUS_TEN]: 'treble=+10$',
};
