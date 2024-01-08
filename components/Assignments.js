import AssignmentList from "./AssignmentList.js"

export default {
  components: { AssignmentList },

  template:
    /*html*/
    `
    <section class="space-y-6">
     <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
     <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>

     <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
            <input v-model="newAssignment"  placeholder="New assignment..." class="p-2" required/>
            <button type="submit" class="bg-white border-l p-2 rounded-r">Add</button>
        </div>
     </form>

     </section>
`,

  data() {
    return {
      assignments: [
        { id: 1, name: 'Finish project', complete: false },
        { id: 2, name: 'Read chapter 4', complete: false },
        { id: 3, name: 'Turn in homework', complete: false }
      ],

      newAssignment: ""
    }
  },

  computed: {

    filters() {
      return {
        inProgress: this.assignments.filter(a => !a.complete),
        completed: this.assignments.filter(a => a.complete)
      }
    }
  },

  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1
      });

      this.newAssignment = '';
    }
  },
}