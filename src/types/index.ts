export interface ProblemStatement {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  deliverables: string[];
  evaluationCriteria: string[];
}

export interface Domain {
  id: string;
  title: string;
  shortDescription: string;
  color: string;
  problemStatements: ProblemStatement[];
}

export interface TimelineEvent {
  id: number;
  event: string;
  date: string;
  description: string;
}

export interface Prize {
  rank: string;
  amount: string;
  icon: string;
  highlight: boolean;
}

export interface Sponsor {
  name: string;
  tier: 'platinum' | 'gold' | 'silver';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ResultTeam {
  teamName: string;
  members: string[];
  project: string;
  institution: string;
}

export interface SpecialMention {
  teamName: string;
  project: string;
  award: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  registrationUrl: string;
  contactEmail: string;
  contactPhone: string;        // ← add this line
  socialLinks: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  
  stats: StatItem[];
  timeline: TimelineEvent[];
  prizes: Prize[];
  additionalBenefits: string[];
  sponsors: Sponsor[];
  faq: FaqItem[];
  resultsAnnounced: boolean;
  results: {
    winner: ResultTeam;
    runnerUp: ResultTeam;
    secondRunnerUp: ResultTeam;
    specialMentions: SpecialMention[];
  };
}