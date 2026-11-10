import { cache } from "react";
import { getSiteSettings } from "./getSiteSettings";

export const getLegalPage = cache(async (slug: string) => {
  const settings = await getSiteSettings();
  
  const page = {
    title: slug === "privacy" ? "Privacy Policy" : "Terms & Conditions",
    note: slug === "privacy" ? settings.privacyNote : settings.termsNote,
    body: slug === "privacy" ? settings.privacyBody : settings.termsBody,
  };

  return { page, pageCopy: settings };
});