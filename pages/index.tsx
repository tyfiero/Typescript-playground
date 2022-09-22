// import Layout from "@/components/layout/layout";
import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

const Index = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>TypeScript Playground</title>
      </Head>
      <div className="fade-effect-quick page-container !items-start">


        
      </div>
    </>
  );
};

export default Index;
