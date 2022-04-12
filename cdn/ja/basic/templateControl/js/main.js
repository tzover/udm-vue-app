// This is a template
{
  const app = Vue.createApp({
    data() {
      return {
        msgBasic: 'Hello. My name is yuya. This is a basic sample.',
        msgOnce: 'Hello. My name is yuya. This is a v-once sample.',
        msgPre: 'Hello. My name is yuya. This is a v-pre sample.',
        msgHtml:
          'Hello. <span style="color:blue">My name is yuya.</span> <span style="color:red">This is a v-html sample.</span>',
        msgCloak: 'Hello. My name is yuya. This is a v-cloak sample.',
        msgText: 'Hello. My name is yuya. This is a v-text sample.',
      }
    },
    methods: {
      clickHandlerBasic(e) {
        this.msgBasic = this.msgBasic.split('').reverse().join('')
      },
      clickHandlerOnce(e) {
        this.msgOnce = this.msgOnce.split('').reverse().join('')
      },
    },
    computed: {},
  })
  app.mount('#app')
}
