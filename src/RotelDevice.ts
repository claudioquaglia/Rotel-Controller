import net from 'net';
import debug from 'debug';
import { EventEmitter } from 'events';
import { RotelDeviceConfigInterface, Sources } from './RotelDevice.interface';

class RotelDevice extends EventEmitter {
  // Device minimum volume
  // @ts-ignore
  private readonly VOLUME_MIN: number = 0;

  // Device IP port
  private readonly DEVICE_PORT: number = 9590;

  // Device maximum volume
  // @ts-ignore
  private readonly VOLUME_MAX: number = 99;

  // Connection attempt is running
  // @ts-ignore
  private connecting: boolean = false;

  // Socket is connected to the Amp
  // @ts-ignore
  private connected: boolean = false;

  // Current device volume
  // @ts-ignore
  private volume: number = 0;

  // Is device muted
  // @ts-ignore
  private muted: boolean = false;

  // Selected source
  // @ts-ignore
  private source: Sources = Sources.opt;

  // Device is turned ON
  // @ts-ignore
  private power: boolean = false;

  // Device host IPv4 address
  private host: string;

  // Network socket
  // @ts-ignore
  private socket: net.Socket;

  // @ts-ignore
  private connectTime: number;

  constructor({ host }: RotelDeviceConfigInterface) {
    super();

    debug('Initializing Rotel Device');

    if (!host) throw new Error("Missing device host. It's required.");

    this.host = host;

    if (!this.connected) this.connect();
  }

  private openSocketConnection() {
    this.socket = new net.Socket();
    this.socket.setEncoding('ascii');
    this.socket.setNoDelay(true);

    // Bind events
    this.socket.on('open', this.connectionOpened);
    this.socket.on('close', this.connectionClosed);
    this.socket.on('error', this.connectionError);
    this.socket.on('end', this.connectionEnded);
    this.socket.on('timeout', this.connectionTimeouted);
    this.socket.on('data', this.connectionData);

    this.connectTime = new Date().getTime();
    this.connecting = true;
    this.connected = false;

    try {
      this.socket.connect(this.DEVICE_PORT, this.host);
    } catch (error) {
      this.emit('error', error.toString());
    }
  }

  private connectionOpened() {
    debug('connected');
  }

  private connectionClosed() {
    debug('close');
  }

  private connectionEnded() {
    debug('end');
  }

  private connectionError() {
    debug('error');
  }

  private connectionTimeouted() {
    debug('timeout');
  }

  private connectionData(data: string) {
    debug('data');
    console.log('data', data);
  }

  /**
   * Enstablish TCP socket connection with device;
   */
  connect() {
    this.emit('connecting');
    this.openSocketConnection();
  }
}

export default RotelDevice;
