import React, { createContext, useState } from "react";

export type page = {
     url: string | null | undefined;
     setUrl: React.Dispatch<React.SetStateAction<string | null | undefined | undefined>>;
};

export const RedirectLoginContext = createContext<page>({} as page);

type props = {
     children: JSX.Element;
};

const RedirectLogin = ({ children }: props) => {
     const [url, setUrl] = useState<string | null | undefined>(null);
     console.log(url, "url");
     return <RedirectLoginContext.Provider value={{ url, setUrl }}>{children}</RedirectLoginContext.Provider>;
};

export default RedirectLogin;
