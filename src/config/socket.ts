/* eslint-disable @typescript-eslint/no-explicit-any */
import { io, Socket } from 'socket.io-client';

const uri = import.meta.env.VITE_APP_BASE_URL;

const SocketIO: Socket = io(uri, {
  autoConnect: false,
  auth: { token: 'TOKEN' },
});

type SocketEventType = 'connect' | 'disconnect' | 'reconnect';
type CallbackSocket = (...args: any[]) => void;

const socket = {
  ...SocketIO,
  open: () => SocketIO.open(),
  close: () => SocketIO.close(),
  on: (event: SocketEventType, cb: CallbackSocket) => SocketIO.on(event, cb),
  off: (event: SocketEventType, cb: CallbackSocket) => SocketIO.off(event, cb),
  once: (event: SocketEventType, cb: CallbackSocket) => SocketIO.once(event, cb),
  emit: (event: SocketEventType, ...args: any[]) => SocketIO.emit(event, ...args),
};

export default socket;
