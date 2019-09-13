// Global component registration
import Vue from 'vue';
import { VueTyper } from 'vue-typer';
import MultiSelect from 'vue-multiselect';
import AppButton from '@/components/app/AppButton.vue';
import AppToggle from '@/components/app/AppToggle.vue';

Vue.component('app-button', AppButton);
Vue.component('app-toggle', AppToggle);
Vue.component('vue-typer', VueTyper);
Vue.component('multi-select', MultiSelect);
