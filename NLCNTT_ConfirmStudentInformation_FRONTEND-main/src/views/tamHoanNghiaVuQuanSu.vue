<template>
  <div class="row justify-content-center form-container">
    <div class="col-8 mb-2  rounded frame-login">
      <h2 class="text-center pt-2">Biểu mẫu đăng ký tạm hoãn nghĩa vụ quân sự</h2>
      <div class="container">

      </div>
      <form class="form-horizontal p-2 " action="/action_page.php">
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="name">Họ và tên:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="name" placeholder="Nhập vào họ và tên" name="name">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="mssv">MSSV:</label>
          <div class="col-sm-5">
            <input type="mssv" class="form-control" id="mssv" placeholder="Nhập vào mssv" name="mssv">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="email">Email:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="email" placeholder="Nhập vào địa chỉ email" name="name">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="name">Ngày sinh:</label>
          <div class="col-sm-5">
            <input type="date" class="form-control" id="date" name="date">
          </div>
        </div>
        <div class="form-group row  ">
          <label class="control-label col-sm-2 font-weight-bold" for="class">Mã lớp:</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="class" placeholder="Nhập vào mã lớp" name="class">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="major">Ngành học:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="major" placeholder="Nhập vào ngành học" name="major">
          </div>
        </div>
      
      
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="name">Khóa:</label>
          <!-- <div class="col-sm-5">
                        <input type="name" class="form-control" id="name" placeholder="Nhập vào tên của bạn" name="name">
                      </div> -->
      
          <select id="khoa" name="khoa">
            <option value="k43">k43</option>
            <option value="k44">k44</option>
            <option value="k45">k45</option>
            <option value="k46">k46</option>
            <option value="k47">k47</option>
            <option value="k48">k48</option>
          </select>
        </div>
        <div class="form-group row ">
          <div class="offset-sm-2 col-sm-5 ">
            <div class="checkbox">
              <label><input class="" type="checkbox" name="remember"> Ghi nhớ tôi</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-sm-2 col-sm-5">
            <button type="submit" class="btn btn-primary text-light  btn-submit border border-white ">Gửi</button>
          </div>
        </div>
      </form>
    </div>
  </div>
















  <!-- <div class="container-fluid d-flex justify-content-center">
    <h2>Biểu mẫu đăng ký tạm hoãn nghĩa vụ quân sự</h2>
    <div class="container  p-2 ">
     
      <form class="form-horizontal p-2 " action="/action_page.php">
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="name">Họ và tên:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="name" placeholder="Nhập vào họ và tên" name="name">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="mssv">MSSV:</label>
          <div class="col-sm-5">
            <input type="mssv" class="form-control" id="mssv" placeholder="Nhập vào mssv" name="mssv">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="email">Email:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="email" placeholder="Nhập vào địa chỉ email" name="name">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="name">Ngày sinh:</label>
          <div class="col-sm-5">
            <input type="date" class="form-control" id="date" name="date">
          </div>
        </div>
        <div class="form-group row  ">
          <label class="control-label col-sm-2 font-weight-bold" for="class">Lớp:</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="class" placeholder="Nhập vào mã lớp" name="class">
          </div>
        </div>
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="major">Ngành:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="major" placeholder="Nhập vào ngành học" name="major">
          </div>
        </div>
    
    
        <div class="form-group row ">
          <label class="control-label col-sm-2 font-weight-bold" for="name">Khóa:</label>
    
          <select id="khoa" name="khoa">
            <option value="k43">k43</option>
            <option value="k44">k44</option>
            <option value="k45">k45</option>
            <option value="k46">k46</option>
            <option value="k47">k47</option>
            <option value="k48">k48</option>
          </select>
        </div>
        <div class="form-group row ">
          <div class="offset-sm-2 col-sm-5 ">
            <div class="checkbox">
              <label><input class="" type="checkbox" name="remember"> Ghi nhớ tôi</label>
            </div>
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
.form-container{
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