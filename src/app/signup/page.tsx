"use client";

import { Button, Card, Input } from "antd";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Signup() {
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <Card className={styles.card}>
          <h2 className={styles.title}>
            Welcome to <span>Workflo</span>!
          </h2>
          <form className={styles.form}>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              size="large"
              className={styles.loginInput}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              size="large"
              className={styles.loginInput}
            />
            <Input.Password
              type="password"
              name="password"
              placeholder="Password"
              size="large"
              className={styles.loginInput}
            />
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginBtn}
              size="large"
            >
              Sign up
            </Button>
          </form>
          <div className={styles.bottomText}>
            Already have an account?{" "}
            <Link href="/login" className={styles.link}>
              Log in.
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
}
