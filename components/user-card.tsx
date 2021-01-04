import { User } from "@app/types";

export default function UserCard(props: User) {
  return (
    <>
      <img
        className="w-48 h-48 rounded-full mx-auto -mb-24"
        src={props.avatar}
        alt={`Avatar ${props.email}`}
      />
      <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
        <h3 className="font-title text-gray-800 text-xl mb-3">{`${props.first_name} ${props.last_name}`}</h3>
        <a className="font-body text-blue-500 hover:text-gray-800" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
    </>
  );
}
