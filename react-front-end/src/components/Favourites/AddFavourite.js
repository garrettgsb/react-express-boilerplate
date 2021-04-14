export function createFav(url, uid) {
  return firestore
    .collection("favs")
    .add({
      user: uid,
      website: url,
    })
    .then(function (docRef) {
      console.log("Tutorial created with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding Tutorial: ", error);
    });
}

export function deleteFav(website, user) {
  var dt = firestore
    .collection("favs")
    .where("website", "==", website)
    .where("user", "==", user);
  return dt.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      doc.ref.delete();
      console.log("deleted!");
    });
  });
}

function handleFav() {
  setFav(!fav);
  if (fav == true) {
    //save it to firestore
    createFav("nordvpn.com", auth.user.id);
    //save ID to localstorage? but this will fail if they come back
  } else {
    console.log("delete me?");
    console.log(auth.user.id);
    deleteFav("nordvpn.com", auth.user.id);
    //or delete it from firestore
    //delete it where
  }
}
