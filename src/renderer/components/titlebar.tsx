import './titlebar.css';

function Titlebar() {
  return (
    <div className="title-bar">
      <div className="title-bar-text">DMHLPR</div>
      <div className="title-bar-controls">
        <button
          type="button"
          aria-label="Minimize"
          onClick={() => {
            window.electron.ipcRenderer.sendMessage('minimizeApp');
          }}
        />
        <button
          type="button"
          aria-label="Maximize"
          onClick={() => {
            window.electron.ipcRenderer.sendMessage('maximizeApp');
          }}
        />
        <button
          type="button"
          aria-label="Close"
          onClick={() => {
            window.electron.ipcRenderer.sendMessage('closeApp');
          }}
        />
      </div>
    </div>
  );
}

export default Titlebar;
