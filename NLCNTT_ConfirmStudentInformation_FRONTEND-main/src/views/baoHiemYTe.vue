<template>
<div class="row justify-content-center form-container">
  <div class="col-8 mb-2  rounded frame-login">
    <h2 class="text-center pt-2">Đăng ký không mua bảo hiểm y tế tại trường</h2>
    <div class="container">

    </div>
    <form class="form-horizontal p-2 " action="/action_page.php">
      <div class="form-group row ">
        <label class="control-label col-sm-2 font-weight-bold" for="name">Họ và tên:</label>
        <div class="col-sm-5">
          <input type="name" class="form-control" id="name" placeholder="Nhập vào họ và tên" name="name" required>
        </div>
      </div>
      <div class="form-group row ">
        <label class="control-label col-sm-2 font-weight-bold" for="mssv">MSSV:</label>
        <div class="col-sm-5">
          <input type="mssv" class="form-control" id="mssv" placeholder="Nhập vào mssv" name="mssv" required>
        </div>
      </div>
      <div class="form-group row ">
        <label class="control-label col-sm-2 font-weight-bold" for="email">Email:</label>
        <div class="col-sm-5">
          <input type="name" class="form-control" id="email" placeholder="Nhập vào địa chỉ email" name="name" required>
        </div>
      </div>
      <div class="form-group row ">
        <label class="control-label col-sm-2 font-weight-bold" for="phone">Số điện thoại:</label>
        <div class="col-sm-5">
          <input type="tel" class="form-control" id="textTelephone" placeholder="Nhập vào số điện thoại"
            name="textTelephone" required>
        </div>
      </div>
      <div class="form-group row ">
        <label class="control-label col-sm-2 font-weight-bold" for="mssv">Mã số bảo hiểm y tế:</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" id="mbhyt" placeholder="Nhập vào mã bảo hiểm y tế" name="mbhyt" required>
        </div>
      </div>
    
    
      <div class="form-group row">
        <div class="offset-sm-2 col-sm-5">
          <!-- <button type="submit" class="btn btn-primary">Gửi</button> -->
          <button type="submit" class="btn btn-primary text-light  btn-submit border border-white ">Gửi</button>
        </div>
      </div>
    </form>
  </div>
</div>






  <!-- <div class="container">
    <h2>Đăng ký không mua bảo hiểm y tế tại trường
    
    </h2>
    <div class="container border border-info p-2 ">
      
      <form class="form-horizontal p-2 " action="/action_page.php">
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="name">Họ và tên:</label>
          <div class="col-sm-5">
            <input type="name" class="focd vue-projectnpmrm-control" id="name" placeholder="Nhập vào họ và tên" name="name" required>
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="mssv">MSSV:</label>
          <div class="col-sm-5">
            <input type="mssv" class="form-control" id="mssv" placeholder="Nhập vào mssv" name="mssv" required>
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="email">Email:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="email" placeholder="Nhập vào địa chỉ email" name="name" required>
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="phone">Số điện thoại:</label>
          <div class="col-sm-5">
            <input type="tel" class="form-control" id="textTelephone" placeholder="Nhập vào số điện thoại"
              name="textTelephone" required>
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="mssv">Mã số bảo hiểm y tế:</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="mbhyt" placeholder="Nhập vào mã bảo hiểm y tế" name="mbhyt"
              required>
          </div>
        </div>
    
    
        <div class="form-group row">
          <div class="offset-sm-2 col-sm-5">
            <button type="submit" class="btn btn-primary">Gửi</button>
          </div>
        </div>
      </form>
    </div>

  </div> -->
    
</template>

<style>
.loaiBieuMau{
    font-style: italic;
    text-decoration: none;
    list-style: none;
    font-weight: 100;
    border: double blue;
    padding: 2%;
}
.container{
  padding-top: 0% !important;
}
.form-container {
  margin: 4%;
}

.btn-submit {
  margin: 10%;

}

.btn-submit:hover {
  background-color: rgb(116, 171, 235);
  border-color: rgb(253, 243, 100) !important;
}

.btn-submit:active {
  background-color: rgb(47, 125, 214);

}
</style>