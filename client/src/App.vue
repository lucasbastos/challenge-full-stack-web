<template>
  <div class="container">
    <div class="sidenav">
      <img src="./assets/logo-grupo-a-1.svg" alt="">
      <span>Módulo Acadêmico</span>
      <a href="#">Alunos</a>
    </div>
    <div class="content">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field label="Digite sua busca" solo></v-text-field>
          </v-col>
          <v-col>
            <v-btn>
              Cadastrar Aluno
            </v-btn>
          </v-col>
        </v-row>
          <v-data-table :headers="headers" :items="students" sort-by="ra" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn color="blue-grey" class="ma-2 white--text" @click="editItem(item)">
                Editar
                <v-icon right dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn @click="editItem(item)" color="blue-grey" class="ma-2 white--text">
                Excluir
                <v-icon right dark>
                  mdi-delete
                </v-icon>
              </v-btn>
            </template>
          </v-data-table>
      </v-container>
    </div>
    <Dialog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import Dialog from './components/Dialog.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Dialog,
  },

  data: () => ({
    //
    students: [],
    dialog: false,
    headers: [
      {
        text: 'Registro Acadêmico',
        align: 'center',
        sortable: true,
        value: 'ra',
      },
      {
        text: 'Nome',
        align: 'center',
        sortable: true,
        value: 'name',
      },
      {
        text: 'CPF',
        align: 'start',
        sortable: true,
        value: 'cpf',
      },
      {
        text: 'Ações',
        align: 'start',
        sortable: true,
        value: 'actions',
      },
    ],
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  mounted() {
    axios.get('http://localhost:3000/api/v1/students')
      .then((response) => {
        this.students = response.data;
      });
  },

  methods: {
    editItem(item: any) {
      //
      console.log(item);
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins');

body {
  font-family: 'Poppins', sans-serif;
}

img {
  width: 80%;
}

.content__search {
  width: 50%;
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidenav span {
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  background-color: #f1f1f1;
  border-radius: 6px;
  padding: 10px;
}

.sidenav a {
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  margin-top: 10px;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.content {
  margin-left: 200px;
}

.content__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
