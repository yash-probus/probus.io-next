import { Job } from "@/types/job";
import jobsData from "@/content/jobs.json";

export function getAllJobs(): Job[] {
  return jobsData as Job[];
}

export function getJobBySlug(slug: string): Job | undefined {
  return (jobsData as Job[]).find((job) => job.slug === slug);
}
