import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

type Prop = { children: ReactNode; modal: ReactNode };

export default function BeforeLoginLayout({ children, modal }: Prop) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
