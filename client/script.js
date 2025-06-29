const ws = new WebSocket('wss://remote-control-app.up.railway.app');
const status = document.getElementById('status');

ws.onopen = () => {
  status.textContent = 'Connected';
};

ws.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

ws.onclose = () => {
  status.textContent = 'Disconnected';
};

function sendCommand(command) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ command }));
  } else {
    alert('WebSocket is not connected!');
  }
}
