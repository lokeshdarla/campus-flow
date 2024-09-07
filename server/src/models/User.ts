interface User {
  id: string;
  email: string;
  profile_url: string | null;
  role: "CLUB" | "STUDENT";
  created_at: Date;
}

export default User;
