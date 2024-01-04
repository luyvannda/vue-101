export default {
  template: /*html*/
    `
            <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" 
            :disabled="processing"
            >
            <slot />
              
            </button>    
  
            `,

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    processing: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      processing: false
    };
  }

}




