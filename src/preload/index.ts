import { contextBridge } from 'electron'

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('context', {
      locale: navigator.language
    })
  } catch (error) {
    console.error(error)
  }
} else {
  throw new Error('contextIsolation must be enabled in BrowserWindow')
}
