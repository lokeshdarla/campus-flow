import User from "../../models/User";
import { db } from "../../db/db";
import { Users } from "../../db/schema";

class UserService {
  private users: User[] = [];

  async createUser(user: User) {
    await db.insert(Users).values(user);
  }

  getUsers() {
    return db.query.Users.findMany();
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: string, newData: Partial<User>): User | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...newData };
      return this.users[userIndex];
    }
    return undefined;
  }

  deleteUser(id: string): User | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      const deletedUser = this.users.splice(userIndex, 1)[0];
      return deletedUser;
    }
    return undefined;
  }
}

export default UserService;
