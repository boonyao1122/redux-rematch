export type User = {
  name: {
    first: string;
    last: string;
  };
  location: {
    street: any;
    city: string;
    state: string;
    postcode: string | number;
  };
  id: string;
  picture: {
    thumbnail: string;
  };
  isFollowing: boolean;
};

export type Toast = {
  id: number;
  message: string;
};
