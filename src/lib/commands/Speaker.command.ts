export enum SPEAKER_COMMANDS {
  // Toggle speaker A output
  TOGGLE_SPEAKER_A = 'speaker_a!',

  // Toggle speaker B output
  TOGGLE_SPEAKER_B = 'speaker_b!',

  // Speaker A output On
  SPEAKER_A_ON = 'speaker_a_on!',

  // Speaker A output Off
  SPEAKER_A_OFF = 'speaker_a_off!',

  // Speaker B output On
  SPEAKER_B_ON = 'speaker_b_on!',

  // Speaker B output Off
  SPEAKER_B_OFF = 'speaker_b_off!',
}

export const SPEAKER_COMMAND_RESPONSES: {
  [key in SPEAKER_COMMANDS]: string | string[];
} = {
  [SPEAKER_COMMANDS.TOGGLE_SPEAKER_A]: [
    'speaker=a$',
    'speaker=a_b$',
    'speaker=off$',
  ],
  [SPEAKER_COMMANDS.TOGGLE_SPEAKER_B]: [
    'speaker=b$',
    'speaker=a_b$',
    'speaker=off$',
  ],
  [SPEAKER_COMMANDS.SPEAKER_A_ON]: ['speaker=a$', 'speaker=a_b$'],
  [SPEAKER_COMMANDS.SPEAKER_A_OFF]: ['speaker=b$', 'speaker=off$'],
  [SPEAKER_COMMANDS.SPEAKER_B_ON]: ['speaker=b$', 'speaker=a_b$'],
  [SPEAKER_COMMANDS.SPEAKER_B_OFF]: ['speaker=a$', 'speaker=off$'],
};
