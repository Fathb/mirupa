import {
  createStore
} from 'vuex';
import {
  auth,
  db,
  firebase
} from "../firebase";

export default createStore({
  state: {
    user: null,
    name: null,
    email: null,
    level: null,
    initial: null,
    detail: null,
    id: null,
    jadwals: [],
    quiz: []
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
      let jadwal = {};
      state.jadwals = [];
      payload.forEach(dataJdw=> {
        jadwal = dataJdw.data();
        jadwal.id = dataJdw.id;
        state.jadwals.push(jadwal);
      })
    },
    setDetails(state, data) {
      state.detail = data;
    },
    updateJadwal(state, payload) {
      db.collection('jadwal').doc(payload.id).update(payload);
    },
    simpanjawaban(state, {
      id, jawaban, score, siswaRef
    }) {
      const answer = {
        jawaban, score, siswaRef
      }
      db.collection("quiz").doc(id).update({
        jawaban: firebase.firestore.FieldValue.arrayUnion(answer)
      })
    },
    setQuiz(state, data) {
      state.quiz = [];
      data.forEach(dt=> {
        const quiz = dt.data();
        quiz.id = dt.id;
        state.quiz.push(quiz);
      })
    },
    setQuizStat(state) {
      let statArr = []
      state.quiz.map(quizs=> {
        const jawabanSiswa = quizs.jawaban.find(({
          siswaRef
        })=> {
          return siswaRef.id === state.id;
        })
        quizs.jawabanSiswa = jawabanSiswa;
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
      });
    },
    getQuizs({
      commit
    }) {
      db.collection("quiz").onSnapshot(results=> {
        commit("setQuiz", results);
        commit("setQuizStat");
      })
    }
  },
  modules: {}
});