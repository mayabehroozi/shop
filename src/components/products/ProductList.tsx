import { Row, Col } from 'antd';
import {products} from '@/data/products';
import ProductCard from './ProductCard';


<Row gutter={[16, 16]}>
  {products.map((p) => (
    <Col key={p.slug} xs={24} sm={12} md={8}>
      <ProductCard
        title={p.title}
        subtitle={p.subtitle}
        price={p.price}
        imageUrl={p.imageUrl}
        hoverImageUrl={p.hoverImageUrl}
        slug={p.slug}
      />
    </Col>
  ))}
</Row>
