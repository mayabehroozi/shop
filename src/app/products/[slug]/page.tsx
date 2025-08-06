import { notFound } from 'next/navigation';
import { products, additionalProducts, additionalProduct2 } from '@/data/products';
import Image from 'next/image';
import { formatPrice } from '@/utils/formatPrice';
import { Card } from 'antd';
import styles from './ProductPage.module.css';
import SiteHeader from '@/components/layout/Header';
import AddToCartClient from './AddToCartClient';
import { Product } from '@/types/product';


export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params; // 🛠 این خط مشکل رو حل می‌کنه
  const allProducts: Product[] = [...products, ...additionalProducts, ...additionalProduct2];
  const product = allProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) return notFound();

  return (
    <>
      <SiteHeader />
      <div className={styles.pageWrapper}>
        <Card className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={400}
                height={400}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>

            <div className={styles.infoBox}>
              <h1>{product.title}</h1>
              <p>{product.subtitle}</p>
              <p className={styles.price}>{formatPrice(product.price)}</p>
              <p>{product.description || 'No description available.'}</p>
              <AddToCartClient product={product} />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
