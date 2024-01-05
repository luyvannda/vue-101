import AssignmentList from "./AssignmentList.js"

export default {
  components: { AssignmentList },

  template:
    /*html*/
    `
    <section class="space-y-6">
     <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
     <assignment-list :assignments="filters.completed" title="completed"> </assignment-list>

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

    filters() {
      return {
        inProgress: this.assignments.filter(a => !a.complete),
        completed: this.assignments.filter(a => a.complete)
      }
    }
  }
}