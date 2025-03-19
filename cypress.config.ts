import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: "mnkigr",
    baseUrl: 'http://localhost:5173',
  },
})