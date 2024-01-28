import React from 'react'
import styles from '../styles/Page4.module.css'

const Page4 = () => {
  return (
    <>
         <h2 className={styles.servicename}>Customized Service Name</h2>

<div className={styles.customservice}>

    <div className={styles.LeftSide}>

    <div className={styles.left}>
    <div className={styles.one}>
    <label>Name</label> <br/>
    <input type="tel" className={styles.mobilenumber} placeholder="Mobile Number"/>
</div>

<div className={styles.two}>
    <label>Email</label> <br/>
    <input type="email" className={styles.email} placeholder="Email"/>
</div>
</div>

<div className={styles.left_Bottom}>
<div className={styles.one}>
<label>Mobile Number</label> <br/>
<input type="tel" className={styles.mobilenumber} placeholder="Mobile Number"/>
</div>

<div className={styles.two}>
<label>Type</label> <br/>
<input type="email" className={styles.email} placeholder="Email"/>
</div>
</div>

<div className={styles.left_B_bottom}>
<label>Location</label> <br/>
<input type="text" className={styles.location} placeholder="Location"/>
</div>
     <button className={styles.ctabutton}>CTA</button>
</div>


<div className={styles.RightSide}>
<img className='imgbottom' src="https://i.pinimg.com/474x/32/43/a2/3243a2afd14cf81c9e52c97765566699.jpg"/>
</div> 

  </div>
    </>
  )
}

export default Page4
