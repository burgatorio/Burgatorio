export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  isSpicy: boolean;
  image: string;
  available?: boolean;
}
