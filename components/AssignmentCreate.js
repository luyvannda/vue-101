export default {
    template:
        /*html*/
        `
     <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
            <input v-model="newAssignment"  placeholder="New assignment..." class="p-2" required/>
            <button type="submit" class="bg-white border-l p-2 rounded-r">Add</button>
        </div>
     </form>    
    `,

    data() {
        return {
            newAssignment: ""
        }
    },

    methods: {
        add() {

            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    },
}