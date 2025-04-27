import React from "react";
import { useUser } from "../../context/UserContext";
import ProfileView from "../../components/views/user/profile";

const ProfileDetail = () => {
  const { selectedUser } = useUser();
  if (!selectedUser) return <p>Loading...</p>;

  const genderChipClass =
    selectedUser.gender === "male"
      ? "bg-blue-100 text-blue-800"
      : "bg-pink-100 text-pink-800"

  return <ProfileView genderChipClass={genderChipClass} user={selectedUser} />
};

export default ProfileDetail;
