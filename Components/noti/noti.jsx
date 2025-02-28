import { useRouter } from "next/router";
import styles from "../Dashboard/Dashboard.module.css";

export default function Notifications() {
  const router = useRouter();

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>TBD</h2>
        <ul>
          <li onClick={() => router.push("/")}>Dashboard</li>
          <li className={styles.active}>Users</li>
          <li>
            Notification <span className={styles.badge}>3</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.content}>
        <div className={styles.headerBg}></div>
        <h2>Notifications</h2>
        <table>
          <thead>
            <tr>
              <th>Time Stamp</th>
              <th>Notification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                <td>2024/12/29 - 12:25:49 PM</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                  <button className={styles.deleteBtn}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
