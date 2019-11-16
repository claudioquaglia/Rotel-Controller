// Device source selection commands
export enum SOURCE_COMMANDS {
  // Source CD
  CD = 'cd!',

  // Source Coax 1
  COAX1 = 'coax1!',

  // Source Coax 2
  COAX2 = 'coax2!',

  // Source Coax 3
  COAX3 = 'coax3!',

  // Source Opt 1
  OPT1 = 'opt1!',

  // Source Opt 2
  OPT2 = 'opt2!',

  // Source Opt 3
  OPT3 = 'opt3!',

  // Source Aux
  AUX = 'aux!',

  // Source Tuner
  TUNER = 'tuner!',

  // Source Phono
  PHONO = 'phono!',

  // Source USB
  USB = 'usb!',

  // Source Bluetooth
  BLUETOOTH = 'bluetooth!',

  // Source XLR
  XLR = 'bal_xlr!',

  // Source PC USB
  PC_USB = 'pcusb!',
}

export const SOURCE_COMMAND_RESPONSES: { [key in SOURCE_COMMANDS]: string } = {
  [SOURCE_COMMANDS.CD]: 'source=cd$',
  [SOURCE_COMMANDS.COAX1]: 'source=coax1$',
  [SOURCE_COMMANDS.COAX2]: 'source=coax2$',
  [SOURCE_COMMANDS.COAX3]: 'source=coax3$',
  [SOURCE_COMMANDS.OPT1]: 'source=opt1$',
  [SOURCE_COMMANDS.OPT2]: 'source=opt2$',
  [SOURCE_COMMANDS.OPT3]: 'source=opt3$',
  [SOURCE_COMMANDS.AUX]: 'source=aux$',
  [SOURCE_COMMANDS.TUNER]: 'source=tuner$',
  [SOURCE_COMMANDS.PHONO]: 'source=phono$',
  [SOURCE_COMMANDS.USB]: 'source=usb$',
  [SOURCE_COMMANDS.BLUETOOTH]: 'source=bluetooth$',
  [SOURCE_COMMANDS.XLR]: 'source=bal_xlr$',
  [SOURCE_COMMANDS.PC_USB]: 'source=pc_usb$',
};
