# CGDN-Angular-StackBlitz
# Tham khảo ví dụ tại trang 
https://angular.io/start <br>
https://viblo.asia/p/cung-tim-hieu-kien-truc-cua-angular-2-va-su-khac-nhau-ve-kien-truc-giua-angular-1-va-angular-2-gGJ592qpKX2 <br>
http://itprotraining.vn/vi/tips-cong-nghe/Kien-truc-tong-quat-cua-Angular%205 <br>
# Deploy app lên firebase
 https://medium.com/@longboardcreator/deploying-angular-6-applications-to-firebase-hosting-b5dacde9c772
# Luồng đi của ứng dụng
+ Step 1 : Bắt đầu từ file main.js để bootstrap module
+ Step 2 : Từ file main.js sẽ bootstrap file app.module.ts
+ Step 3 : Từ app.module.ts sẽ gọi app.component.ts
+ Step 4 : Trong app.component.ts ta khai báo app-root selector. Cái mà ta khai báo trong file index.html
là root của cả chương 

## Databinding
### One way biding sử dụng {{ }}
+ Step 1 trong file user.component.ts trong component user. Ta có biến là name với giá trị
là angular
+ Step 2 để hiển thị được giá trị angular lên trên front end cho người dùng thấy thì ta
truyền vào biến nam trong 2 dấu ngoăc nhọn trong file user.component.html với cú 
 pháp sau {{ name }} 
+ Như vậy chúng ta có thể kết luận để hiển thị giá trị từ ts qua html thì ta dùng {{ }}
### Truyền giá trị vào sử dụng như 1 attribute
+ Step 1
Trong file user.component.html. Ta có thể dùng attribute của thẻ để hiển thị giá trị
<input value="{{ name }}" />

+ Steo 2 chúng ta có thể Sử dụng atrribute để biding dư liệu cách thứ 2. Cái này được khuyên nên 
<input [value]="name" />

### Truyền sự kiện
+ Step 1 . Trong file html ta khai báo nút button có sự kiện onclick <button (click)="onButtonClicked()">Change Name</button>. Như ta thấy sự kiện được bọc trong 2 dấu ngoại tròn () .
Sự kiện có thể là click, dbClick etc. Sau đó là tên sự kiện.
+ Step 2 . Ta khai báo hàm onButtonCLick trong file user.component.ts. Để sử lý sự kiện khi người dùng click vào 
### 2 way binding
+ Step 1 : Chúng ta phải sử dụng ngModule để thực hiện 2 way binding. Vì ngModule là 1 phần của FormsModule. Nên muốn sử dụng được 
ngModule thì chúng ta phải import bằng tay FormsModule vào file app.module.

## Kết nối webservice
+ Trong file cart.service.js import thư viện HttpClientmport.
+ Để gọi webservice phương thức get http.get('http://164.132.226.137:1441/feed') . Trong đó http://164.132.226.137:1441/feed là đường dẫn tới webservice
## Observable
+ Vì sao chọn Observable 
https://www.learnrxjs.io/
https://techtalk.vn/chon-promise-hay-observable-khi-lam-viec-voi-angular.html
## ES6
https://www.lifewire.com/best-javascript-es6-features-4579821
## Subcribe
+Khi chúng ta làm việc với Observable thì sẽ thường xuyên sử dụng phương thức subscribe để theo dõi các thay đổi của dữ liệu hoặc nhận về kết quả của một công việc nào đó. 
this.http.get(apiUrl).subscribe(val => console.log(val));
## UnSubcribe
+Khi API trả về kết quả thì dữ liệu đó sẽ được log ra qua phương thức subscribe. Và để kết thúc quá trình lắng nghe kết quả từ API trả về thì chúng ta sẽ xử dụng đến phương thức unsubscribe
this.http.get(apiUrl).subscribe(val => console.log(val)).unsubscribe();
