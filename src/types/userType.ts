export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  isAdmin: boolean;
};

export type ResponseUserType = {
  message: string;
  user: UserType;
};
