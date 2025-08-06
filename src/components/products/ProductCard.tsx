
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/utils/formatPrice';

interface ProductCardProps {
  title: string;
  subtitle?: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
  slug: string;
}

const ProductCard = ({
  title,
  subtitle,
  price,
  imageUrl,
  hoverImageUrl,
  slug,
}: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      title,
      subtitle: subtitle ?? '',
      price,
      imageUrl,
      hoverImageUrl: hoverImageUrl ?? '',  // حتما مقدار بدید
      slug,
    });
  };

  return (
    <div className={styles.card}>
      <Link href={`/products/${slug}`}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={title}
            width={460}
            height={460}
            className={`${styles.image} ${styles.mainImage}`}
          />
          {hoverImageUrl && (
            <Image
              src={hoverImageUrl}
              alt={`${title} hover`}
              width={460}
              height={460}
              className={`${styles.image} ${styles.hoverImage}`}
            />
          )}
        </div>
      </Link>

      <div className={styles.info}>
        <Link href={`/products/${slug}`} className={styles.titleLink}>
          <h3>{title}</h3>
        </Link>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <span className={styles.price}>{formatPrice(price)}</span>
      </div>

      <button
        className={styles.addToCartButton}
        type="button"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
