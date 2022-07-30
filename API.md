# API POINTS



## USER

### Menampilkan user user
```
GET: /user
response:
[
  {
    "id"              : "",
    "nama"            : "",
    "ig_url"          : "",
    "github_url"      : "",
    "yt_url"          : ""
  },
  {
    ...
  }
]
```
### Menampilkan biodata user berdasarkan ```id```
```
GET: /user/[id]
response:
{
  "id"              : "",
  "nama"            : "",
  "ig_url"          : "",
  "github_url"      : "",
  "yt_url"          : ""
}
```
### Menambahkan biodata user
```
POST: /user
data:
{
  "nama"            : "",
  "ig_url"          : "",
  "github_url"      : "",
  "yt_url"          : ""
}
response:
true    //if true
false   //if false
```
### Mengubah biodata user
```
PUT: /user
data:
{
  "nama"            : "",
  "ig_url"          : "",
  "github_url"      : "",
  "yt_url"          : ""
}
response:
true    //if true
false   //if false
```
### Menghapus biodata user
```
DELETE: /user/[id]
response:
true    //if true
false   //if false
```
