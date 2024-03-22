<template>
  <el-row class="tac">
    <el-col :span="24">
      
      <el-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        router
        style="border-right: 0px !important;"
      >

        <el-submenu 
          v-for="item in menu" 
          :index="item.id" 
          :key="item.id"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group 
            style="overflow: hidden;" 
            v-for="sub in item.sub" 
            :key="sub.route"
          >
            <!-- <el-menu-item 
              :index="sub.route"
              v-text="sub.name"
            /> -->
            <el-menu-item 
              :index="sub.route"
              v-text="sub.name"
            />
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
// import menu from '@/config/menu-config'
export default {
  data(){
    return{
      // menu: menu,
      menu: [
        {
          name: '目录1',
          id: '1-1',
          sub: [
            {
              name: '菜单1',
              route: 'BasicLayout'
            },
            {
              name: '菜单2',
              route: 'BasicContainer'
            }
          ]
        },
        {
          name: '目录2',
          id: '1-2',
          sub: [
            {
              name: '菜单1',
              route: 'FormRadio'
            },
            {
              name: '菜单2',
              route: 'FormCheckbox'
            }
          ]
        }
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>