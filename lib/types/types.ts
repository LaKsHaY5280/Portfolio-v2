interface Sanitybody {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends Sanitybody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Experience extends Sanitybody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Technology extends Sanitybody {
  _type: "technology";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends Sanitybody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends Sanitybody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  deployedlink: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends Sanitybody {
  _type: "social";
  title: string;
  url: string;
}
