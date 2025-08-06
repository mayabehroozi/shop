'use client';

import { Row, Col, Typography } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

const { Title, Paragraph } = Typography;

interface TextSectionProps {
  leftText: string;
  rightText: string;
}

export default function TextSection({ leftText, rightText }: TextSectionProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);  // بدون once: true

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={controls}
      style={{ padding: '30px 70px', boxSizing: 'border-box' }}
    >
      <Row
        gutter={[24, 24]}
        style={{ height: '100%' }}
        align="middle"
        justify="space-between"
      >
        <Col xs={24} md={10} style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={2} style={{ margin: 0, fontSize: '3rem', color: '#444' }}>
            {leftText}
          </Title>
        </Col>

        <Col xs={24} md={14} style={{ display: 'flex', alignItems: 'center' }}>
          <Paragraph
            style={{
              margin: 0,
              fontSize: '1.4rem',
              color: '#666',
              lineHeight: 1.5,
            }}
          >
            {rightText}
          </Paragraph>
        </Col>
      </Row>
    </motion.div>
  );
}
