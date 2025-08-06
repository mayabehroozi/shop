'use client';

import { Button, message } from 'antd';
import { useCartStore } from '@/store/cartStore';
import styles from './ProductPage.module.css';

export default function AddToCartClient({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    message.success(`${product.title} added to cart!`);
  };

  return (
    <Button
      type="primary"
      className={styles.addToCartButton}
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
}
