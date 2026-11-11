import { Config } from '@remotion/cli/config';
// Usa el Chromium que ya está instalado (sin descargar otro)
Config.setBrowserExecutable('/opt/pw-browsers/chromium');
Config.setVideoImageFormat('png');
Config.setCodec('h264');
Config.setCrf(19);
Config.setPixelFormat('yuv420p');
