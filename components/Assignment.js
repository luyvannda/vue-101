export default {
  template: 
  /*html*/
  `
        <li>
            <label class="p-2 flex justify-between items-center ">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete" class="ml-3 mt-1">
            </label>
        </li> 
    `,

  props: {
    assignment: Object
  }
}