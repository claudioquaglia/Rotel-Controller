import { Socket, isIPv4 } from 'net';
import debug, { Debugger } from 'debug';
import { EventEmitter } from 'events';
import { IRotelDeviceConfig } from './RotelDevice.interface';
// import { Commands } from './commands';

class RotelDevice extends EventEmitter {
  // Class Logger
  private readonly debug: Debugger;

  // Device IP port
  private readonly DEVICE_PORT: number = 9590;

  // Device minimum volume
  // @ts-ignore
  private readonly VOLUME_MIN: number = 0;

  // Device maximum volume
  // Setted to 96, 'cause is the max value assignable by IPC
  // @ts-ignore
  private readonly VOLUME_MAX: number = 96;

  // Device host IPv4 address
  private readonly host: string;

  // Connection attempt is running
  // @ts-ignore
  private connecting: boolean = false;

  // Socket is connected to the Amp
  private connected: boolean = false;

  // Current device volume
  private _volume: number = 0;

  // Is device muted
  private _muted: boolean = false;

  // Selected source
  private _source: string = '';

  // Network socket
  private socket: Socket | null = null;

  // @ts-ignore
  private connectTime: number = 0;

  constructor({ host }: IRotelDeviceConfig) {
    super();

    this.debug = debug('RotelDevice');
    this.debug('Initializing Rotel Device...');

    if (!host) throw new Error("Missing device host. It's required.");
    if (!isIPv4(host)) throw new Error('Host should be a valid IPv4 format.');

    this.host = host;

    if (!this.connected) this.connect();
  }

  private openSocketConnection() {
    this.debug('Opening socket connection');
    this.socket = new Socket();
    this.socket.setEncoding('ascii');
    this.socket.setNoDelay(true);

    // Bind events
    this.socket.on('connect', this.connectionOpened.bind(this));
    this.socket.on('close', this.connectionClosed.bind(this));
    this.socket.on('error', this.connectionError.bind(this));
    this.socket.on('end', this.connectionEnded.bind(this));
    this.socket.on('timeout', this.connectionTimeouted.bind(this));
    this.socket.on('data', this.connectionData.bind(this));

    this.connectTime = new Date().getTime();
    this.connecting = true;
    this.connected = false;

    try {
      this.socket.connect(this.DEVICE_PORT, this.host);
    } catch (error) {
      this.emit('error', error.toString());
      this.debug('Fail to connect to Rotel Device due to %s', error.toString());
    }
  }

  private connectionOpened() {
    this.debug('connected');
    this.emit('connected');
    this.connecting = false;
    this.connected = true;
    this.socket!.write('discover?');
  }

  private connectionClosed() {
    this.debug('close');
    this.connecting = false;
    this.connected = false;
  }

  private connectionEnded() {
    this.debug('end');
  }

  private connectionError(error: Error) {
    this.debug('error %o', error);
    this.emit('error %o', error);
  }

  private connectionTimeouted() {
    this.debug('timeout');
  }

  private connectionData(data: any) {
    this.debug('data %o', data);
  }

  /**
   * Enstablish TCP socket connection with device;
   */
  connect() {
    this.emit('connecting');
    this.openSocketConnection();
  }

  /**
   * Close TCP socket connection with device;
   */
  disconnect() {
    this.debug('disconnecting from device');
    if (this.socket && this.connected) {
      this.socket.destroy();
      this.debug('Socket destroied');
    }
  }

  /**
   * Send IPC command to the connected device
   */
  public sendCommand(command: any) {
    if (!this.socket) return;

    this.debug('sending command', command);
    this.socket.write(command);
  }

  public getActiveProperties() {}

  public get volume(): number {
    return this._volume;
  }

  public set volume(value: number) {
    this._volume = value;
  }

  public get source(): string {
    return this._source;
  }

  public set source(value: string) {
    this._source = value;
  }

  public get muted(): boolean {
    return this._muted;
  }

  public set muted(value: boolean) {
    this._muted = value;
  }
}

export default RotelDevice;
