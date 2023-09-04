export interface Iproduct {
  id: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
  CategoryID: number;
  CreatedDate: Date;
  selectedQuantity: number;
  Descriptions?: string;
}
