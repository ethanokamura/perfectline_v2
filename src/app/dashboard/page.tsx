import { auth } from "@/lib/auth"
import { firestore } from "@/lib/firestore"
import { mapFirebaseUserToAppUser } from "@/src/lib/user";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import ThemeToggle from "../_components/theme-toggle";
import style from "./dashboard.module.css";
import { SignOutButton } from "../_components/buttons";
 
export const metadata: Metadata = {
  title: 'User Dashboard',
  description: 'Dashboard page for the current user!',
}
 
// Output: <title>About | Acme</title>

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserId = session?.user?.id;

  if (!currentUserId) { 
    throw new Error('Failed to find user ID');
  }

  const snapshot = await firestore.collection('users').doc(currentUserId).get();
  if (snapshot.exists) {
    console.log("Document data:", snapshot.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  const user = await mapFirebaseUserToAppUser(snapshot);

  if (!user) { 
    throw new Error('User not found!');
  }

  return (
    <main>
      <div className={style.card}>
        <div className={style.header}>
          <Image
            className={style.image}
            src={user.photoURL}
            width={128}
            height={128}
            alt="User Profile Picture"
            />
          <div className={style.details}>
            <h1>{user.displayName}</h1>
            <h2>LVL <b>{user.xp}</b></h2>
          </div>
        </div>
        <ThemeToggle />
        <SignOutButton />
        <div>
          <p><b>User ID:</b> {user.uid}</p>
          <p><b>Membership:</b> {user.membership}</p>
          <p><b>Email:</b> {user.email}</p>      
          { user.purchasedCourses.length == 0
            ? <p>No purchased courses</p> : 
            <>
              <p><b>Purchased Courses:</b></p>
              <ul>
                {user.purchasedCourses.map((course: string) => 
                  <li key={course}>{course}</li>
                )}
              </ul>
            </>
          }
        </div>
      </div>
    </main>
  );
}
