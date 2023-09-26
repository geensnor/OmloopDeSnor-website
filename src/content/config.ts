// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const editiesCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: z.object({
    naam: z.string(),
    datum: z.string().length(10),
    start: z.string(),
    afstand: z.number(),
    hoogtemeters: z.number(),
    deelnemers: z.number(),
    fotoFilename: z.string(),
    routeTitle: z.string().optional(),
    routeURL: z.string().url().optional(),
    gpxFile: z.string().optional(),
    aftermovieURL: z.string().url().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  edities: editiesCollection,
};
