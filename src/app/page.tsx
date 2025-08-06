// app/page.tsx

import { Layout } from 'antd';
import SiteHeader from '@/components/layout/Header';
import SiteFooter from '@/components/layout/Footer';
import HomeSlider from '@/components/layout/HeaderSlider/HomeSlider';
import ProductCard from '@/components/products/ProductCard';
import {products,additionalProducts,additionalProduct2} from '@/data/products'
import PromoBlock from '@/components/blocks/PromoBlock'
import TextSection from '@/components/blocks/TextSection';
import Card2 from '@/components/cart2';
import ImageStrip from '@/components/gallery/ImageStrip'



export default function HomePage() {
  return (
    <Layout>
      <SiteHeader />
      <HomeSlider />

      <div style={{ width:'85%'}} className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            imageUrl={product.imageUrl}
            hoverImageUrl={product.hoverImageUrl}
            slug={product.slug}
          />
        ))}
      </div>
       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' ,padding:"30px"}}>
      <PromoBlock
        imageUrl='/images/block2.jpg'
        title="Gravure offerte"
        description="Maison Francis Kurkdjian a le plaisir de vous offrir la gravure pour l'achat d'un parfum Gentle Fluidity jusqu'au mercredi 6 août inclus."
        linkUrl="/engraving"
      />
      <PromoBlock
        imageUrl='/images/block1.jpg'
        title="Services Exclusifs"
        description="Découvrez nos services en ligne exclusifs, pensés pour une expérience sur-mesure. Maison Francis Kurkdjian a le plaisir de vous offrir un cadeau de votre choix parmi notre sélection."
        linkUrl="/new-arrivals"
      />
    </div>
     <TextSection 
      leftText="Coffrets Découvertes"
      rightText="Plongez dans l'univers Maison Francis Kurkdjian grâce aux collections découvertes. Une parfaite idée cadeau à s'offrir ou à offrir pour s'initier aux parfums de Maison Francis Kurkdjian."
    />
    <div style={{ width: '85%', margin: '0 auto', padding: '20px 0' }} className="product-grid">
  {additionalProducts.map((product, index) => (
    <ProductCard
      key={`extra-${index}`}
      title={product.title}
      subtitle={product.subtitle}
      price={product.price}
      imageUrl={product.imageUrl}
      hoverImageUrl={product.hoverImageUrl}
      slug={product.slug}
    />
  ))}
</div>
 <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' ,padding:"30px"}}>
      <PromoBlock
        imageUrl='/images/block5.jpg'
        title="Gravure offerte"
        description="Maison Francis Kurkdjian a le plaisir de vous offrir la gravure pour l'achat d'un parfum Gentle Fluidity jusqu'au mercredi 6 août inclus."
        linkUrl="/engraving"
      />
      <PromoBlock
        imageUrl='/images/block4.jpg'
        title="Services Exclusifs"
        description="Découvrez nos services en ligne exclusifs, pensés pour une expérience sur-mesure. Maison Francis Kurkdjian a le plaisir de vous offrir un cadeau de votre choix parmi notre sélection."
        linkUrl="/new-arrivals"
      />
    </div>
     <TextSection 
      leftText="Notre sélection"
      rightText="Affirmez votre personnalité en choisissant une ou plusieurs pièces emblématiques du vestiaire olfactif de la Maison."
    />
      <div style={{ width: '85%', margin: '0 auto', padding: '20px 0' }} className="product-grid">
  {additionalProduct2.map((product, index) => (
    <ProductCard
      key={`extra-${index}`}
      title={product.title}
      subtitle={product.subtitle}
      price={product.price}
      imageUrl={product.imageUrl}
      hoverImageUrl={product.hoverImageUrl}
      slug={product.slug}
    />
  ))}
</div>
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' ,padding:"30px"}}>
      <PromoBlock
        imageUrl='/images/block6.jpg'
        title="Gravure offerte"
        description="Maison Francis Kurkdjian a le plaisir de vous offrir la gravure pour l'achat d'un parfum Gentle Fluidity jusqu'au mercredi 6 août inclus."
        linkUrl="/engraving"
      />
      <PromoBlock
        imageUrl='/images/block8.jpg'
        title="Services Exclusifs"
        description="Découvrez nos services en ligne exclusifs, pensés pour une expérience sur-mesure. Maison Francis Kurkdjian a le plaisir de vous offrir un cadeau de votre choix parmi notre sélection."
        linkUrl="/new-arrivals"
      />
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' ,padding:"30px"}}>
      <Card2
  imageUrl="/images/cart2-1.jpg"
  title="Découverte Collection"
  description="Explorez la sélection exclusive de parfums en édition limitée pour cette saison."
  linkUrl="/collection/decouverte"
/>
      <Card2
  imageUrl="/images/cart2-2.jpg"
  title="Découverte Collection"
  description="Explorez la sélection exclusive de parfums en édition limitée pour cette saison."
  linkUrl="/collection/decouverte"
/>
      <Card2
  imageUrl="/images/cart2-3.jpg"
  title="Découverte Collection"
  description="Explorez la sélection exclusive de parfums en édition limitée pour cette saison."
  linkUrl="/collection/decouverte"
/>


    </div>
    <div className="responsivePadding">
  <ImageStrip/>
</div>
     <SiteFooter/>
    </Layout>
  );
}
