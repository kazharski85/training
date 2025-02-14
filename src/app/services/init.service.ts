import { BackendService } from "./backend.service";

export function initBackendFactory(
  backend: BackendService
) {
  return () => {
    console.log('initBackendFactory - started');
    return backend.loadUsers()
  };
}
