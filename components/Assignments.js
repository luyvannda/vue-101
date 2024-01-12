import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
  components: { AssignmentList, AssignmentCreate },

  template:
    /*html*/
    `
    <section class="space-y-6">
     <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
     <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>

     <assignment-create @add="add"></assignment-create> 

     </section>
`,

  data() {
    return {
      assignments: [
        { id: 1, name: 'Finish project', complete: false, tag: 'math' },
        { id: 2, name: 'Read chapter 4', complete: false, tag: 'science'},
        { id: 3, name: 'Turn in homework', complete: false, tag: 'math' }
      ],

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
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1
      });

    }
  },
}