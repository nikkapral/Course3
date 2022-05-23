import react from 'react';
import styles from './Header.module.scss'

const Header = () => {
    return(
      <div>
          <div className={styles.header}>
              <img src={'https://soundex.ru/wp-content/uploads/2018/08/classical-music-1838390_1920.jpg'}/>
              <div className={styles.overflow}></div>
              <h1>как музыка влияет на нас?</h1>

          </div>
      </div>
    );
}

export default Header;