import { StreamReceiver } from './receiver';
import { StreamSender } from './sender';
import { StreamKinds } from './utils/types';
import { TypedEventEmitter } from './utils/typed-event-emitter';
import type { IMediaGatewayConnector } from './interfaces/gateway';
import type { IRealtimeSocket } from './interfaces/rtsocket';
import type { ISessionCallbacks, ISessionConfig } from './interfaces/session';
import { StreamRemote } from './remote';
import type { IStreamSender, SenderConfig } from './interfaces/sender';
import type { IStreamReceiver } from './interfaces';
import { StreamPublisher } from './publisher';
import { StreamConsumer } from './consumer';
export declare class Session extends TypedEventEmitter<ISessionCallbacks> {
    private _cfg;
    private _socket;
    private _connector;
    private _audioSenders;
    private _videoSenders;
    private _audioReceivers;
    private _videoReceivers;
    private _remotes;
    private logger;
    private _rpc;
    constructor(_cfg: ISessionConfig, _socket: IRealtimeSocket, _connector: IMediaGatewayConnector);
    connect(): Promise<void>;
    createPublisher(cfg: SenderConfig): StreamPublisher;
    createConsumer(remote: StreamRemote): StreamConsumer;
    createSender(cfg: SenderConfig): StreamSender;
    createReceiver(kind: StreamKinds): StreamReceiver;
    takeReceiver(kind: StreamKinds): IStreamReceiver;
    backReceiver(receiver: IStreamReceiver): void;
    getSender(name: string, kind: StreamKinds): IStreamSender;
    private update;
    private updateSdp;
    private onStreamEvent;
}
//# sourceMappingURL=session.d.ts.map