import Image from 'next/image';
import ProductStatus from '@/app/ui/products/status';
import { formatCurrency } from '@/app/lib/utils';
import { fetchFilteredProducts } from '@/app/lib/data';
import Card from '@/app/ui/products/card';
import { Product } from '@/app/lib/definitions';
import AddToCartBtn from "@/app/ui/products/buttons/AddToCartBtn";

export default async function Tile({
  query,
  currentPage,
  sort,
}: {
  query: string;
  currentPage: number;
  sort: boolean;
}) {
  const products: Product[] = await fetchFilteredProducts(query, currentPage, sort);

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <Card key={product.id}>
          <div className="p-4 relative">
            {/* Product Image */}
            <div className="w-full">
              <Image
                src={`${process.env.IMAGES_BASE_URL}/watch.png?id=${product.id}&q=95&w=360&h=360`}
                className="rounded-t-xl"
                width={360}
                height={360}
                alt={`${product.title}'s product`}
              />
            </div>
            {/* Product Name */}
            <div className="mt-4">
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
            {/* Price and Rating */}
            <div className="mt-4">
              <p className="text-xl font-bold">{formatCurrency(product.price)}</p>
              <p className="text-sm text-gray-500">
                Rating: {product.rating}
              </p>
            </div>
            {/* Status */}
            <div className="mt-4">
              <ProductStatus id={product.id} />
            </div>
            {/* Cart Button */}
            <div className="absolute right-0 top-0">
              <AddToCartBtn id={product.id} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
