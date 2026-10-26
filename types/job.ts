export interface JobCultureItem {
  title: string;
  description: string;
}

export interface Job {
  slug: string;
  title: string;
  jobId: string;
  location: string;
  type: string;
  experience: string;
  excerpt: string;
  whoWeAre: string[];
  we: string[];
  you: string[];
  culture: JobCultureItem[];
  responsibilities: string[];
  qualificationsTitle: string;
  qualifications: string[];
}
