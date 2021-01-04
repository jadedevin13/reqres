import { useFetchUsers } from "@app/queries";
import UserCard from "@app/components/user-card";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { userSelectedState, userPageState } from "@app/state";
import { User } from "@app/types";

export default function UserList() {
  const page = useRecoilValue(userPageState);
  const { data: users, isSuccess, isLoading } = useFetchUsers(page);
  const setUserSelected = useSetRecoilState(userSelectedState);

  return (
    <div className="md:flex gap-8 justify-center content-center">
      {isLoading && <div className="text-center">....Loading</div>}
      {isSuccess &&
        users.data.map((user: User) => {
          return (
            <div
              key={user.id}
              className="md:w-1/2 text-center mb-8 md:mb-0"
              onClick={() => setUserSelected(user.id)}
            >
              <UserCard {...user} />
            </div>
          );
        })}
    </div>
  );
}
