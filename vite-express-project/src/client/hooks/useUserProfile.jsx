import { useEffect } from "react";

export function useUserProfile(id, setUser) {
  // console.log("Fetching user data for id:", id);
  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${id}`);
      if (!response.ok) {
        console.error(`Failed to fetch user with id ${id}`);
        return;
      }

      const data = await response.json();
      if (data.length === 0) {
        console.error(`No user found with id ${id}`);
        return;
      }

      setUser(data[0]);
      // console.log("User data:", data[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [id, setUser]);

  const updateUser = async (updatedUserData) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        //Using PATCH instead of PUT because we only want to   update the fields that are provided
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        console.error(`Failed to update user with id ${id}`);
        return;
      }

      await fetchUser();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return { fetchUser, updateUser };
}
