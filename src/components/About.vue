<template>
  <v-card >
    <v-row>
      <v-col class="mb-10"></v-col>
    </v-row>

      <v-row dense>
        <v-col cols="8">
          <v-card id="cards">
            <div>
              <div>
                <v-card-title class="headline">Sobre Nós</v-card-title>
                <v-card-text class="text--primary">
                  Nome: Lucas Pereira Rangel
                  Matrícula: 201911200330
                </v-card-text>
              </div>
              <v-col class="mb-13"></v-col>
            </div>
          </v-card>
        </v-col>
      </v-row>
  </v-card>
</template>

<style scoped>
  #cards{
    left: 25%;
  }
  #t{
  
    bottom: 80%
  }
  
</style>

<script>
export default {
  name: 'About',
  components: {},
  data: () => ({
    //
  }),
};
</script>