// Create a random 6 character code to use as a room ID.
export const generateRoomId = () => {
  let password = ''
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < 6; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}