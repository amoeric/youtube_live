/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import Vue from 'vue/dist/vue.esm'
import axios from 'axios'
import Qs from 'qs'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { locale })


document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#el-index',
    data: function(){ 
      return {
        staffs: [],
        query: {
          name_cont: null,
          age_gteq: 0,
          age_lteq: 100,
          joined_on_gteq: null,
          joined_on_lteq: null
        },
        embed_url: "",
        live_talk: "",
        domain: ""
      }
    },
    created: function(){
      this.search()
    },
    methods:{
      notify: function(msg){
        this.$notify({
          type: 'error',
          title: 'Error',
          message: msg
        });
      },  
      search: function(){
        axios.get('/api/v1/searches')
        .then((response) => {
          console.log(response);
          this.live_talk = `https://www.youtube.com/live_chat?v=${response.data.video_id}&embed_domain=lvh.me:3000`
          console.log(this.live_talk);
          this.embed_url = `https:${response.data.embed_url}?autoplay=1`;
          console.log(this.embed_url);
        })
        .catch((error) => {
          console.log(error);
          this.notify(error.message);
        })
      }
    }
  })
})