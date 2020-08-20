export default class UserDefaults {
  private isConnected: boolean = false;
  private connectCallback?: (isConnected: boolean) => void;
  private getCallback?: (success: boolean, key: string, value: string|undefined) => void;

  constructor() {
    // If we're in a frame, register listeners for async callbacks
    try {
      if (window && window.parent) {
        window.addEventListener('message', ({ data }) => {
          const { event } = data;
          if (event === 'KojiUserDefaults.Connected') {
            this.isConnected = true;
            if (this.connectCallback) {
              this.connectCallback(this.isConnected);
            }
          }

          if (event === 'KojiUserDefaults.Success') {
            if (this.getCallback) {
              this.getCallback(true, data.key, data.value);
            }
          }

          if (event === 'KojiUserDefaults.Failed') {
            if (this.getCallback) {
              this.getCallback(false, data.key, undefined);
            }
          }
        });
      }
    } catch (err) {}
  }

  // Get a notification when the bridge is connected
  public onConnect(callback: (isConnected: boolean) => void) {
    this.connectCallback = callback;
    if (this.isConnected) {
      callback(this.isConnected);
    }
  }

  // Request a piece of data
  public get(
    key: string,
    callback: (success: boolean, key: string, value: string|undefined) => void,
  ) {
    this.getCallback = callback;
    try {
      if (window && window.parent) {
        window.parent.postMessage({
          _kojiEventName: '@@koji/userDefaults/get',
          key,
        }, '*');
      }
    } catch {}
  }

  // Prompt the user to log in with Koji
  public promptLogin() {
    try {
      if (window && window.parent) {
        window.parent.postMessage({
          _kojiEventName: '@@koji/userDefaults/promptLogin',
        }, '*');
      }
    } catch {}
  }
}
