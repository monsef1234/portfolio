import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECTID,
  dataset: "production",
  apiVersion: "2022-03-25", // use current UTC date - see "specifying API version"!
  token: import.meta.env.VITE_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
