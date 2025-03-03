"use client"; // Required for Client Components in Next.js App Router

import { useRouter } from "next/navigation"; // Correct import for App Router
import Image from "next/image"; // Ensure Image is imported from next/image
import Link from "next/link"; // Ensure Link is imported from next/link
import styles from "./Dashboard.module.css";
import Logo from "./../../public/apple-touch-icon.png"; // Ensure correct path

export default function Dashboard() {
  const router = useRouter(); // Now it works fine

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref>
            <Image className={styles.logo} src={Logo} alt="tree" width={30} height={30} />
          </Link>
          <h2 className={styles.logoText}>TBD</h2>
        </div>

        <ul>
          <li className={styles.active}>Dashboard</li>
          <li onClick={() => router.push("/notifications")}>
            Notification <span className={styles.badge}>3</span>
          </li>
          <li onClick={() => router.push("/users")}>Users</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.headerBg}></div>
        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>Total number of users</h3>
            <p>24</p>
          </div>
          <div className={styles.card}>
            <h3>Total number of farmers</h3>
            <p>3</p>
          </div>
          <div className={styles.card}>
            <h3>Total number of buyers</h3>
            <p>10</p>
          </div>
          <div className={styles.card}>
            <h3>Total number of laborers</h3>
            <p>11</p>
          </div>
        </div>

        {/* Users Table */}
        <div className={styles.tableContainer}>
          <h3>Tasks</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {Array(8).fill().map((_, index) => (
                <tr key={index}>
                  <td>Lorem ipsum dolor</td>
                  <td>Loremipsumdolor@gmail.com</td>
                  <td>088 672 5625</td>
                  <td>Farmer</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
