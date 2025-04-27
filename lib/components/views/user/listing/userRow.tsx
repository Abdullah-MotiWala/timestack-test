import React from "react";
import { Profile } from "../../../../lib/types";
import { FaEye } from "react-icons/fa";

const UserRow = ({
  profile,
  handleViewClick,
}: {
  profile: Profile;
  handleViewClick: Function;
}) => {
  const locationTitle = `${profile?.location?.city}, ${profile?.location?.country}, ${profile?.location?.postcode}`;
  const gender = profile?.gender?.toLowerCase();

  const genderChipClass = gender === "male"
    ? "bg-blue-100 text-blue-800"
    : gender === "female"
      ? "bg-pink-100 text-pink-800"
      : "bg-gray-200 text-gray-700";

  return (
    <tr className="border-b hover:bg-gray-50 transition-all">
      <td className="px-6 py-2">
        <img
          src={profile?.picture?.thumbnail}
          alt={`${profile?.name?.first} ${profile?.name?.last}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </td>
      <td className="px-4 py-2">
        {profile?.name?.first} {profile?.name?.last}
      </td>
      <td className="px-6 py-2">{profile?.email}</td>
      <td className="px-6 py-2">{profile?.phone}</td>
      <td
        className="px-6 py-2 cursor-help"
        title={locationTitle}
      >
        {profile?.location?.country}
      </td>
      <td className="px-6 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${genderChipClass}`}
        >
          {gender}
        </span>
      </td>
      <td className="px-6 py-2  text-center">
        <button
          className="text-indigo-600 hover:text-indigo-800 transition-colors"
          onClick={() => handleViewClick(profile)}
        >
          <FaEye size={18} />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
