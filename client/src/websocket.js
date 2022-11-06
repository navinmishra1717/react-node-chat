const host = process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8080';

export let send;

export const startWebsocketConnection = () => {
  const ws = new window.WebSocket('ws://' + host + '/chat') || {};

  ws.onopen = () => {
    console.log('connection opened');
  };

  ws.onclose = (e) => {
    console.log('close ws connection: ', e.code, e.reason);
  };

  ws.onmessage = (e) => {
    onMessageCallback && onMessageCallback(e.data);
  };
  send = ws.send.bind();
};

let onMessageCallback;
export const registerOnMessageCallback = (fn) => {
  onMessageCallback = fn;
};
