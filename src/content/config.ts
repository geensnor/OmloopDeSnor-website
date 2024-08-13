
import { z, defineCollection } from "astro:content";

const editiesCollection = defineCollection({
  type: "data",
  schema: z.object({
    naam: z.string().describe("Naam van de editie"),
    datum: z.string().length(10).describe("Startdatum van de editie"),
    start: z.string().describe("Startplaats van de editie"),
    afstand: z.number().describe("Afgelegde afstand in kilometers"),
    hoogtemeters: z.number().describe("Hoogtemeters"),
    deelnemers: z.number().describe("Aantal deelnemers die zijn gestart"),
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
