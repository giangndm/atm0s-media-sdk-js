import type { AnyFunction, StreamKinds } from '../utils/types';
import type { OfferMeta } from './rtsocket';

/**
 * Represents an interface for a RPC (Remote Procedure Call) Handler.
 */
export interface IRPC {
  /**
   * Sends an RPC request with the specified command and data.
   * @param cmd The command to be executed.
   * @param data The data to be sent with the request.
   * @returns A promise that resolves to the response from the RPC server.
   */
  request<T>(
    cmd: keyof RpcRequests,
    data: RpcRequests[typeof cmd],
  ): Promise<RpcResponse<T>>;

  /**
   * Registers an event handler for the specified command.
   * @param cmd The command to listen for.
   * @param handler The event handler function.
   */
  on(cmd: string, handler: AnyFunction): void;

  /**
   * Unregisters the event handler for the specified command.
   * @param cmd The command to stop listening for.
   */
  off(cmd: string): void;
}

export type RpcResponse<T> = {
  status: boolean;
  data: T;
  error?: string;
};

export type RpcRequests = {
  'receiver.limit': {
    id: string;
    priority: number;
    max_spatial: number;
    max_temporal: number;
  };
  'receiver.switch': {
    id: string;
    priority: number;
    remote: { peer: string; stream: string };
  };
  'receiver.disconnect': {
    id: string;
  };

  'peer.updateSdp': OfferMeta;

  'sender.toggle': {
    name: string;
    kind: StreamKinds;
    track: string;
  };
};
