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

export type UserListType = {
  id: string;
  firstName: string;
  lastName: string;
};

export type ResponseUsersListType = {
  message: string;
  users: UserListType[];
};
