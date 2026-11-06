import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, INQUIRY_TOPICS_QUERY } from "@/sanity/queries";
import type { PageCopy, InquiryTopic } from "@/sanity/types";

export async function getContactPage() {
  const [pageCopy, inquiryTopics] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<InquiryTopic[]>(INQUIRY_TOPICS_QUERY),
  ]);
  return { pageCopy, inquiryTopics };
}