<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo_white.png" alt="logo图" />
    </div>
    <p class="title">公司企业网站模板</p>
    <p class="address_tel_fax">
      <p>地址：{{ address }}</p>
      <p>QQ群：<a style="color:#fff" target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=ce9f5f0d1d7553fb5634521f79a89668ad0d798eb35047f93300df63ebae4c05">{{ qqgroup }}</a></p>
    </p>
    <p class="email_wx">
      <p>博客：<a :href='blog + "neveryu/"' style="color:#fff">{{ blog }}</a></p>
      <p>邮箱：{{ email }}</p>
      <p>公司QQ号：{{ qq }}</p>
    </p>
    <p class="copy">Copyright &copy; 2018 - Now {{ company }}</p>
  </div>
</template>

<script setup name="Footer">
const address = import.meta.env.VITE_APP_ADDRESS
const phone = import.meta.env.VITE_APP_PHONE
const email = import.meta.env.VITE_APP_EMAIL
const qq = import.meta.env.VITE_APP_QQ
const company = import.meta.env.VITE_APP_COMPANYNAME
const blog = import.meta.env.VITE_APP_BLOG
const qqgroup = import.meta.env.VITE_APP_QQGROUP
</script>

<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}

.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}

.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}

.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}

@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }

  .address_tel_fax {
    font-size: 12px;
  }

  .email_wx {
    font-size: 12px;
  }

  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>

