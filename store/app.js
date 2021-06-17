const state = () => ({
  loading: false,
  fee: 0.05,
  language: [
    { key: "en", name: "English" },
    { key: "ja", name: "日本語" },
    { key: "zh", name: "中国語" }
  ],
  alert: { text: "", type: "danger" },
  cart: [],
  orderStatus: [
    { id: 0, name: "変更可能" },
    { id: 1, name: "配送員1" },
    { id: 2, name: "配送員2" },
    { id: 4, name: "支払済" },
    { id: 9, name: "配送完了" },
    { id: 10, name: "キャンセル" }
  ],
  menu: [
    { name: "配送管理", to: "/delivery", icon: "fas fa-truck mr-2", admin: 1 },
    { name: "商品管理", to: "/product", icon: "fas fa-cubes mr-2", admin: 2 },
    {
      name: "ADMIN",
      to: "/admin",
      icon: "fas fa-users mr-2",
      admin: 3
    },
    {
      name: "ユーザー管理",
      to: "/user",
      icon: "fas fa-users mr-2",
      admin: 3
    },
    { name: "ホーム", to: "/", icon: "fas fa-home mr-2" },
    { name: "注文履歴", to: "/history", icon: "far fa-list-alt mr-2" },
    { name: "マイページ", to: "/member", icon: "fas fa-user mr-2" }
  ]
});

const mutations = {
  setLoading(state, data) {
    state.loading = data;
  },
  setAlert(state, data) {
    state.alert = { ...data };
  },
  resetAlert(state) {
    state.alert = { text: "", type: "danger" };
  },
  setCart(state, data) {
    state.cart = data;
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  addCart(state, data) {
    const record = state.cart.find(el => el.id == data.id);
    if (record) {
      record.quantity = Number(record.quantity) + Number(data.quantity);
    } else {
      state.cart.push(data);
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  removeCart(state, index) {
    state.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  changeCart(state, { index, item, quantity }) {
    state.cart.splice(index, 1, { ...item, quantity: quantity });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  updateCart(state) {
    state.cart;
  },
  resetCart(state) {
    state.cart = [];
    localStorage.removeItem("cart");
  }
};

const getters = {
  getOrderStatusNameById: state => id => {
    const status = state.orderStatus.find(i => i.id == id);
    return status && status.name;
  },
  cartQuantity: state => {
    return state.cart.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
  },
  cartFee: state => {
    const total = state.cart.reduce(
      (sum, i) =>
        sum + parseInt((Number(i.quantity) || 0) * (Number(i.price) || 0)),
      0
    );
    return parseInt(total * state.fee);
  },
  cartTotal: state => {
    const total = state.cart.reduce(
      (sum, i) =>
        sum + parseInt((Number(i.quantity) || 0) * (Number(i.price) || 0)),
      0
    );

    return parseInt(total);
    // return parseInt(total) + parseInt(total * state.fee);
    //
    // if (total < 10000) {
    //   return parseInt(total * 1.05);
    // } else if (total < 20000) {
    //   return parseInt(total * 1.05);
    // } else {
    //   return parseInt(total * 1.05);
    // }
  }
};

export default {
  state,
  mutations,
  getters
};
