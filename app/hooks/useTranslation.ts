// import { createContext, useContext, useState } from "react";
// import locales from "../i18n/locales.json";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en");

//   const translate = (key) => {
//     return key.split(".").reduce((obj, keyPart) => obj?.[keyPart], locales[language]) || key;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, translate }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useTranslation = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useTranslation must be used within a LanguageProvider");
//   }
//   return context;
// };
