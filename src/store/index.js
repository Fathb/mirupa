import {
 createStore
} from 'vuex';
import {
 auth,
 db
} from "../firebase";

export default createStore({
 state: {
  user: null,
  name: null,
  email: null,
  level: null,
  initial: null,
  id: null,
  jadwals: []
 },
 mutations: {
  setUser(state, doc) {
   state.name = doc.data().name;
   state.email = doc.data().email;
   state.level = doc.data().level;
   state.id = doc.id;
  },
  setInitial(state) {
   state.initial = state.name.match(/(\b\S)?/g).join("");
  },
  updateUser(state, payload) {
   state.user = payload;
  },
  setDataJadwal(state, payload) {
   state.jadwals = [];
   payload.forEach(dataJdw=> {
    state.jadwals.push(dataJdw.data());
   })
  }
 },
 actions: {
  async getUserInfo({
   commit
  }) {
   const userCollect = await db.collection("users").doc(auth.currentUser.uid);
   const userResult = await userCollect.get();
   commit("setUser", userResult);
   commit("setInitial");
  },
  getJadwal({
   commit
  }) {
   const jadwal = db.collection("jadwal").orderBy("kelas").orderBy("hari").orderBy("jam");
   jadwal.onSnapshot(result=> {
    commit("setDataJadwal", result);
   })
  }
 },
 modules: {}
});