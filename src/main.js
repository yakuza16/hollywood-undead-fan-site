// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.meta.push({
    name: "keywords",
    content:
      "Hollywood Undead, Swan Songs, Undead, American Tragedy, New Empire, Charlie Scene, J3T. J-dog, Funny Man, Danny Rose, Notes from the underground, Day of the dead",
  });
}
