import React from "react";

type props = {
     children: React.ReactNode;
};

const index = ({ children }: props) => {
     return <div>{children}</div>;
};

export default index;
