import React from 'react';
// import styles from './Page1.module.css';
import styles from '../styles/Page1.module.css'

const Page1 =()=>{
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>To explore more <span className={styles.cool}>designing</span> and other essential things fill this form.</h1>
            {/* <p>In Japan, the word "anime" is used to refer to all animation, regardless of style or origin. However, in other parts of the world, "anime" refers specifically to animation from Japan.</p>
            <button>Explore Now</button> */}
    <form>
    <div class={styles.formfields}>
           <label for="type">Select Type:</label>
           <select id="type">
             <option value="option1">Type 1</option>
             <option value="option2">Type 2</option>
             <option value="option3">Type 3</option>
           </select>
       
           <label for="location">Select Location:</label>
           <select id="location">
             <option value="location1">Pune</option>
             <option value="location2">Baramati</option>
             <option value="location3">Solapur</option>
           </select>
       
           <button type="submit">CTA</button>
          </div>
          </form>
          </div>
          <div className={styles.right}>
            <img src="https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-boy_183364-81179.jpg?w=740&t=st=1706063073~exp=1706063673~hmac=bcead8cf3400873342fe24556f6a7db327001a3f050d45d07855065198305ae3"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
