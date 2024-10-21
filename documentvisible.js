import { useSyncExternalStore } from 'react';

function DocumentVisible() {
  const isOnline = useSyncExternalStore(subscribeVisibilityChange, getCurrentVisibilityState);
  return isOnline === 'visible' ? true : false ;
}

function getCurrentVisibilityState() {
  return document.visibilityState;
}

function subscribeVisibilityChange(callback) {
  window.addEventListener("visibilitychange", callback);
  return () => {
    window.removeEventListener("visibilitychange", callback);
  };
}
