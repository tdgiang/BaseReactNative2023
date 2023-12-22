import { UPDATE_SYSTEM_CONFIG } from "./actionTypes";

export function updateSystemConfig(data) {
  return {
    type: UPDATE_SYSTEM_CONFIG,
    data,
  };
}
