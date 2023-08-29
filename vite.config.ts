import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "node:https"
import {readFileSync} from "node:fs"


const options = {
  key: readFileSync("./cert/key.pem"),
  cert : readFileSync("./cert/cert.pem")
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:8000,
    https: options
  }
})
