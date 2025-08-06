'use client';

import Image from 'next/image';
import styles from './PromoBlock.module.css';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

interface PromoBlockProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkLabel?: string;
}

export default function PromoBlock({
  imageUrl,
  title,
  description,
  linkUrl,
  linkLabel = 'DISCOVER',
}: PromoBlockProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } });
    } else {
      controls.start({ opacity: 0, y: 60 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={styles.promoWrapper}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      <div className={styles.imageContainer}>
        <Link href={linkUrl}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={styles.image}
            sizes="100vw"
          />
        </Link>
      </div>

      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Link href={linkUrl} className={styles.link}>
          {linkLabel}
        </Link>
      </div>
    </motion.div>
  );
}
