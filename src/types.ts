export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Pizza' | 'Drinks' | 'Specials';
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
