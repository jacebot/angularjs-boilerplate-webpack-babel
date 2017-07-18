export const SYNC = 'SYNC';
export const COMPLETE_SYNC = 'COMPLETE_SYNC';

const initialState = {
  enabled: true,
  isSyncing: false,
  lastUpdate: 0,
  lastSync: 0,
};

export function sync (timestamp) {
  return {
    type: SYNC,
    timestamp,
  };
}

export function completeSync (timestamp) {
  return {
    type: COMPLETE_SYNC,
    timestamp,
  };
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
        isSyncing: true,
        lastUpdate: action.timestamp,
      };
    case COMPLETE_SYNC:
      return {
        ...state,
        isSyncing: false,
        lastSync: action.timestamp,
      };
    default:
      return state;
  }
}
