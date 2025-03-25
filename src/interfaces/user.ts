export interface AppUser {
  uid: string;
  displayName: string | "Unknown User";
  email: string | "unknownuser@perfectline.io";
  photoURL: string | null;
  provider: string;
  xp: number;
  purchasedCourses: string[];
  membership: string;
};
