import {useEffect} from "react";
import {useTranslation} from "react-i18next";

const languages = [
  {code: "en", lang: "English"},
  {code: "kr", lang: "Korean"}
];

const getDirection = (language) => {
  const rtlLanguages = ["ar", "he", "fa"];
  return rtlLanguages.includes(language) ? "rtl" : "ltr";
};

const LanguageSelector = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
    document.body.dir = getDirection(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;