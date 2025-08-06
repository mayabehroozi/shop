
'use client';

import { Layout, Menu, Space, Drawer, Button } from 'antd';
import {
  ShoppingOutlined,
  UserOutlined,
  SearchOutlined,
  EnvironmentOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import { Badge } from 'antd';
import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'next/navigation';


const navItems = [
  { label: 'Parfums', href: '/parfums' },
  { label: 'Personnalisation', href: '/personnalisation' },
  { label: 'Maison', href: '/maison' },
  { label: 'Art de vivre', href: '/art-de-vivre' },
  { label: 'L’Atelier Parfum', href: '/atelier-parfum' },
  { label: 'Le Journal', href: '/journal' },
  { label: 'Services', href: '/services' },
];

// تبدیل navItems به فرمت مورد نیاز Ant Design
const menuItems = navItems.map((item) => ({
  key: item.href,
  label: <Link href={item.href}>{item.label}</Link>,
}));

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);
  const router = useRouter();

  return (
    <Layout.Header className={styles.header}>
      {/* لوگو سمت چپ */}
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="66"
            viewBox="0 0 66 66"
            className={styles.logoSvg}
          >
            <g fill="#AC9270" fillRule="evenodd">
              <path d="M65.895 0v65.896H0V0h65.895zm-.752.753H.753v64.39h64.39V.753zM14.117 11.145l14.781 19.039V13.843h-8.102v-2.698h10.807l-.004 43.613h-2.7V32.23L15.157 54.741H7.865l14.82-24.327-14.78-19.269h6.212zm30.991 0v2.698h-8.103v16.342L51.8 11.145h6.21L43.22 30.414l14.805 24.327h-7.32l-13.7-22.46v22.477h-2.701l-.001-43.613h10.805z" />
            </g>
          </svg>
        </Link>
      </div>

      {/* منوی دسکتاپ */}
      <Menu
        mode="horizontal"
        theme="light"
        className={styles.menu}
        selectable={false}
        items={menuItems}
      />

      {/* آیکن‌ها و منوی موبایل */}
      <div className={styles.right}>
        <Space size="large">
          <SearchOutlined className={`${styles.icon} ${styles.hideOnMobile}`} />
          <EnvironmentOutlined className={`${styles.icon} ${styles.hideOnMobile}`} />
          <UserOutlined className={`${styles.icon} ${styles.hideOnMobile}`} />
          <Badge count={cartItems.length} size="small">
            <ShoppingOutlined
              className={styles.icon}
              onClick={() => router.push('/cart')}
              style={{ cursor: 'pointer' }}
            />
          </Badge>

          <Button
            className={styles.menuButton}
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            type="text"
          />
        </Space>
      </div>

      {/* Drawer برای موبایل */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="vertical"
          selectable={false}
          items={menuItems.map((item) => ({
            ...item,
            onClick: () => setOpen(false),
          }))}
        />
      </Drawer>
    </Layout.Header>
  );
};

export default SiteHeader;
