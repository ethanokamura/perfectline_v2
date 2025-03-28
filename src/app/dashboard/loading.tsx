import { Metadata } from "next";
import SkeletonUserCard from "../_components/user-card/skeleton-user-card";
 
export const metadata: Metadata = {
  title: 'User Dashboard',
  description: 'Dashboard page for the current user!',
}

export default async function Loading() {
  return (
    <main>
      <SkeletonUserCard />
    </main>
  );
}
