import Image from "next/image";
import ThemeToggle from "@/src/app/_components/theme/theme-toggle";
import style from "./user-card.module.css";
import { SignOutButton } from "@/src/app/_components/auth/auth-buttons";
import { AppUser } from "@/src/interfaces/user";

type Props = {
  user: AppUser;
}

export default function UserCard({user} : Props) {

  return(
    <div className={style.card}>
    <div className={style.header}>
      {user.photoURL != null 
      ?
      <Image
        className={style.image}
        src={user.photoURL}
        width={128}
        height={128}
        alt="User Profile Picture"
        />
        :
        <div className={style.skeletonImage}></div>
      }
      <div>
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
  );
}