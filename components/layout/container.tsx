import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto md:px-5 fade-effect-quick">
      {children}
    </div>
  );
};
export default Container;
