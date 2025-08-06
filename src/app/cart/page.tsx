'use client';

import { useCartStore } from '@/store/cartStore';
import { Button, Card } from 'antd';
import Image from 'next/image';
import SiteHeader from '@/components/layout/Header';
import styles from './CartPage.module.css';
import { formatPrice } from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
  const router = useRouter();

  const handleCheckout = () => {
    alert('Proceed to checkout');
  };

  const handleContinueShopping = () => {
    router.push('/'); // ✅ صفحه اصلی
  };

  return (
    <div className={styles.cartPage}>
      <SiteHeader />
      <div className={styles.container}>
        <h2 className={styles.title}>Your Shopping Bag</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.cartList}>
              {cartItems.map((item, index) => (
                <Card className={styles.card} key={index}>
                  <div className={styles.cardContent}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    <div className={styles.details}>
                      <h3>{item.title}</h3>
                      <p className={styles.subtitle}>Eau de parfum, 200ml</p>
                      <div className={styles.loyalty}>Earn <span>330</span> loyalty points</div>
                    </div>

                    <div className={styles.quantityPrice}>
                      <div className={styles.quantityControls}>
                        <Button onClick={() => decreaseQuantity(item.title)}>-</Button>
                        <span>{item.quantity}</span>
                        <Button onClick={() => increaseQuantity(item.title)}>+</Button>
                      </div>
                      <div className={styles.price}>
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      <Button
                        type="default"
                        onClick={() => removeFromCart(item.title)}
                        className={styles.removeBtn}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* دکمه‌ها خارج از لیست */}
            <div className={styles.actions}>
              <Button
                onClick={handleContinueShopping}
                style={{
                  backgroundColor: '#fff',
                  color: '#535359',
                  border: '1px solid #535359',
                }}
                size="large"
              >
                Continue Shopping
              </Button>

              <Button
                onClick={handleCheckout}
                style={{
                  backgroundColor: '#535359',
                  color: '#fff',
                  border: 'none',
                }}
                size="large"
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
