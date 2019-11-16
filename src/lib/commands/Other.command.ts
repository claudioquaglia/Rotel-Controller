export enum OTHER_COMMANDS {
  // Toggle display dimmer
  DIMMER_TOGGLE = 'dimmer!',

  // Set display brightest setting
  DIMMER_0 = 'dimmer_0!',

  // Set display to dimmer level 1
  DIMMER_1 = 'dimmer_1!',

  // Set display to dimmer level 2
  DIMMER_2 = 'dimmer_2!',

  // Set display to dimmer level 3
  DIMMER_3 = 'dimmer_3!',

  // Set display to dimmer level 4
  DIMMER_4 = 'dimmer_4!',

  // Set display to dimmer level 5
  DIMMER_5 = 'dimmer_5!',

  // Set display to dimmer level 6
  DIMMER_6 = 'dimmer_6!',

  // Set PC-USB Audio class 1.0
  PC_USB_AUDIO_CLASS_1 = 'pcusb_class_1!',

  // Set PC-USB Audio class 2.0
  PC_USB_AUDIO_CLASS_2 = 'pcusb_class_2!',
}

export const OTHER_COMMAND_RESPONSES: { [key in OTHER_COMMANDS]: string } = {
  [OTHER_COMMANDS.DIMMER_TOGGLE]: 'dimmer=#$',
  [OTHER_COMMANDS.DIMMER_0]: 'dimmer=0$',
  [OTHER_COMMANDS.DIMMER_1]: 'dimmer=1$',
  [OTHER_COMMANDS.DIMMER_2]: 'dimmer=2$',
  [OTHER_COMMANDS.DIMMER_3]: 'dimmer=3$',
  [OTHER_COMMANDS.DIMMER_4]: 'dimmer=4$',
  [OTHER_COMMANDS.DIMMER_5]: 'dimmer=5$',
  [OTHER_COMMANDS.DIMMER_6]: 'dimmer=6$',
  [OTHER_COMMANDS.PC_USB_AUDIO_CLASS_1]: 'pcusb_class=1$',
  [OTHER_COMMANDS.PC_USB_AUDIO_CLASS_2]: 'pcusb_class=2$',
};
