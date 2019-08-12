
# Step to install Vue-CLI
Install NodeJS from [https://nodejs.org/en/](https://nodejs.org/en/)

After installation, open PS and run
> npm install -g vue-cli

# Creating a project using the Vue-CLI

Navigate to the [vue-cli v2](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--) help page to see the included templates.

Go to a folder and run the following command, followed by entering the project details
> vue init webpack-simple Project_Folder

Navigate to Project_Folder and run the below command to install all the dependencies
> npm install

After the install is done, you should start the development server
> npm run dev

# Build distribution folder for production use
Run the following in the powershell command line
> npm run build
# The ".vue" file
You can learn more about ".vue" Files in this Article from the official [Docs](http://vuejs.org/guide/single-file-components.html)

Learn more about the render() method in another Article in the official [Docs](http://vuejs.org/guide/render-function.html)

Finally, it's important to be aware of the fact, that you can also load your App.vue File (your main Component/ Instance) via the following two Ways (Alternatives to render() ):

1) Using the ES6 Spread Operator (for that, you need to add babel-preset-stage-2 as a Dependency and to your .babelrc File):

> npm install --save-dev babel-preset-stage-2

```
.babelrc:
{
"presets": [
["es2015", { "modules": false }],
["stage-2"]
]
}
```
```
import Vue from 'vue'
import App from './App.vue'

new Vue({
el: '#app',
...App
});
```
2) Using mount() :
Also install the stage-2 preset as described above.

  

```
import Vue from 'vue'
import App from './App.vue'

const vm = new Vue({
...App
});
vm.$mount('#app');
```

# The CLI
Learn more about the CLI [here](https://github.com/vuejs/vue-cli)
Local CSS / Sass Files and CLI Templates
The webpack-simple template doesn't support local CSS or Sass files, because no CSS loader is set up.
Use the webpack template (not webpack-simple) to get this [functionality](https://github.com/vuejs-templates/webpack)

# Debugging VueJS Projects

There are two main Tools you may use:

1) The Developer Tools in Chrome (see below)

2) The Vue Developer Tools ([https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools))

When working with a Project created by the CLI (using Webpack!), you can easily debug your running Application by opening your  **Developer Tools**  (see below in Chrome) and going to  **"Sources"** there.  

You should see a  **"Webpack"** folder which you may open to see  **all your files**  included in the project (see image below, in orange box).

You can open any file there and  **set breakpoints etc**. to debug your running application.

![](https://i.udemycdn.com/redactor/2016-11-02_10-10-13-e40864043d089c76b6bc694bf747fe52/vuejs-debugging.png)