/* Import plugin types */
import type { MomentTimezone } from "moment-timezone"
import type { PrepareMetaProps, Meta } from "./Utils/prepareMeta"

/* Declare modules */
declare module "vue/types/vue" {
  interface Vue {
    $getReadableDate(date: Date): string
    $getReadingTime(words: string, wpm?: number): string
    $prepareMeta(
      { title, description, url, image, keywords }: PrepareMetaProps,
      rest?: any[]
    ): Meta[]
    $momentTz: MomentTimezone
    $getTurkeyTime(): Date
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $getReadableDate(date: Date): string
    $getReadingTime(words: string, wpm?: number): string
    $prepareMeta(
      { title, description, url, image, keywords }: PrepareMetaProps,
      rest?: any[]
    ): Meta[]
    $momentTz: MomentTimezone
    $getTurkeyTime(): Date
  }

  interface Context {
    $getReadableDate(date: Date): string
    $getReadingTime(words: string, wpm?: number): string
    $prepareMeta(
      { title, description, url, image, keywords }: PrepareMetaProps,
      rest?: any[]
    ): Meta[]
    $momentTz: MomentTimezone
    $getTurkeyTime(): Date
  }
}
