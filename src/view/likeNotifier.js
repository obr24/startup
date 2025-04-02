const LikeEvent = {
    System: 'system',
    NewLike: 'newLike',
};

class EventMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class LikeEventNotifier {
    events = [];
    handlers = [];

    constructor() {
        console.log("in constructor");
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        console.log("in constructor1");
        this.socket.onopen = (event) => {
            console.log("in constructor2");
            try {
            this.receiveEvent(new EventMessage('Recipe', LikeEvent.System, { msg: 'connected' }));
            } catch (error) {
                console.log("herrre error: ", error);
            }
        };
        this.socket.onclose = (event) => {
            console.log("in constructor2");
            try {
            this.receiveEvent(new EventMessage('Recipe', LikeEvent.System, { msg: 'disconnected' }));
            } catch (error) {
                console.log("errror: ", error);
            }
        };
        this.socket.onmessage = async (msg) => {
            console.log("in constructor3");
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch (error) {
                console.log("error heree: ", error);
            }
        };
    }

    broadcastEvent(from, type) {
        const event = new EventMessage(from, type);
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.events.push(event);

        this.events.forEach((e) => {
            this.handlers.forEach((handler) => {
                handler(e);
            });
        });
    }
}

const LikeNotifier = new LikeEventNotifier();
export { LikeEvent, LikeNotifier };
// export { LikeEvent, LikeEventNotifier };