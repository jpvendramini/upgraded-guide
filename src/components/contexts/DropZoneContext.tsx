"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type ContextType = {
  file: any;
  setFile: Dispatch<SetStateAction<undefined>>;
  linguagem: string;
  setLinguagem: Dispatch<SetStateAction<string>>;
};

const DropZoneContext = createContext({} as ContextType);

export const useDropZoneContext = () => useContext(DropZoneContext);

const DropZoneProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [file, setFile] = useState();
  const [linguagem, setLinguagem] = useState<string>("");
  const values = useMemo(
    () => ({
      file,
      setFile,
      linguagem,
      setLinguagem,
    }),
    [file, setFile, linguagem, setLinguagem]
  );

  return (
    <DropZoneContext.Provider value={values}>
      {children}
    </DropZoneContext.Provider>
  );
};

export default DropZoneProvider;
