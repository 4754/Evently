import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import { OurFileRouter, ourFileRouter } from "@/app/api/uploadthing/core";
 
// Export routes for Next App Router
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();