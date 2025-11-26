/* eslint-disable prettier/prettier */
import { Apps } from "@vtex/api";

export interface AppSettings {
  appKeyExample: string
  appTokenExample: string
}

export async function getAppSettings(ctx: Context) {
    const apps = new Apps(ctx.vtex)
    
    const settings =(await apps.getAppSettings(
        process.env.VTEX_APP_ID ||''
    )) as Promise<AppSettings>
    
    return settings
}