chrome.runtime.onInstalled.addListener( () => {
  chrome.storage.sync.set({ isOn: true }, () => {
    console.log('This extension is on.');
  });
})
