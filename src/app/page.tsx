'use client';
import HeaderComponent from '@/components/common/HeaderComponent';
import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import { SlMap } from 'react-icons/sl';
import { RiCustomerService2Line, RiFeedbackLine } from 'react-icons/ri';

export default function Home() {
  return (
    <>
      <HeaderComponent
        rightElements={[
          <button
            key="share"
            className={styles.box}
            onClick={() => {
              alert(`지도공유`);
            }}
          >
            <SlMap />
          </button>,
          <Link key="feedback" href="/feedback" className={styles.box}>
            <RiFeedbackLine />
          </Link>,
          <Link key="about" href="/about" className={styles.box}>
            <RiCustomerService2Line />
          </Link>,
        ]}
      />
      <main>테스트</main>
    </>
  );
}
