import { auth } from "@/lib/auth"
import { firestore } from "@/lib/firestore"
import { mapFirebaseUserToAppUser } from "@/src/lib/user";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import UserCard from "../_components/user-card/user-card";
import SkeletonUserCard from "../_components/user-card/skeleton-user-card";
 
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
      <UserCard user={user} />
    </main>
  );
}
