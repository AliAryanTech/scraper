import { z } from 'zod'

export const GempaBaseSchema = z.object({
    date: z.string(),
    time: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    magnitude: z.string(),
    depth: z.string()
})
export const GempaSchema = z.array(z.object({
    location: z.string(),
    warning: z.array(z.string())
}).merge(GempaBaseSchema))
export const GempaNowSchema = z.array(z.object({
    location: z.string(),
}).merge(GempaBaseSchema))
export const GempaRealtimeSchema = z.array(z.object({
    location: z.array(z.string()),
    isConfirmed: z.boolean()
}).merge(GempaBaseSchema))
export type Gempa = z.infer<typeof GempaSchema>
export type GempaNow = z.infer<typeof GempaNowSchema>
export type GempaRealtime = z.infer<typeof GempaRealtimeSchema>