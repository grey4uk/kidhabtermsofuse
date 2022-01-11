import { useState, useEffect, useCallback } from "react";
import LocalizedStrings from "react-localization";
import { useHistory } from "react-router-dom";
import styles from "./TermsOfUseStyles.module.css";
import ru from "../../assets/languages/RU.json";
import en from "../../assets/languages/EN.json";
import uk from "../../assets/languages/UA.json";

const languageObj = {
  en,
  ru,
  uk,
};

export const TermsOfUsePage = () => {
  const history = useHistory();
  const path = history.location.pathname?.substr(1, 2);

  let locale = new LocalizedStrings(languageObj)
    .getInterfaceLanguage()
    .substr(0, 2);

  const [choose, setChoose] = useState(locale);

  const handlePath =useCallback( (str) => {
    history.push(`/${str}`);
    setChoose(str);
  },[history]);

  useEffect(() => {
    path ? handlePath(path) : history.push(`/${locale}`);
  }, [handlePath,history,locale,path]);

  const handleChoose = (e) => {
    const lang = e.target.value;
    setChoose(lang);
    history.push(`/${lang}`);
  };

  const value = languageObj[choose] || languageObj["en"];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <ul className={styles.linkList}>
              <li className={styles.linkListTitle}>
                <a href="#terms" className={styles.linkToItem}>
                  {value.aside1}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#rights" className={styles.linkToItem}>
                  {value.aside2}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#payment" className={styles.linkToItem}>
                  {value.aside3}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#notes" className={styles.linkToItem}>
                  {value.aside5}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#rules" className={styles.linkToItem}>
                  {value.aside6}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#area" className={styles.linkToItem}>
                  {value.aside7}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#relocate" className={styles.linkToItem}>
                  {value.aside8}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#tech" className={styles.linkToItem}>
                  {value.aside9}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#update" className={styles.linkToItem}>
                  {value.aside10}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#reject" className={styles.linkToItem}>
                  {value.aside11}
                </a>
              </li>
              <li className={styles.sidebarItem}>
                <a href="#conflicts" className={styles.linkToItem}>
                  {value.aside12}
                </a>
              </li>
            </ul>
          </aside>
          <div className={styles.content}>
            <h1 id="terms" className={styles.documentTitle}>
              {value.aside1}
              <div className={styles.alertText}>{value.titleMain}</div>
              <select
                className={styles.languageSelect}
                name="language"
                size="1"
                value={choose}
                onChange={handleChoose}
              >
                <option value="en">on english</option>
                <option value="ru">по-русски</option>
                <option value="uk">українською</option>
              </select>
            </h1>
            <div className={styles.startText}>
              <p>
                {value.p1}
                <span className={styles.alertText}>{value.company}</span>
                {value.p2}
                <span className={styles.alertText}>{value.titleMain}</span>
                {value.p3}
              </p>
              <div className={styles.warningText}>
                <p>
                  {value.p4}
                  <a
                    href={value.linkTeenhubprivacy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.warningTextLink}>
                      {value.linkTeenhubprivacy}
                    </span>
                  </a>
                  {value.p5}
                </p>
                <p>{value.p6}</p>
              </div>
            </div>
            <h2 id="rights">{value.aside2}</h2>
            <p>{value.p7}</p>
            <p>{value.p8}</p>
            <p>{value.p9}</p>
            <ul className={styles.list}>
              <li>{value.p10}</li>
              <li>{value.p11}</li>
            </ul>
            <p>
              {value.p12}
              <span className={styles.alertText}>{value.p13}</span>
              {value.p14}
            </p>
            <p>
              {value.p15}
              <span className={styles.alertText}>{value.company}</span>
              {value.p16}
              <a href={value.link1}>
                <span className={styles.alertText}>{value.link1}</span>
              </a>
            </p>
            <p>{value.p17}</p>
            <p>{value.p18}</p>
            <p>
              {value.p19}
              <span className={styles.alertText}>{value.company}</span>
              {value.p20}
            </p>
            <p>{value.p21}</p>
            <p>{value.p22}</p>
            <p>{value.p23}</p>
            <h2 id="payment">{value.aside3}</h2>
            <p>
              {value.p24}
              <span className={styles.alertText}>{value.titleMain}</span>
              {value.p25}
            </p>
            <p>
              {value.p26}
              <span className={styles.alertText}>{value.titleMain}</span>
              {value.p27}
            </p>
            <p className={styles.alertText}>
              <a
                href={value.priceLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkToItem}
              >
                {value.priceLink}
              </a>
            </p>
            <p>{value.p28}</p>
            <h2 id="notes">{value.aside5}</h2>
            <p>{value.p40}</p>
            <h2 id="rules">{value.aside6}</h2>
            <p>{value.p41}</p>
            <ul className={styles.rulesList}>
              <li>{value.p42}</li>
              <li>{value.p43}</li>
              <li>{value.p44}</li>
              <li>{value.p45}</li>
              <li>{value.p46}</li>
              <li>{value.p47}</li>
              <li>{value.p48}</li>
              <li>{value.p49}</li>
              <li>{value.p50}</li>
            </ul>
            <p>
              {value.p51}
              <span className={styles.alertText}>{value.link2}</span>
              {value.p52}
            </p>
            <h2 id="area">{value.aside7}</h2>
            <p>
              {value.p53}
              {value.p54}
              {value.p55}
              <a
                href={value.linkApple}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.alertText}>{value.linkApple}</span>
              </a>
              {value.p511}
              <a
                href={value.linkGoogle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.alertText}>{value.linkGoogle}</span>
              </a>
              {value.p56}
            </p>
            <p>{value.p57}</p>
            <ul className={styles.rulesList}>
              <li>{value.p58}</li>
              <li>{value.p59}</li>
              <li>{value.p60}</li>
              <li>{value.p61}</li>
              <li>{value.p62}</li>
            </ul>
            <h2 id="relocate">{value.aside8}</h2>
            <p>{value.p63}</p>
            <h2 id="tech">{value.aside9}</h2>
            <p>
              {value.p64}
              <span className={styles.alertText}>{value.company}</span>
              {value.p65}
            </p>
            <h2 id="update">{value.aside10}</h2>
            <p>
              {value.p66}
              <span className={styles.alertText}>{value.company}</span>
              {value.p67}
            </p>
            <h2 id="reject">{value.aside11}</h2>
            <ul className={styles.rulesList}>
              <li>
                <span className={styles.alertText}>{value.company}</span>
                {value.p68}
              </li>
              <li>
                <span className={styles.alertText}>{value.company}</span>
                {value.p69}
              </li>
              <li>
                <span className={styles.alertText}>{value.company}</span>
                {value.p70}
              </li>
              <li>
                <span className={styles.alertText}>{value.company}</span>
                {value.p71}
              </li>
              <li>{value.p72}</li>
              <li>{value.p73}</li>
              <li>
                <span className={styles.alertText}>{value.company}</span>
                {value.p74}
                <dl>
                  <dt>{value.p75}</dt>
                  <dt>{value.p76}</dt>
                  <dt>{value.p77}</dt>
                </dl>
              </li>
              <li>
                {value.p78}
                <span className={styles.alertText}>{value.company}</span>
                {value.p79}
              </li>
            </ul>
            <h2 id="conflicts">{value.aside12}</h2>
            <p>{value.p80}</p>
          </div>
        </div>
      </div>
    </>
  );
};
