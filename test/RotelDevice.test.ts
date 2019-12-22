import net, { isIPv4 } from 'net';
import { RotelDevice } from '../src/lib';
import Mitm from 'mitm';

let mitm: any;

describe('Rotel Device', () => {
  beforeAll(() => {
    mitm = Mitm();
  });

  afterAll(() => {
    mitm.disable();
  });

  it('should throw an error if invalid IPv4 is provided', () => {
    const invalidIP = '127.0.0.259';
    const device = new RotelDevice({ host: invalidIP });

    expect(isIPv4(invalidIP)).toBeFalsy();
    expect(device).toThrow(Error);
  });

  it('should connect', () => {
    // Mock expected response
    mitm.on('connection', (socket: net.Socket) => socket.write('Hello'));

    const invalidIP = '127.0.0.1';
    const device = new RotelDevice({ host: invalidIP });

    expect(isIPv4(invalidIP)).toBeTruthy();
    expect(device).toBeInstanceOf(RotelDevice);
  });
});
