<template>
  <div class="container">
    <mdb-container>
      <mdb-row class="page row">
        <mdb-col md="6" xs="12" class="half-page column animated fadeInLeft">
          <h1 class="heading display-5">Судебная информация в одном месте</h1>
          <h2 class="subheading font-weight-bold">
            Получите доступ ко всем записям судебных систем Российской Федерации
          </h2>
          <mdb-btn
            rounded
            icon="caret-right"
            icon-right
            color="lily"
            @click="goToSearch()"
            >Начать</mdb-btn
          >
        </mdb-col>
        <mdb-col class="column" md="6" xs="12">
          <mdb-view style="margin: 5px;">
            <img
              class="animated fadeInDown"
              src="img/big_logo.jpg"
              height="400px"
              width="400px"
            />
            <mdb-mask flex-center class="hm-gradient" />
          </mdb-view>
        </mdb-col>
      </mdb-row>
      <section class="text-center">
        <h2 class="h1-responsive font-weight-bold my-5">
          Сервис будет полезен
        </h2>
        <!-- <p class="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p> -->
        <mdb-row>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-5">
            <h5 class="font-weight-bold mt-4 mb-3">
              Правозащитным организациям
            </h5>
            <p class="grey-text">
              Собрать статистику для аналитических отчетов
            </p>
          </mdb-col>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-5">
            <h5 class="font-weight-bold mt-4 mb-3">
              Практикующим юристам
            </h5>
            <p class="grey-text">
              Узнать судебную практику для успешной защиты в суде
            </p>
          </mdb-col>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-5">
            <h5 class="font-weight-bold mt-4 mb-3">
              Независимым медиа
            </h5>
            <p class="grey-text">
              Подготовить статьи о судебном разбирательстве
            </p>
          </mdb-col>
        </mdb-row>
      </section>
      <section class="my-5">
        <mdb-row class="page row">
          <mdb-col lg="7" class="half-page column animated fadeInLeft">
            <h5 class="font-weight-bold mb-3">Принцип работы</h5>
            <p class="grey-text">
              Мы ежедневно осуществляем загрузку данных из судебных систем через
              программный интерфейс, представляя данные в удобном виде
            </p>
          </mdb-col>
          <mdb-col lg="5" class="text-center text-lg-left">
            <img class="img-fluid" src="img/api.png" alt="Sample image" />
          </mdb-col>
        </mdb-row>
      </section>
      <section class="text-center">
        <h2 class="h1-responsive font-weight-bold my-5">
          Особенности сервиса
        </h2>
        <mdb-row>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-5">
            <h5 class="font-weight-bold mt-4 mb-3">
              Регулярные обновления
            </h5>
            <p class="grey-text">
              Сервис ежедневно пополняется новыми судебными данными
            </p>
          </mdb-col>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-5">
            <h5 class="font-weight-bold mt-4 mb-3">
              Удобный интерфейс
            </h5>
            <p class="grey-text">
              Простая система поиска и работы с данными
            </p>
          </mdb-col>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-5">
            <h5 class="font-weight-bold mt-4 mb-3">
              Возможность выгрузки данных
            </h5>
            <p class="grey-text">
              Доступна функция выгрузки данных для дальнейших работ
            </p>
          </mdb-col>
        </mdb-row>
      </section>
      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">
          Типы подписок
        </h2>
        <!-- <p class="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p> -->
        <mdb-row>
          <mdb-col lg="2" md="12" class="mb-lg-0 mb-2"></mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card>
              <mdb-card-body>
                <h5 class="mb-4">Индивидуальная</h5>
                <div class="d-flex justify-content-center">
                  <div
                    class="card-circle d-flex justify-content-center align-items-center"
                  >
                    <mdb-icon icon="user" class="indigo-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">3 000 ₽/мес</h2>
                <p class="grey-text">
                  Для индивидуальных клиентов
                </p>
                <!-- <mdb-btn rounded color="indigo">Buy now</mdb-btn> -->
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card>
              <mdb-card-body>
                <h5 class="mb-4">Корпоративная</h5>
                <div class="d-flex justify-content-center">
                  <div
                    class="card-circle d-flex justify-content-center align-items-center"
                  >
                    <mdb-icon icon="users" class="indigo-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">2 000 ₽/мес</h2>
                <p class="grey-text">
                  Для совместного пользования,за одного пользователя
                </p>
                <!-- <mdb-btn rounded color="indigo">Buy now</mdb-btn> -->
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="2" md="12" class="mb-lg-0 mb-2"></mdb-col>
        </mdb-row>
      </section>
    </mdb-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvTag from "@/components/VTag";
import { FETCH_TAGS } from "@/store/actions.type";
import {
  mdbNavbar,
  mdbNavbarNav,
  mdbNavItem,
  mdbBtn,
  mdbContainer,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbFileInput,
  mdbIcon,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbDropdownItem,
  mdbRow,
  mdbCol,
  mdbParallax,
  mdbView,
  mdbMask,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardFooter,
  mdbCardText,
  mdbTooltip,
  mdbBadge,
  mdbTestimonial,
  mdbAvatar
} from "mdbvue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch(FETCH_TAGS);
  },
  methods: {
    goToSearch() {
      if (this.isAuthenticated) {
        this.$router.push("/search");
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "tags"]),
    tag() {
      return this.$route.params.tag;
    }
  },
  components: {
    RwvTag,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbBtn,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbContainer,
    mdbFileInput,
    mdbIcon,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbCol,
    mdbRow,
    mdbParallax,
    mdbView,
    mdbMask,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbCardText,
    mdbTooltip,
    mdbBadge,
    mdbTestimonial,
    mdbAvatar
  }
};
</script>

<style scoped>
.logo {
  height: 40px;
  width: auto;
  margin: 10px;
}

.menu {
  text-align: end;
  padding-right: 0.5em;
}

.hm-gradient {
  /* background: linear-gradient(
    40deg,
    rgba(0, 51, 199, 0.3),
    rgba(209, 149, 249, 0.3)
  ); */
}

.navbar {
  background: linear-gradient(
    40deg,
    rgba(0, 51, 199, 0.3),
    rgba(0, 188, 212, 0.7)
  );
  box-shadow: 0 0 0 0 transparent;
  margin-top: 50px;
}

.navbar:not(.top-nav-collapse) {
  background: transparent;
}

.row {
  margin: 0;
  padding: 0;
}

.column {
  margin: 0;
  padding: 0;
}

.half-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 6rem;
}

.heading {
  font-weight: 700;
  color: #01579b;
}

.subheading {
  margin: 2.5rem 0;
  color: #b2b4c0;
  font-size: 1.5rem;
}

.btn-lily {
  background: linear-gradient(
    40deg,
    rgba(0, 51, 199, 0.7),
    rgba(0, 188, 212, 0.7)
  );
}

.image {
  width: 100%;
}

.paragraph {
  padding: 3rem 1.5em;
}

@media screen and (max-width: 770px) {
  .half-page {
    padding: 2rem;
  }

  .navbar {
    position: relative;
    margin-top: 5px;
  }
  .navbar:not(.top-nav-collapse) {
    background: linear-gradient(
      40deg,
      rgba(0, 51, 199, 0.3),
      rgba(0, 188, 212, 0.7)
    );
  }
}

@media screen and (max-width: 400px) {
  .half-page {
    padding: 1rem;
  }
}

@media screen and (max-width: 320px) {
  .heading {
    font-size: 4em;
  }
}
</style>
