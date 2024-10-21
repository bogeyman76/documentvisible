import { useSyncExternalStore } from 'react';

function DocumentVisible(): boolean {
  const isOnline = useSyncExternalStore(subscribeVisibilityChange, getCurrentVisibilityState);
  return isOnline === 'visible';
}

function getCurrentVisibilityState(): VisibilityState {
  return document.visibilityState;
}

function subscribeVisibilityChange(callback: () => void): () => void {
  window.addEventListener("visibilitychange", callback);
  return () => {
    window.removeEventListener("visibilitychange", callback);
  };
}

export default DocumentVisible;
