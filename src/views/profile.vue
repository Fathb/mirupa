<template>
  <Jumbotron></Jumbotron>
  <div class="row justify-content-center">
    <div class="col-10 info-panel">
      <div class="row">
        <div class="col">
          <a href="#sejarah"><h4>
            Sejarah
          </h4>
          </a>
        </div>
        <div class="col">
          <a href="#visimisi"><h4>
            Visi & Misi
          </h4>
          </a>
        </div>
        <div class="col">
          <a href=""><h4>
            Struktur
          </h4>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="sejarah">
    <h3>Sejarah MIRU Putra</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ex dolor, eaque tempore tempora, beatae, voluptatem quam sed modi velit molestias praesentium, repellat. Eligendi facilis odit quaerat sint quia, dicta autem culpa tenetur officia fuga blanditiis eaque deleniti, quidem distinctio similique voluptatum voluptate optio. Sunt quo nostrum non commodi, iste?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quam possimus eos labore nesciunt nulla excepturi, accusantium placeat quidem reprehenderit sequi voluptatibus! At perspiciatis quasi labore optio quo quas inventore eum soluta distinctio quia, temporibus praesentium et consequuntur culpa dolores explicabo facilis iste blanditiis quos numquam est reprehenderit odio accusamus necessitatibus? Doloremque numquam beatae quaerat, unde quis labore quod mollitia eum. Placeat in minima unde molestias animi quas, assumenda molestiae!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi doloremque quo sequi repellendus rerum molestiae ipsam, incidunt pariatur fugit, fuga aperiam nulla! Non earum, reprehenderit sit fugiat magni aspernatur soluta, odio eveniet impedit obcaecati neque? Hic numquam magni, voluptates eos.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae suscipit doloremque, saepe quos delectus, animi nisi magnam quia excepturi officia id vero necessitatibus autem, fuga totam laboriosam voluptas numquam cum maxime est ipsam aperiam. Amet quasi ducimus eligendi praesentium eius quod saepe ut facilis atque velit magni porro, perferendis laboriosam eum earum unde ad aliquid maiores officia rerum, repellat quibusdam!
    </p>
  </div>
  <section id="visimisi">
    <div class="row border border-success pt-2">
      <div class="col">
        <h3>VISI & MISI</h3>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col border border-success">
        <h3>Visi</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cumque ipsa repellendus cupiditate distinctio, at voluptas dicta non voluptatem optio.
        </p>
      </div>
      <div class="col border border-success text-left">
        <h3 class="text-center">Misi</h3>
        <ul>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <div class="struktur text-left">
    <div class="row boder border-success">
      <div class="col text-center">
        <h3>STRUKTUR PENGURUS & GURU <br>MI RAUDLATUL ULUM PUTRA</h3>
      </div>
    </div>
    <div class="row text-left boder border-success">
      <div class="col col-1 text-center">
        No
      </div>
      <div class="col col-7 text-center">
        Nama
      </div>
      <div class="col text-center">
        Jabatan
      </div>
    </div>
    <div class="row">
      <div class="col col-1">
        1
      </div>
      <div class="col col-7">
        Amsori
      </div>
      <div class="col">
        Kepala Madrasah
      </div>
    </div>
    <div class="row">
      <div class="col col-1">
        2
      </div>
      <div class="col col-7">
        Ahmad Fauzan
      </div>
      <div class="col">
        PKM Kurikulum
      </div>
    </div>
    <div class="row">
      <div class="col col-1">
        3
      </div>
      <div class="col col-7">
        Ahmad Fauzi
      </div>
      <div class="col">
        PKM Kesiswaan
      </div>
    </div>
    <div class="row">
      <div class="col col-1">
        4
      </div>
      <div class="col col-7">
        Fathul Bari
      </div>
      <div class="col">
        PKM Keuangan
      </div>
    </div>
    <div class="row">
      <div class="col col-1">
        5
      </div>
      <div class="col col-7">
        M Fawaid
      </div>
      <div class="col">
        PKM Administrasi
      </div>
    </div>
  </div>
</template>

<script>
  import Jumbotron from '../components/home/Jumbotron.vue'

  export default {
    name: 'Profile',
    components: {
      Jumbotron
    }
  }
  </script>

  <style scoped>
    .info-panel {
      height: 120px;
      width: 80%;
      background-color: blue;
      margin-top: -70px;
      border-radius: 10px;
    }
    .info-panel h4 {
      margin-top: 35px;
      color: white;
      font-size: 32px;
      font-weight: bold;
    }
    #sejarah {
      width: 90%;
      box-shadow: 1px 1px 1px 1px green;
      border-radius: 5px;
      margin: 30px auto;
      padding: 15px;
    }
    #sejarah p {
      font-size: 16px;
      text-align: justify;
    }
    #sejarah h3 {
      margin-bottom: 20px;
    }
    #visimisi {
      height: 100%;
      width: 90%;
      margin: 10px auto;
    }
    .struktur {
      width: 85%;
      margin: 30px auto;
    }
    .struktur .row, .struktur .row .col {
      border: solid green;
    }


  </style>