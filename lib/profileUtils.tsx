// profileUtils.ts

import { Profile } from "./types";

export const PROFILE_PARAMS = [
  {
    columnTitle: "Photo",
    renderValue: (profile: Profile) => (
      <img
        src={profile.picture.thumbnail}
        alt={`${profile.name.first} ${profile.name.last}`}
        style={{ borderRadius: "50%", width: "40px", height: "40px" }}
      />
    ),
  },
  {
    columnTitle: "Name",
    renderValue: (profile: Profile) => `${profile.name.first} ${profile.name.last}`,
  },
  {
    columnTitle: "Email",
    renderValue: (profile: Profile) => profile.email,
  },
  {
    columnTitle: "Phone",
    renderValue: (profile: Profile) => profile.phone,
  },
  {
    columnTitle: "Location",
    renderValue: (profile: Profile) => `${profile.location.city}, ${profile.location.country}`,
  },
  {
    columnTitle: "Gender",
    renderValue: (profile: Profile) => profile.gender,
  },
];
