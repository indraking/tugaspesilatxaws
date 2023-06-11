<template>
  <div class="list-task">
    <div v-if="tasks.length === 0" class="empty-state">Belum ada task</div>
    <div  v-for="(item, index) of tasks" :key="index" class ="item-task d-flex align-items-start border-bottom pt-3 pb-4">
      <input type="checkbox" name="status" id="task" class="me-2 mt2" :checked="item.isDone" @change="item.isDone = !item.isDone">
      <div class="d-flex flex-column">
        <div :class="['title-task', {'completed-task' : item.isDone}]">{{ item.title }}</div>
        <div class="description-task small text-muted">{{ item.description}}</div>
        <a href="#" class="rm-button" @click="rmTask(index)"> Delete</a>
      </div>

    </div>
    <div class="action py-2">
    <a href="#" class="add-button" v-if="!isCreating" @click="isCreating = !isCreating">Add task</a>
    <div class="add-card" v-else>
      <div class="card mb-2">
        <div class="form-control d-flex flex-column p-0">
          <input v-model="titleValue" type="text" class="form-control" placeholder="Title">
          <textarea v-model="descriptionValue" class="form-control" placeholder="Description" rows="3"></textarea>
        </div>
      </div>
      <div class="button-wrapper d-flex">
        <button class="btn btn-primary me-2" @click="addTask">Submit</button>
        <button class="btn btn-outline-secondary" @click="isCreating = !isCreating">Cancel</button>
      </div>
    </div>
  </div>
  </div>

</template>
<style>
.completed-task {
  text-decoration: line-through;
}
</style>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default{
    data(){
      return{
        tasks:[
          {
            title: 'Task 1',
            description : 'Deskripsi',
            isDone : false,
          },
        ],
        isCreating : false,
        titleValue : '',
        descriptionValue : ''
      };
    },
        methods : {
        addTask(){
          console.log('title',this.titleValue)
          console.log('description',this.descriptionValue)
          this.tasks.push({
            title: this.titleValue,
            description:this.descriptionValue,
            isDone:false,
          })
          this.titleValue = '';
          this.descriptionValue = '';
          this.isCreating = false;
        },
        rmTask: function(index){
          this.tasks.splice(index,1);
        }
      }
  }
</script>

