import TitleComponent from './TitleComponent.js';

export default {
    components: {
      'title-component': TitleComponent
    },
    template: `
      <div v-on:click="handleClick">
        <h1>Single-file JavaScript Component</h1>
        <title-component v-bind:title="title"/>
        <p>{{ message }}</p>
      </div>
    `,
    data() {
      return {
        title: 'subsubtitle',
        message: 'Click me',
      }
    },
    methods: {
        handleClick: function () {
          this.message = 'clicked!!!'
          this.title = 'changed title'
        }
    }
  }