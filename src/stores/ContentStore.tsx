import React, { ReactNode, useContext, useState, useEffect } from "react";
import { Dayjs } from "dayjs";

interface ContentContextInterface {
  contents: ContentProps[];
  setContents: (contents: ContentProps[]) => void;
  contentIdentifier: string;
  setContentIdentifier: (contentIdentifier: string) => void;
  contentName: string;
  setContentName: (contentName: string) => void;
  contentType: string;
  setContentType: (contentType: string) => void;
  contentDate?: Dayjs;
  setContentDate: (contentDate: Dayjs) => void;
  contentSubtype: string;
  setContentSubtype: (contentSubtype: string) => void;
  contentOptions: string[];
  setContentOptions: (contentOptions: string[]) => void;
  contentOtherText?: string;
  setContentOtherText: (contentOtherText: string) => void;
  contentRecurrence: string;
  setContentRecurrence: (contentRecurrence: string) => void;
  contentFile: string;
  setContentFile: (contentFile: string) => void;
}

interface ContentProviderProps {
  children: ReactNode;
}
interface ContentProps {
  contentIdentifier: string;
  contentName: string;
  contentType: string;
  contentDate?: Dayjs;
  contentSubtype: string;
  contentOptions: string[];
  contentOtherText?: string;
  contentRecurrence: string;
  contentFile: string;
}
const ContentContext = React.createContext<ContentContextInterface | undefined>(
  undefined,
);

function ContentProvider({ children }: ContentProviderProps) {
  const [contents, setContents] = useState<ContentProps[]>(() => {
    const saved = localStorage.getItem("contents");
    return saved ? JSON.parse(saved) : [];
  });

  const [contentName, setContentName] = useState("");
  const [contentType, setContentType] = useState("");
  const [contentDate, setContentDate] = useState<Dayjs>();
  const [contentSubtype, setContentSubtype] = useState("");
  const [contentOptions, setContentOptions] = useState<string[]>([]);
  const [contentOtherText, setContentOtherText] = useState("");
  const [contentRecurrence, setContentRecurrence] = useState("");
  const [contentFile, setContentFile] = useState("");
  const [contentIdentifier, setContentIdentifier] = useState("");

  useEffect(() => {
    if (contents && contents.length > 0) {
      localStorage.setItem("contents", JSON.stringify(contents));
    }
  }, [contents]);

  return (
    <ContentContext.Provider
      value={{
        contents,
        setContents,
        contentName,
        setContentName,
        contentType,
        setContentType,
        contentDate,
        setContentDate,
        contentSubtype,
        setContentSubtype,
        contentOptions,
        setContentOptions,
        contentOtherText,
        setContentOtherText,
        contentRecurrence,
        setContentRecurrence,
        contentFile,
        setContentFile,
        contentIdentifier,
        setContentIdentifier,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

function useContent(): ContentContextInterface {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}

export { ContentProvider, ContentContext, useContent };
