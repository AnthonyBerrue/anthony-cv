export interface Profile {
    network: string;
    url: string;
}

export interface Basics {
    name: string;
    label: string;
    location: string;
    email: string;
    profiles?: Profile[];
    summary?: string;
}

export interface Skill {
    name: string;
    keywords: string[];
}

export interface Project {
    name: string;
    summary: string;
    url?: string;
}

export interface Experience {
    name: string;
    position?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
}

export interface Education {
    name?: string;
    institution?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
}

export interface Resume {
    basics: Basics;
    skills: Skill[];
    projects: Project[];
    experience?: Experience[];
    education?: Education[];
}
