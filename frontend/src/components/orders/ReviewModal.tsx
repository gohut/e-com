import { useState, useRef } from 'react';
import Image from 'next/image';
import { Order } from '@/data/orders';
import StarRating from './StarRating';
import styles from './ReviewModal.module.scss';

interface Props {
  order: Order;
  onClose: () => void;
}

export default function ReviewModal({ order, onClose }: Props) {
  const { item } = order;
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">×</button>
          <h2 className={styles.title}>WRITE REVIEW</h2>
        </div>

        {/* Banner */}
        <div className={styles.banner}>
          <span>🎁</span>
          <p className={styles.bannerText}>Write review and earn your reward worth ₹2000</p>
        </div>

        <div className={styles.content}>
          {/* Product Info */}
          <div className={styles.productInfo}>
            <div className={styles.imageWrap}>
              <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div className={styles.productDetails}>
              <p className={styles.productTitle}>{item.name}</p>
              <div className={styles.stars}>
                <StarRating value={item.rating ?? 0} readonly={false} />
              </div>
            </div>
          </div>

          {/* Textarea */}
          <textarea 
            className={styles.reviewInput} 
            placeholder="Please write product review here."
          ></textarea>

          {/* File Upload Block */}
          <div>
            <div className={styles.uploadWrap}>
              <button type="button" className={styles.uploadLabel} onClick={triggerFileSelect}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  <path d="M12 12v6" />
                  <path d="m9 15 3-3 3 3" />
                </svg>
              </button>
              <button type="button" className={styles.addPhotosBtn} onClick={triggerFileSelect}>
                Add Photos
              </button>
              <input 
                type="file" 
                multiple 
                accept="image/*,video/*" 
                className={styles.hiddenInput} 
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            {files.length > 0 && (
              <div className={styles.previewFiles}>
                {files.map((file, i) => (
                  <span key={i} className={styles.previewItem}>{file.name}</span>
                ))}
              </div>
            )}
          </div>

          {/* Disclaimer & Submit */}
          <p className={styles.disclaimer}>
            By submitting review you give us consent to publish and process personal information in accordance with <strong>Terms of use</strong> and <strong>Privacy Policy</strong>
          </p>

          <button className={styles.submitBtn} onClick={onClose}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
