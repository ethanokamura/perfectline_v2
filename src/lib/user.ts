import { DocumentData, DocumentSnapshot } from "firebase-admin/firestore";

export function mapFirebaseUserToAppUser(userDoc: DocumentSnapshot<DocumentData, DocumentData>) {
  if (!userDoc.exists) return null;  // not signed in
  const data = userDoc.data();
  const id = userDoc.id;
  if (data == null) return null;
  return {
    uid: id,
    displayName: data.name ?? "Unknown User",
    email: data.email ?? "n/a",
    provider: data.providerId ?? "Unknown Provider",
    photoURL: data.image,
    xp:  data?.xp ?? 0,
    purchasedCourses: data?.purchasedCourses ?? [],
    membership:  data?.membership ?? "Basic",
  };
}