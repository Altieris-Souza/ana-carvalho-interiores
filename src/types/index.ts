export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  location: string;
  mainImage: string;
  images: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  instagram: string;
}