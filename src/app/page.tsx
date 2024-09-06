// import Chart from '../component/Chart';
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.widget}>
          <h2>Sales Chart</h2>
          {/* <Chart /> */}
      </div>
      <div className={styles.widgets}>
        
        <div className={styles.widget}>
          <h2>Data Table</h2>
          <table className={styles.sandeep}>
            <thead>
              <tr>
                <th className={styles.sum} >Product</th>
                <th className={styles.sum} >Sales</th>
                <th className={styles.sum}>Revenue</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.td}>Product A</td>
                <td className={styles.td}>100</td>
                <td className={styles.td}>$1000</td>
              </tr>
              <tr>
                <td className={styles.td} >Product B</td>
                <td className={styles.td}>150</td>
                <td className={styles.td}>$1500</td>
              </tr>
              <tr>
                <td className={styles.td}>Company C</td>
                <td className={styles.td}>150</td>
                <td className={styles.td}>$1500</td>
              </tr>
              <tr>
                <td className={styles.td} >Company D</td>
                <td className={styles.td}>180</td>
                <td className={styles.td}>$1800</td>
              </tr>
              <tr>
                <td className={styles.td}>Company E</td>
                <td className={styles.td}>170</td>
                <td className={styles.td}>$1200</td>
              </tr>
              <tr>
                <td className={styles.td}>Product C</td>
                <td className={styles.td}>190</td>
                <td className={styles.td}>$1900</td>
              </tr>
              <tr>
                <td className={styles.td}>Product D</td>
                <td className={styles.td}>170</td>
                <td className={styles.td}>$15000</td>
              </tr>
              <tr>
                <td className={styles.td}>Product S</td>
                <td className={styles.td}>400</td>
                <td className={styles.td}>$14000</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
      
      
    </div>
  );
}
