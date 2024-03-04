import HeaderComponent from '@/components/common/HeaderComponent';
import Link from 'next/link';
import React from 'react';

const About = (): JSX.Element => {
  return (
    <>
      <HeaderComponent rightElements={[
        <Link key={`feedback`} href="/feedback">피드백</Link>,
        <Link key={`about`} href="/about">서비스 소개</Link>
      ]}/>
      <main>서비스 소개입니다.</main>
    </>
  );
};

export default About;
