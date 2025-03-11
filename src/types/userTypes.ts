export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
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
