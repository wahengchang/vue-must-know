
by [Chris](https://scotch.io/tutorials/demystifying-vue-lifecycle-methods)

Actions of lifecycle methods can be broken down into four categories:

 - #### Creation
    . beforeCreate
    . created
 - #### Mounting
 - #### Updating
 - #### Destruction

# lifecycle 

![vue lifecycle](https://vuejs.org/images/lifecycle.png)

## Remark

### Create

#### beforeCreate()
This hook observes data and initialization events in your component

#### created()
This hook is invoked when Vue has set up events and data observation.

### Mounting

#### beforeMount()
After this hook, the `$el` property is added to the Vue instance

#### mounted()
This hook, gives you access to templates and enables interaction with the DOM.

### Updating

#### beforeUpdate()
This hook runs __*after data changes*__, and __*before re-rendering*__.

#### updated()
This hook runs __*after data changes*__, and __*after re-rendering*__.


## Reference
 - [https://alligator.io/vuejs/component-lifecycle/](https://alligator.io/vuejs/component-lifecycle/)
 - [https://scotch.io/tutorials/demystifying-vue-lifecycle-methods](https://scotch.io/tutorials/demystifying-vue-lifecycle-methods)