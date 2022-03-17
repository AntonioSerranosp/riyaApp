import { Card } from "antd";
interface CardProductProps {
  name: string;
  id?: string;
  price: number;
  category: string;
  description: string;
  src: string;
}
export const CardProduct = ({
  name,
  id,
  price,
  category,
  description,
  src,
}: CardProductProps) => {
  return (
    <Card
      hoverable
      className="card-product"
      cover={<img alt="example" src={src} />}
    >
      <div className="card-name">{name}</div>
      <div className="card-name">{description}</div>
      <div className="card-price">{price}</div>
    </Card>
  );
};
