# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Scoped Styles

Adding scoped to the style element within a component will then only be available/applied within that component and not globally

```
<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
```

# Alternative Folder Structures
In the last lecture I introduced one possible folder structure. It's a great structure in small and medium sized projects.

Whilst it also might work fine in bigger projects, there's also an alternative you might want to consider.

Instead of having your components in a components/ folder (and storing other shared files in other folders - e.g. shared/), you can also group your files by feature.

This could look like this:

- main.js
- users/
- - account/
- - analytics/
- shop
- - main/
- - checkout/


# Module Resources & Useful Links
The Code used in this Module can be found attached to this Lecture!

If you want to learn more about VueJS Components, you may want to have a look at this Article from the official Docs (important: It does cover Topics which will be taught in the next Course Modules!): http://vuejs.org/guide/components.html

Also see: https://vuejs.org/v2/guide/components-registration.html