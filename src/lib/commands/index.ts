import { BALANCE_COMMANDS, BALANCE_COMMAND_RESPONSES } from './Balance.command';
import { CONTROL_COMMANDS, CONTROL_COMMAND_RESPONSES } from './Control.command';
import { MUTE_COMMANDS, MUTE_COMMAND_RESPONSES } from './Mute.command';
import { OTHER_COMMANDS, OTHER_COMMAND_RESPONSES } from './Other.command';
import { POWER_COMMANDS, POWER_COMMAND_RESPONSES } from './Power.command';
import { SOURCE_COMMANDS, SOURCE_COMMAND_RESPONSES } from './Source.command';
import { SPEAKER_COMMANDS, SPEAKER_COMMAND_RESPONSES } from './Speaker.command';
import { TONE_COMMANDS, TONE_COMMAND_RESPONSES } from './Tone.command';
import { VOLUME_COMMANDS, VOLUME_COMMAND_RESPONSES } from './Volume.command';

type CommandsType =
  | typeof BALANCE_COMMANDS
  | typeof CONTROL_COMMANDS
  | typeof MUTE_COMMANDS
  | typeof OTHER_COMMANDS
  | typeof POWER_COMMANDS
  | typeof SOURCE_COMMANDS
  | typeof SPEAKER_COMMANDS
  | typeof TONE_COMMANDS
  | typeof VOLUME_COMMANDS;

type CommandResponsesType =
  | typeof BALANCE_COMMAND_RESPONSES
  | typeof CONTROL_COMMAND_RESPONSES
  | typeof MUTE_COMMAND_RESPONSES
  | typeof OTHER_COMMAND_RESPONSES
  | typeof POWER_COMMAND_RESPONSES
  | typeof SOURCE_COMMAND_RESPONSES
  | typeof SPEAKER_COMMAND_RESPONSES
  | typeof TONE_COMMAND_RESPONSES
  | typeof VOLUME_COMMAND_RESPONSES;

enum Actions {
  balance = 'balance',
  control = 'control',
  mute = 'mute',
  other = 'other',
  power = 'power',
  source = 'source',
  speaker = 'speaker',
  tone = 'tone',
  volume = 'volume',
}

export const Commands: { [key in Actions]: CommandsType } = {
  balance: BALANCE_COMMANDS,
  control: CONTROL_COMMANDS,
  mute: MUTE_COMMANDS,
  other: OTHER_COMMANDS,
  power: POWER_COMMANDS,
  source: SOURCE_COMMANDS,
  speaker: SPEAKER_COMMANDS,
  tone: TONE_COMMANDS,
  volume: VOLUME_COMMANDS,
};

export const CommandResponses: { [key in Actions]: CommandResponsesType } = {
  balance: BALANCE_COMMAND_RESPONSES,
  control: CONTROL_COMMAND_RESPONSES,
  mute: MUTE_COMMAND_RESPONSES,
  other: OTHER_COMMAND_RESPONSES,
  power: POWER_COMMAND_RESPONSES,
  source: SOURCE_COMMAND_RESPONSES,
  speaker: SPEAKER_COMMAND_RESPONSES,
  tone: TONE_COMMAND_RESPONSES,
  volume: VOLUME_COMMAND_RESPONSES,
};
