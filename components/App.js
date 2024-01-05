
export default {
  components: {

    template:
      /*html*/
      `
      <section v-if="inProgressAssignments.length">

        <h2 class="font-bold mb-2">In Progress</h2>

        <ul>
          <li
              v-for="assignment in inProgressAssignments"
              :key="assignment.id">
            <label>
              {{ assignment.name }}

              <input type="checkbox" v-model="assignment.complete">
            </label>
          </li>
        </ul>

      </section>

      <section class="mt-8" v-if="completedAssignments.length">

        <h2 class="font-bold mb-2">Completed</h2>

        <ul>
          <li v-for="assignment in completedAssignments"
              :key="assignment.id">
            <label>
              {{ assignment.name }}

              <input type="checkbox" v-model="assignment.complete">
            </label>
          </li>
        </ul>

      </section>

    `,

    data() {
      return {
        assignments: [
          { id: 1, name: 'Finish project', complete: false },
          { id: 2, name: 'Read chapter 4', complete: false },
          { id: 3, name: 'Turn in homework', complete: false }
        ]
      }
    },

    computed: {
      completedAssignments() {
        return this.assignments.filter(a => a.complete)
      },

      inProgressAssignments() {
        return this.assignments.filter(a => !a.complete)
      }
    }
  }
};