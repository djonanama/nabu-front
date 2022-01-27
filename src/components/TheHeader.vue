<template>
  <mdb-navbar style="margin-bottom:24px;">
    <div class="container">
      <mdb-navbar-brand
        href="#"
        class="font-weight-bold text-monospace"
        :to="{ name: 'home' }"
      >
        NABU
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item v-if="!isAuthenticated" :to="{ name: 'login' }">
            <router-link :to="{ name: 'login' }">
              <mdb-icon icon="sign-in-alt" size="lg" />
            </router-link>
          </mdb-nav-item>

          <mdb-dropdown tag="li" v-if="isAuthenticated" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed
              ><mdb-icon icon="user" size="lg" />
            </mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <h6 class="dropdown-header" v-if="currentUser.username">
                {{ currentUser.username }}
              </h6>
              <mdb-dropdown-item :to="{ name: 'settings' }"
                >Настройки</mdb-dropdown-item
              >
              <div class="dropdown-divider"></div>
              <mdb-dropdown-item @click="logout">Выйти</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </div>
  </mdb-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

import {
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbContainer,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbIcon
} from "mdbvue";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbContainer,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbIcon
  }
};
</script>
