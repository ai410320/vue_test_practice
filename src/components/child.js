const Child = Vue.component("Child", {
    name: "Child",
  
    template: "<div>Child component</div>"
  })
  
  const Parent = Vue.component("Parent", {
    name: "Parent",
  
    template: "<div><child /></div>"
  })