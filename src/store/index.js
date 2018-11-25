import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 初期化
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        labelIds: [1, 3],
        done: true
      }
    ],

    labels: [
      {
        id: 1,
        text: '買い物'
      },
      {
        id: 2,
        text: '食料'
      },
      {
        id: 3,
        text: '本'
      }
    ],
    // 次に追加するタスクのID
    nextTaskId: 3,
    nextLabelId: 4
  },
  mutations: {
    // タスクを追加する
    addTask (state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false
      })

      state.nextTaskId++
    },

    // タスクの完了状態を変更する
    toggleTaskStatus (state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filtered.forEach(task => {
        task.done = !task.done
      })
    },

    addLabel (state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })

      // 次に追加されるラベルに付与するIDを更新する
      state.nextLabelId++
    }
  }
})

export default store
