export default function({ store, redirect }) {
  if (
    !store.state ||
    !store.state.auth ||
    !store.state.auth.loggedIn ||
    store.state.auth.user.admin == "0"
  ) {
    return redirect("/login");
  }
}
