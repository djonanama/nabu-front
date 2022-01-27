<template>
  <!-- Footer -->
  <mdb-footer color="indigo" class="font-small pt-0">
    <mdb-container>
      <mdb-row class="pt-5 mb-3 text-center d-flex justify-content-center">
        <mdb-col md="4" class="b-3">
          <h6 class="title font-weight-bold"><a href="#!">Партнеры</a></h6>
        </mdb-col>
        <mdb-col md="4" class="b-3">
          <h6 class="title font-weight-bold"><a href="#!">О нас</a></h6>
        </mdb-col>
        <mdb-col md="4" class="b-3">
          <h6 class="title font-weight-bold"><a href="#!">Контакты</a></h6>
        </mdb-col>
      </mdb-row>
      <hr class="rgba-white-light" style="margin: '0 15%'" />
      <mdb-row class="d-flex text-center justify-content-center mb-md-0 mb-4">
        <mdb-col md="8" sm="12" class="mt-5">
          <p style="lineHeight: '1.7rem'">Судебная информация в одном месте</p>
        </mdb-col>
      </mdb-row>
      <hr
        class="clearfix d-md-none rgba-white-light"
        style="margin: '10% 15% 5%'"
      />
      <mdb-row class="pb-3">
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a class="fb-ic"
              ><i class="fab fa-facebook fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="tw-ic"
              ><i class="fab fa-twitter fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="gplus-ic"
              ><i class="fab fa-google-plus fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="li-ic"
              ><i class="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="ins-ic"
              ><i class="fab fa-instagram fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="pin-ic"
              ><i class="fab fa-pinterest fa-lg white-text"> </i
            ></a>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; {{ new Date().getFullYear() }} Copyright:
        <a href="https://www.nabu.expert"> Nabu.expert </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "RwvFooter",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>
